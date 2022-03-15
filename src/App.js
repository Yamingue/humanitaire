import NavBar from "./Component/NavBar";
import IMG1 from './assets/1.jpg'
import Titre from "./Component/Titre";
import PersonCard from "./Component/PersonCard";
import { Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import Mission from "./Component/Mission";
import ContactForm from "./Component/ContactForm";
import AdhesionForm from "./Component/AdhesionForm";
import Footer from "./Component/Footer";
import Realisation from "./Component/Realisation";

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

      <Container
        style={{
          marginBottom: 224
        }}
      >
        <Titre text="Préambule" />
        <Card>
          <CardContent>
            <Typography>
              La position géopolitique du Tchad le place au carrefour de multiples pôles de crises climatique et sécuritaires régionaux affectant sa population, surtout celles vivants dans les localités frontalières et difficiles d’accès. Cette position qui confère au pays un rôle de partenaire de première importance pour assurer la stabilité sécuritaire dans la région n’est pas sans conséquence sur la vie sociale au niveau interne. En effet,  cette sûreté exige l´adoption d´une approche intégrée axée sur les notions interconnectées de la paix, de la sécurité humaine et environnementale, de la sécurité économique (moyens de subsistances) et alimentaire, l’accès à l’éducation, bref de la protection sociale.
              Ces défis sociétaux, induits par des crises humanitaires, ont des contours aussi multiples que variés qui peuvent être appréhendés par la recherche scientifique.  Il n’est pas superflu de rappeler la place de choix qu’occupe la recherche dans tout processus de développement humain.
              Il est donc nécessaire et judicieux que le Tchad soit doté d’une structure de recherche capable l’aider à s’inscrire dans ce processus global qu’est la promotion de la recherche scientifique et surtout la recherche orientée vers le l’humanitaire.
              L’intérêt est sans nul doute encore grand pour le Tchad qui, depuis l’enchainement des crises sécuritaires dans la Sous-région, constitue un pilier de la lutte contre l’insécurité et amorce une phase décisive du dialogue orienté vers le développement humain.
              Au regard de ce constat et conscient de nos modestes capacités et compétences susceptibles de contribuer à cette lutte commune, NOUS, Jeunes Chercheurs et Etudiants, décidons de la création d’une association de recherche dénommée Centre pour la Recherche Humanitaire, en abrégé CRH, avec une vision pluridisciplinaire et orientée vers la promotion de la recherche pour contribuer aux prises des décisions humanitaires au Tchad.

            </Typography>
          </CardContent>
        </Card>
        <Titre text="Missions" size={93} id='mission' />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{
            marginTop: 10
          }}>
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
          }}>
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
        <Titre text="Nos Réalisation" size={170} id='realisation' />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{
            marginTop: 10
          }}>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Realisation />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Realisation />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Realisation />
          </Grid>
          <Grid item
            sm={4}
            xs={12}
            md={3}
          >
            <Realisation />
          </Grid>
        </Grid>
        <Titre text="Contact" id="contact" size={90} />
        <ContactForm />
        <Titre text="Adhesion" id="adhesion" size={105} />
        <AdhesionForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
