import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IMG from '../assets/1.jpg'

const useStyles = makeStyles({
  root: {
      paddingTop:15
  },
  media: {
    height: 140,
    width: 140,
    borderRadius:140/2,
    margin:' 0 auto'
  },
});

export default function PersonCard({nom='Yamingue kingatal'}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={IMG}
          title="Contemplative Reptile"
        />
        <CardContent style={{
            justifyContent:'center',
            display:'flex',
            flexDirection:'column',
            textAlign:'center'
        }}>
          <Typography gutterBottom variant="h6" component="h2">
            {nom}
          </Typography>
          <Typography color="textSecondary" component="p">
                Developpeur Web
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}