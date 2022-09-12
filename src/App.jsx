import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppTheme } from './theme'
import { Typography } from '@mui/material'

export const App = () => {

  return (
    <AppTheme>
      <Typography variant='h1'>Hola mundo MUI</Typography>
    </AppTheme>
  )
}

