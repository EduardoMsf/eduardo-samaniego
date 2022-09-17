import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"


export const Projects = () => {
  //https://i.pinimg.com/originals/44/d9/45/44d94526bd51197bf42258d47d2aa4e4.jpg
  // https://i.pinimg.com/originals/72/fe/53/72fe53c49bfb4a849d13b3c494dd7ef0.jpg
  //https://i.pinimg.com/originals/85/0e/cf/850ecfc55a32e45c57d3f1400d96af3b.jpg
  return (
    <Box id='Projects' sx={{padding: '75px 0'}}>
      <Grid container justifyContent='center' sx={{marginBottom:'32px'}}>
        <Grid item>
          <Typography variant="h3" color='whitesmoke'>Proyectos</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='space-evenly'>
        <Grid item>
          <Card sx={{ maxWidth: 345, margin:'16px 0' }}>
            <CardMedia
            component="img"
            alt="Your Name"
            height="240"
            image="https://res.cloudinary.com/dheyjds01/image/upload/v1663300049/elecciones-react_bwsvk7.png"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Elecciones Mundiales
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Es un simulador de elecciones, número diferente de candidatos en cada categoría.
              Gráfica de números aleatorios de los candidatos a presidencia, así como el uso de LocalStorage para guardar tus votos.
            </Typography>
            <Typography variant="body2" color="purple">
              MaterialUI React Responsive Netlify
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><a style={{textDecoration:'none'}} href="https://elecciones-react.netlify.app/" target='_blank'>Demo</a></Button>
              <Button size="small"><a style={{textDecoration:'none'}} href='https://github.com/EduardoMsf/elecciones-react' target='_blank'>Código</a></Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card sx={{ maxWidth: 345, margin:'16px 0' }}>
            <CardMedia
            component="img"
            alt="Weathering with you"
            height="240"
            image="https://res.cloudinary.com/dheyjds01/image/upload/v1663300034/countries-msf_v6ya3r.png"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Countries App Frontend Mentor Challenge
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Página que muestra todos los países de una API, puedes buscar por país o por región, así como una ruta detallada de cada país.
            </Typography>
            <Typography variant="body2" color="purple">
              React CSS API React-Router Responsive Netlify
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><a style={{textDecoration:'none'}} href="https://countries-msf.netlify.app/" target='_blank'>Demo</a></Button>
              <Button size="small"><a style={{textDecoration:'none'}} href='https://github.com/EduardoMsf/countries-app' target='_blank'>Código</a></Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card sx={{ maxWidth: 345, margin:'16px 0' }}>
            <CardMedia
            component="img"
            alt="Suzume no Tojimari"
            height="240"
            image="https://res.cloudinary.com/dheyjds01/image/upload/v1663300466/coming-soon_l7n8bs.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Próximamente
            </Typography>
            <Typography variant="body2" color="text.secondary">
              He realizado diversos proyectos, me encuentro mejorando, desplegando y refactorizando mi código, dándole de esta forma una nueva identidad a mis proyectos. ¡Estaré encantado de recibir tus comentarios!
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Demo</Button>
              <Button size="small">Código</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
