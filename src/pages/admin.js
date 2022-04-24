import { Button, Card, CardContent, Input, TextField, Typography } from "@material-ui/core";
import { Image as ImageIcon } from "@material-ui/icons";
import React from "react";
import EquipeTable from "../Component/EquipeTable";
import Layout from "../Component/Layout";


export default function Admin(props){

    return <Layout>
        <Card style={{marginBottom:'15px'}}>
            <CardContent>
                    <TextField margin='dense' variant='outlined' label='Nom complet' fullWidth/>
                    <TextField margin='dense' variant='outlined' label='Function' fullWidth/>
                    <Input id='raised-button-file' type="file" hidden style={{display:'none'}}/>
                    <Button color='primary' variant='contained'>
                        <ImageIcon color='white' aria-label="upload picture" />
                        <Typography>
                        <label htmlFor="raised-button-file">Selectioner photo</label>
                        </Typography>
                    </Button>
            </CardContent>
        </Card>
        <EquipeTable />
    </Layout>
}