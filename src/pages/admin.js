import { Button, Card, CardContent, TextField, Typography } from "@material-ui/core";
import { Image as ImageIcon } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import EquipeTable from "../Component/EquipeTable";
import Layout from "../Component/Layout";
import Icon from '@material-ui/core/Icon';
import { getDatabase, ref, push, onValue } from 'firebase/database'
import { getStorage, ref as refStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../functions/firebase";

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

export default function Admin(props) {
    const [nom, setNom] = useState('nom')
    const [titre, setFunction] = useState('function')
    const [team, setTeam] = useState([])
    const fileRef = useRef();
    
    useEffect(()=>{
        onValue(ref(database,'/team'),snap=>{
            let s= snap.toJSON()
            let arr = []
            for (const key in s) {
                const element = s[key];
                element['id']=key
                arr.push(element)
            }
            setTeam(arr)
        })
    },[])

    const send=()=>{
        let file = fileRef.current.files[0];
        console.log(team)
        if(file && nom.trim()!=='' && titre.trim()!==''){
            console.log('start sending');
            let storageRef = refStorage(storage,((new Date()).getTime()).toString());
            let task = uploadBytesResumable(storageRef,file)
            task.on('state_changed',snap=>{
                console.log(snap)
            },e=>{
                console.log(e)
            },()=>{
                console.log('File available at');
            
                getDownloadURL(task.snapshot.ref).then((downloadURL) => {
                    push(ref(database,'/team'),{
                        image:downloadURL,
                        titre: titre,
                        nom:nom
                    })
                    console.log('File available at', downloadURL);
                  });
            })

        }


    }

    return <Layout>
        <Card style={{ marginBottom: '15px' }}>
            <CardContent>
                <TextField onChange={e => setNom(e.target.value)} value={nom} margin='dense' variant='outlined' label='Nom complet' fullWidth />
                <TextField onChange={e => setFunction(e.target.value)} value={titre} margin='dense' variant='outlined' label='Function' fullWidth />
                <input ref={fileRef} id='raised-button-file' type="file" hidden style={{ display: 'none' }} />
                <Button color='primary' variant='outlined'>
                    <ImageIcon color='inherit' aria-label="upload picture" />
                    <Typography>
                        <label htmlFor="raised-button-file">Selectioner photo</label>
                    </Typography>
                </Button> <br />
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                    style={{marginTop:'8px'}}
                    onClick={e=>{
                        send()
                    }}
                >
                    Envoyer
                </Button>
            </CardContent>
        </Card>
        <EquipeTable data={team} />
    </Layout>
}