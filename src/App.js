import NavBar from "./Component/NavBar";
import Titre from "./Component/Titre";
import PersonCard from "./Component/PersonCard";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Mission from "./Component/Mission";
import AdhesionForm from "./Component/AdhesionForm";
import Footer from "./Component/Footer";
import Realisation from "./Component/Realisation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "./Component/Banner";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import firebaseApp from "./functions/firebase";
const database = getDatabase(firebaseApp);

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function App() {
  const [team, setTeam] = useState([]);
  const [activity, setActivity] = useState([]);
  const [mission, setMission] = useState([]);
  const [apropos, setApropos] = useState([]);

  useEffect(() => {
    onValue(ref(database, "/team"), (snap) => {
      let s = snap.toJSON();
      let arr = [];
      for (const key in s) {
        const element = s[key];
        element["id"] = key;
        arr.push(element);
      }
      setTeam(arr);
    });
    onValue(ref(database, "/activity"), (snap) => {
      let s = snap.toJSON();
      let arr = [];
      for (const key in s) {
        const element = s[key];
        element["id"] = key;
        arr.push(element);
      }
      setActivity(arr);
    });
    onValue(ref(database, "/mission"), (snap) => {
      let s = snap.toJSON();
      let arr = [];
      for (const key in s) {
        const element = s[key];
        element["id"] = key;
        arr.push(element);
      }
      setMission(arr);
    });
    onValue(ref(database, "/apropos"), (snap) => {
      let s = snap.toJSON();
      setApropos(s);
    });
  }, []);
  return (
    <>
      <NavBar />
      <Banner />

      <Container
        style={{
          marginBottom: 10,
        }}
      >
        <Titre text="A propos" />
        <Card>
          <CardContent>
            <Typography variant="subtitle2">{apropos}</Typography>
          </CardContent>
        </Card>
        <Titre text="Missions" size={93} id="mission" />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{
            marginTop: 10,
          }}
        >
          {mission.map((el) => (
            <Grid item sm={4} xs={12} md={3} key={el.id}>
              <Mission data={el} text="Mission A" />
            </Grid>
          ))}
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
          {team.map((el) => (
            <PersonCard data={el} key={el.id} />
          ))}
        </Carousel>
        ;
        <Titre text="Nos activités" size={170} id="activite" />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{
            marginTop: 10,
          }}
        >
          {activity.map((el) => (
            <Grid item sm={4} xs={12} md={3} key={el.id}>
              <Realisation data={el} />
            </Grid>
          ))}
        </Grid>
        <Titre text="Contactez nous" id="contactus" size={105} />
        <AdhesionForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
