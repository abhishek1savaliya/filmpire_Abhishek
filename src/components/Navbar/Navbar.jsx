import React, { useState } from 'react'
import {AppBar,IconButton,Toolbar,Drawer,Button,useMediaQuery, Avatar} from '@mui/material';
import {Menu,AccountCircle,Brightness4,Brightness7} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import useStyles from './styles'
import {useTheme} from '@mui/material/styles'
import {Sidebar} from '..'

const Navbar = () => { 
  
  // const [name,setName] = useState();
  const [mobileOpen,setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobaile = useMediaQuery('(max-width:600px');
  const theme = useTheme();
  const isAuthenticated = true;
  

  return (
   <>
    <AppBar position="fixed">
   <Toolbar className = {classes.toolbar}>
    {isMobaile && (
      <IconButton 
      color="inherit" 
      edge="start" 
      style={{outline:'none'}} 
      onClick={()=> setMobileOpen((prevMobileOpen)=> !prevMobileOpen)} 
      claasName = {classes.menuButton}>
        <Menu />
      </IconButton>
    )}
    <IconButton color='inherit' sx={{ml:1}} onClick={()=>{}} >
    {
      theme.palette.mode==='dark' ? <Brightness7 /> :<Brightness4 />
    }
    
    </IconButton>
    {!isMobaile && 'Search...'}
    <div>
      {!isAuthenticated ? (
          <Button color="inherit" onClick={()=>{}}>
              Login &nbsp; <AccountCircle />
          </Button>
      ):(
        <Button color="inherit" component={Link} to={`/profile/:id`} className = {classes.linkButton} onClick={()=>{}}>
            {!isMobaile && <>My Movies &nbsp;</>}
            <Avatar style={{width:30,height:30}} alt="Profile" scr='https://static.vecteezy.com/system/resources/previews/002/640/730/original/default-avatar-placeholder-profile-icon-male-vector.jpg' />
        </Button>
      )}

    </div>
    {isMobaile && 'Search...'}
   </Toolbar>
    </AppBar>
    <div>
    <nav className={classes.drawer}>
    {isMobaile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ):(
            <Drawer  classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>)}
      </nav>
    </div>
   </>
  )
}

export default Navbar
