import { Grid, Typography } from "@mui/material"

export const Home = () => {
  const textOptions = {color:'#f5f5f5', fontSize:{ xs:'6rem', sm:'9rem', md:'10rem', lg:'11rem'}}
  return (
    <Grid container display='grid' justifyContent='center' id='Home'>
      <Grid item >
        <Typography variant='h1' align='center' sx={textOptions} >Hello, I'm <span style={{color:'rgb(240,158,206)'}}>Eduardo</span>!</Typography>
      </Grid>   
    </Grid>
  )
}
