import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"


export const Projects = () => {
  return (
    <Grid container justifyContent='space-evenly' id='Projects'>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          alt="Your Name"
          height="320"
          image="https://i.pinimg.com/originals/44/d9/45/44d94526bd51197bf42258d47d2aa4e4.jpg"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kimi no na wa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Demo</Button>
            <Button size="small">Código</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          alt="Weathering with you"
          height="320"
          image="https://i.pinimg.com/originals/72/fe/53/72fe53c49bfb4a849d13b3c494dd7ef0.jpg"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tenki no ko
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Demo</Button>
            <Button size="small">Código</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          alt="Suzume no Tojimari"
          height="320"
          image="https://i.pinimg.com/originals/85/0e/cf/850ecfc55a32e45c57d3f1400d96af3b.jpg"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Suzume no Tojimari
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Demo</Button>
            <Button size="small">Código</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
