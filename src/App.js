import NavBar from "./Component/NavBar";
import IMG1 from './assets/1.jpg'
import Titre from "./Component/Titre";
import PersonCard from "./Component/PersonCard";
import { Container, Grid } from "@material-ui/core";
import Mission from "./Component/Mission";
import ContactForm from "./Component/ContactForm";
import AdhesionForm from "./Component/AdhesionForm";

function App() {
  return (
    <>
      <NavBar />
      <img src={IMG1}
        alt={"humanitaire"}
        style={{
          width: '100%',
          height: 300,
          objectFit: 'cover'
        }} />

      <Container>
        <Titre text="Missions" size={93} id='mission' />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{
            marginTop: 10
          }}
        >
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Mission />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Mission />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Mission />
          </Grid>
        </Grid>
        <Titre text="Notre équipe" id="equipe" size={140} />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{
            marginTop: 10
          }}
        >
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <PersonCard nom="Frank kingatal" />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <PersonCard nom="Kagro valery" />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <PersonCard nom="Joehn Doe" />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <PersonCard nom="Janette Doe" />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <PersonCard nom="Ismael djekale" />
          </Grid>
        </Grid>
        <Titre text="Contact" id="contact" size={90} />
        <ContactForm />
        <Titre text="Adhesion" id="adhesion" size={105} />
        <AdhesionForm />
      </Container>
    </>
  );
}

export default App;
