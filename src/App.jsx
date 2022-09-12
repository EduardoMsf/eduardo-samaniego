import { AppTheme } from './theme'
import { Grid, Typography } from '@mui/material'
import { NavBar } from './components/NavBar'
import { Box } from '@mui/system'

export const App = () => {

  return (
    <AppTheme>
      <Box>
        <NavBar />
        <Grid container sx={{margin:'80px 0'}} justifyContent='center'>
          <Grid item >
            <Typography variant='h1' align='center' color="primary">Hello, I'm <span style={{color:'rgb(240,158,206)'}}>Eduardo</span>!</Typography>
          </Grid>
        </Grid>
      </Box>
    </AppTheme>
  )
}

