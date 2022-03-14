import { Button, Card, CardContent, Grid, Icon, TextField } from "@material-ui/core";

function AdhesionForm(props) {
    return <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Card style={{
            marginBottom: 10,
            marginTop: 20,
            width: '90%',
        }}>
            <CardContent>
                <form>
                    <TextField style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Nom Complet" />
                    <TextField style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Email ou telephone" />
                    <TextField style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Ville" />
                    <TextField multiline minRows={4} type={'text'} style={{ width: '100%', marginBottom: 15 }} variant='outlined' label="Commentaire" />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<Icon>send</Icon>}
                    >
                        Envoyer
                    </Button>
                </form>
            </CardContent>
        </Card>
    </Grid>
}

export default AdhesionForm;