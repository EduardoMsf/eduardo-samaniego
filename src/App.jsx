import { AppTheme } from './theme'
import { Grid, Typography } from '@mui/material'
import { NavBar } from './components/NavBar'
import { Box } from '@mui/system'
import { About } from './components/About'
import { Home } from './components/Home'
import { Quotes } from './components/Quotes'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

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
          <Grid item >
            <About />
          </Grid>
          <Grid item sx={{backgroundColor:'#1B1B1B'}}>
            <Projects />
          </Grid>
          <Grid item >
            <Quotes />
          </Grid>
          <Grid item >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310"><path fill="#1b1b1b" fillOpacity="1"   d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,202.7C840,192,960,128,1080,122.7C1200,117,  1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,  480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </Grid>
          <Grid>
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </AppTheme>
  )
}

