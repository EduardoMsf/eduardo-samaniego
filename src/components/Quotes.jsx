import { Grid, Typography } from "@mui/material"


export const Quotes = () => {
  return (
    <Grid container display='grid' justifyContent='center' sx={{backgroundColor:'#1b1b1b'}}>
      <Grid item>
        <Typography variant="h3" align="center" color='whitesmoke'>Inspiración</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center" color='whitesmoke'>
          "Intenta hacer pequeños logros todos los días. Si lo haces así, Imagínate lo que lograrás en un mes... Un año... Una vida..."
        </Typography>
        <Typography variant="body2" align="center" color='secondary'>
          Fernando Herrera
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center" color='whitesmoke'>
        "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito"
        </Typography>
        <Typography variant="body2" align="center" color='secondary'>
          Will Duran
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center" color='whitesmoke'>
        "En este momento (inicio de la pandemia), los creadores del mundo tienen un lienzo en blanco... Te invito a crear"
        </Typography>
        <Typography variant="body2" align="center" color='secondary'>
          Christian Van Der Henst
        </Typography>
      </Grid>
    </Grid>
  )
}
