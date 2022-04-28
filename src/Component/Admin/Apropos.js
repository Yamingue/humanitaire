import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Icon, TextField, Typography } from "@material-ui/core";
import { onValue, getDatabase, ref,set } from "firebase/database";
import firebaseApp from "../../functions/firebase";
const database = getDatabase(firebaseApp);

export default function Apropos(props) {
    const [isEdite, setEdite] = useState(false)
    const [text, setText] = useState('This impressive paella is a perfect party dish and a fun meal to cook together.')
    useEffect(()=>{
        onValue(ref(database,'/apropos'),snap=>{
            let s= snap.toJSON()
            setText(s)
        })
    },[])

    return <Card>
        <CardHeader title={'A props'} />
        <CardContent>
            {!isEdite ? <Typography variant="body2" component="p">
                {text}
            </Typography> : <TextField
                id="outlined-multiline-static"
                label="Editer"
                multiline
                minRows={4}
                value={text}
                onChange={e=>setText(e.target.value)}
                variant="outlined"
                fullWidth
            />
            }

        </CardContent>
        <CardActions>
            <Button color='primary' variant='outlined'
                startIcon={<Icon>edite</Icon>}
                onClick={e=>{
                    if (isEdite) {
                        set(ref(database, '/apropos'), text);
                    }
                    setEdite(!isEdite)
                }}
            >
                {isEdite?'Voir':'Editer'}
            </Button>
        </CardActions>
    </Card>
}