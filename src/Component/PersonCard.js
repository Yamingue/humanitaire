import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    paddingTop: 15,
    margin: 10
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: 140 / 2,
    margin: ' 0 auto'
  },
});

export default function PersonCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={'personnel image'}
        />
        <CardContent style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          <Typography gutterBottom variant="h6" component="h2">
            {
              data.nom
            }
          </Typography>
          <Typography color="textSecondary" component="p">
            {
               data.titre
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}