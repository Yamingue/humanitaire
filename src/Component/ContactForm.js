import { Button, Card, CardContent, Grid, Icon, TextField } from "@material-ui/core";
import Colors from "../Colors/Color";

function ContactForm(props) {
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
                    <TextField style={{width:'100%', marginBottom:15}} variant='outlined' label="Nom Complet"/>
                    <TextField style={{width:'100%', marginBottom:15}} variant='outlined' label="Email ou telephone"/>
                    <TextField multiline minRows={4} type={'text'} style={{width:'100%', marginBottom:15}} variant='outlined' label="Commentaire"/>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor:Colors.secondary
                        }}
                        endIcon={<Icon>send</Icon>}
                    >
                        Envoyer
                    </Button>
                </form>
            </CardContent>
        </Card>
    </Grid>
}

export default ContactForm;