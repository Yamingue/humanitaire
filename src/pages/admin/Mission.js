import { Button, Card, CardContent, Input, TextField, Typography } from "@material-ui/core";
import { Image as ImageIcon } from "@material-ui/icons";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import React from "react";
import Layout from "../../Component/Layout";
import MissionTable from "../../Component/MissionsTable";
import firebaseApp from "../../functions/firebase";

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


export default function Mission(props){

    return <Layout>
        <Card style={{marginBottom:'15px'}}>
            <CardContent>
                    <TextField margin='dense' variant='outlined' label='Libelet' fullWidth/>
                    <TextField multiline minRows={4} type={'text'} margin='dense' variant='outlined' label='Description' fullWidth/>
                    <Input id='raised-button-file' type="file" hidden style={{display:'none'}}/>
                    <Button color='primary' variant='contained'>
                        <ImageIcon color='white' aria-label="upload picture" />
                        <Typography>
                        <label htmlFor="raised-button-file">Selectioner photo</label>
                        </Typography>
                    </Button>
            </CardContent>
        </Card>
        {/* <MissionTable /> */}
    </Layout>
}