import { Grid, Typography } from "@material-ui/core";

export default function Titre({ text = 'Nos missions', size = '160px', id = '#' }) {
  return <Grid
    id={id}
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    style={{
      marginTop: 5,
      marginBottom: 10
    }}>
    <Grid
      style={{
        borderBottom: '3px solid blue',
      }}
      item>
      <Typography variant='h5' >
        {text}
      </Typography>
    </Grid>

  </Grid>
}