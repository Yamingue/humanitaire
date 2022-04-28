import { Button, Card, CardContent, Grid, Icon, TextField } from "@material-ui/core";
import { getDatabase, ref, push } from 'firebase/database'
import { useState } from "react";
import firebaseApp from "../functions/firebase";

const database = getDatabase(firebaseApp)
function AdhesionForm(props) {
    const [nom,setNom] = useState('yam')
    const [email,setMail] = useState('yamking01@gmail.com')
    const [ville,setVille] = useState('Sarh')
    const [cmt,setCmt] = useState('je plaide pour une adhesion')

    const send=(e)=>{
         push(ref(database,'/adhesion'),{
            nom:nom,
            email: email,
            ville: ville,
            commentaire:cmt
        })
    }
    return <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Card style={{
            marginBottom: 10,
            marginTop: 20,
            width: '100%',
        }}>
            <CardContent>
                <form>
                    <TextField value={nom} onChange={e=>setNom(e.target.value)} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Nom Complet" />
                    <TextField value={email} type='email' onChange={e=>setMail(e.target.value)} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Email ou telephone" />
                    <TextField value={ville} onChange={e=>setVille(e.target.value)} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Ville" />
                    <TextField value={cmt} onChange={e=>setCmt(e.target.value)} multiline minRows={4} type={'text'} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Commentaire" />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<Icon>send</Icon>}
                        onClick={ev=>{
                            ev.preventDefault()
                            console.log(ev)
                            send()
                        }}
                        //onClick={e=>e.preventDefault()}
                        type='submit'
                    >
                        Envoyer
                    </Button>
                </form>
            </CardContent>
        </Card>
    </Grid>
}

export default AdhesionForm;