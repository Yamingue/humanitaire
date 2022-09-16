import { Button, Card, CardContent, Grid, Icon, TextField } from "@material-ui/core";
import { getDatabase, ref, push } from 'firebase/database'
import { useState } from "react";
import Colors from "../Colors/Color";
import firebaseApp from "../functions/firebase";

const database = getDatabase(firebaseApp)
function AdhesionForm(props) {
    const [nom,setNom] = useState('')
    const [email,setMail] = useState('')
    const [ville,setVille] = useState('')
    const [cmt,setCmt] = useState('')

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
                    <TextField color={Colors.secondary} value={nom} onChange={e=>setNom(e.target.value)} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Nom Complet" />
                    <TextField color={Colors.secondary} value={email} type='email' onChange={e=>setMail(e.target.value)} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Email ou telephone" />
                    <TextField color={Colors.secondary} value={ville} onChange={e=>setVille(e.target.value)} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Ville" />
                    <TextField color={Colors.secondary} value={cmt} onChange={e=>setCmt(e.target.value)} multiline minRows={4} type={'text'} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Commentaire" />
                    <Button
                        variant="contained"
                        color='secondary'
                        endIcon={<Icon>send</Icon>}
                        style={{
                            backgroundColor:Colors.primary2
                        }}
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