import { AppBar, Toolbar, Typography } from "@mui/material"

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      color="whiteSmoke"
    >
      <Toolbar color='inherit'>
        <Typography variant='h4' color="black">NavBar</Typography>
      </Toolbar>
    </AppBar>
  )
}
