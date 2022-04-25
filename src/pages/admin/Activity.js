import { Button, Card, CardContent, TextField, Typography } from "@material-ui/core";
import { Image as ImageIcon } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import Layout from "../../Component/Layout";
import MissionTable from "../../Component/MissionsTable";
import { getDatabase, ref, push, onValue, get } from 'firebase/database'
import { getStorage, ref as refStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../functions/firebase";
import SaveIcon from '@material-ui/icons/Save';

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);



export default function Activity(props) {
    const [libelet, setLibelet] = useState('activite name')
    const [description, setDes] = useState('short description')
    const fileRef = useRef();
    const [activities, setActivity] = useState([])
    const save =()=>{
        let file = fileRef.current.files[0];
        if (libelet.trim()!==''&& description.trim()!=='' && file) {
            let storageRef = refStorage(storage,((new Date()).getTime()).toString());
            let task = uploadBytesResumable(storageRef,file)
            task.on('state_changed',snap=>{
                console.log(snap)
            },e=>{
                console.log(e)
            },()=>{
                getDownloadURL(task.snapshot.ref).then((downloadURL) => {
                    push(ref(database,'/activity'),{
                        image:downloadURL,
                        libelet: libelet,
                        description: description,
                    })
                    console.log('File available at', downloadURL);
                  });
            })
        }
    }

    // onValue(ref(database,'/activity'),snap=>{
    //     let s= snap.toJSON()
    //     let arr = []
    //     for (const key in s) {
    //         const element = s[key];
    //         element['id']=key
    //         arr.push(element)
    //     }
    //     setActivity(arr)
    // })
    get(ref(database,'/activity')).then(snap=>{
        let s= snap.toJSON()
        let arr = []
        for (const key in s) {
            const element = s[key];
            element['id']=key
            arr.push(element)
        }
        setActivity(arr)
    })

    return <Layout>
        <Card style={{ marginBottom: '15px' }}>
            <CardContent>
                <TextField onChange={e => setLibelet(e.target.value)} value={libelet} margin='dense' variant='outlined' label='Libelet' fullWidth />
                <TextField onChange={e => setDes(e.target.value)} value={description} multiline minRows={4} type={'text'} margin='dense' variant='outlined' label='Description' fullWidth />
                <input ref={fileRef} id='raised-button-file' type="file" accept="image/*" style={{ display: 'none' }} />
                <Button color='primary' variant='outlined'>
                    <ImageIcon color='primary' aria-label="upload picture" />
                    <Typography>
                        <label htmlFor="raised-button-file">Selectioner photo</label>
                    </Typography>
                </Button> <br />
                <Button onClick={e=>save()} variant='contained' color='primary' style={{ margin: '10px' }}>
                    <SaveIcon /> Enregistrer
                </Button>
            </CardContent>
        </Card>
        <MissionTable data={activities} />
    </Layout>
}