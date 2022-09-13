import { Grid, Typography } from "@mui/material"


export const About = () => {
  return (
    <Grid container display='grid' justifyContent='center'>
      <Grid item>
        <Typography variant="h3" align="center">Acerca de mí</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center">
          Mi nombre es Eduardo Samaniego, tengo 26 años, actualmente me encuentro aprendiendo sobre desarrollo   frontend. Me gusta la tecnología, los autos y los e-sports
        </Typography>
        <Typography variant="body1" align="center">
          Mi gusto por el desarrollo web surgió cuando participé en el desarrollo de un proyecto web para causas   benéficas de         mi localidad. Desde entonces es mi meta profesional convertirme en desarrollador   frontend!
        </Typography>
      </Grid>
    </Grid>
  )
}
