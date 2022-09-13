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
          <Grid item  sx={{border:'1px solid black', backgroundColor:'#1B1B1B', height:'400px'}}>
            <Home/>
          </Grid>
          <Grid item sx={{border: '1px solid black'}}>
            <About />
          </Grid>
          <Grid item sx={{border: '1px solid black'}}>
            <Quotes />
          </Grid>
          <Grid item sx={{border: '1px solid black'}}>
            <Projects />
          </Grid>
        </Grid>
      </Box>
    </AppTheme>
  )
}

