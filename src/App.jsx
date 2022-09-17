import { AppTheme } from './theme'
import { Grid, Typography } from '@mui/material'
import { NavBar } from './components/NavBar'
import { Box } from '@mui/system'
import { About } from './components/About'
import { Home } from './components/Home'
import { Quotes } from './components/Quotes'
import { Projects } from './components/Projects'

export const App = () => {

  return (
    <AppTheme>
      <Box>
        <NavBar />
        <Grid container display='grid' sx={{margin:'55px 0'}} justifyContent='center'>
          <Grid item  sx={{ backgroundColor:'#1B1B1B', height:'400px'}}>
            <Home/>
          </Grid>
          <Grid item sx={{height:'auto'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140"><path fill="#1B1B1B" fillOpacity="1" d="M0,32L1440,128L1440,0L0,0Z"></path></svg>
          </Grid>
          <Grid item sx={{}}>
            <About />
          </Grid>
          <Grid item sx={{backgroundColor:'#1B1B1B'}}>
            <Projects />
          </Grid>
          <Grid item sx={{}}>
            <Quotes />
          </Grid>
        </Grid>
      </Box>
    </AppTheme>
  )
}

