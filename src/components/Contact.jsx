import { Grid, IconButton, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from "@mui/icons-material/Instagram";

export const Contact = () => {

  return (
    <Grid container id='Contact' sx={{backgroundColor:'#1b1b1b', height:'120px', margin:'-55px 0'}} justifyContent='center' alignItems='center'>
      <Grid item>
        <IconButton size="large">
          <a href='https:github.com/EduardoMsf' target='_blank'>
            <GitHubIcon color='whiteSmoke' fontSize="large"/>
          </a>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size="large">
          <a href='https://www.linkedin.com/in/eduardomsf/' target='_blank'>
            <LinkedInIcon color='whiteSmoke' fontSize="large" />
          </a>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size="large">
          <a href='https://www.instagram.com/samaniegomsf/' target='_blank'>
            <InstagramIcon color='whiteSmoke' fontSize="large" />
          </a>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton size="large">
          <GoogleIcon color='whiteSmoke' fontSize="large"/>
        </IconButton>
      </Grid>
      <Grid item>
        <Typography sx={{color:'#f5f5f5'}}>samaniegomsf@gmail.com</Typography>
      </Grid>
    </Grid>
  )
}
