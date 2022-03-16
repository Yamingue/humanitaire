import NavBar from "./Component/NavBar";
import Titre from "./Component/Titre";
import PersonCard from "./Component/PersonCard";
import { Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import Mission from "./Component/Mission";
import AdhesionForm from "./Component/AdhesionForm";
import Footer from "./Component/Footer";
import Realisation from "./Component/Realisation";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner from "./Component/Banner";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function App() {
  return (
    <>
      <NavBar />
      <Banner />

      <Container
        style={{
          marginBottom: 10
        }}
      >
        <Titre text="A propos" />
        <Card>
          <CardContent>
            <Typography variant='subtitle2' >
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
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
        >
          <PersonCard nom="Kagro Doe" />
          <PersonCard nom="Yamingue Doe" />
          <PersonCard nom="kingatal Doe" />
          <PersonCard nom="Joehn Doe" />
          <PersonCard nom="valdo Doe" />
        </Carousel>;
        <Titre text="Nos activités" size={170} id='activite' />
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
        <Titre text="Adhesion" id="adhesion" size={105} />
        <AdhesionForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
