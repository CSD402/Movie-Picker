import React, { Component } from "react";
import { render } from "react-dom";
//import Background from "../../images/Background.png";
//import './HomeMinder.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import back from './assets/Background.png'


import {
	Grid,
} from "@material-ui/core/"

const pages = ['About', 'Settings'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default class HomeMinder extends Component{
	constructor(props){
		super(props)
		this.state={
			email:'',
			password:'',
			anchorElNav:null,
			anchorElUser:null
		}
	}


  componentDidMount(){
    console.log("Home page mounted")
    
  }
	login = ()=>{
		console.log("In login")
		
	}
	
	render(){
		const handleOpenNavMenu = (event) => {
			//setAnchorElNav(event.currentTarget);
			this.setState({
				anchorElNav:event.currentTarget
			})
		  };
		  const handleOpenUserMenu = (event) => {
			//setAnchorElUser(event.currentTarget);
			this.setState({
				anchorElUser:event.currentTarget
			})
		  };
		
		  const handleCloseNavMenu = () => {
			//setAnchorElNav(null);
			this.setState({anchorElNav:null})
		  };
		
		  const handleCloseUserMenu = () => {
			//setAnchorElUser(null);
			this.setState({
				anchorElUser:null
			})
		  };


		return(
			<>
        
		<div style={{
	  //backgroundImage: 'url("/static/Background.png")',
    backgroundImage: `url(${back})` ,
    height: "100%",
	  position: "absolute",
	  left: 0,
	  width: "100%",
	  overflow:'auto'
    }}>
		

	<AppBar position="static" style={{ background: 'transparent'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Minder
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}	
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(this.state.anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" /* src="/static/images/avatar/2.jpg" */ />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={this.state.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(this.state.anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


	<Grid 
		container
		spacing={1}
		direction="column"
		justify="flex-start"
		alignItems="stretch"
		style={{ marginTop:"20%",marginLeft:"3%"}}
	
	>
		<Grid item md={2} >
			<Typography variant="h1" component="div" gutterBottom style={{fontFamily:"Suez-One",color:"White"}}>
				Welcome.
			</Typography>
		</Grid>
		<Grid item md={8} >
			<Typography variant="h6" component="div" gutterBottom style={{fontFamily:"Barlow",color:"White"}}>
				Find movies to watch together
			</Typography>
		</Grid>
		<Grid item md={2} >
			<Button variant="contained" style={{backgroundColor: '#E18B6D'}}>
				Start Watching
			</Button>
		</Grid>



	</Grid>
	<Grid 
		container
		spacing={3}
		direction="column"
		justify="flex-start"
		alignItems="stretch"
		style={{ marginTop:"20%"}}
	
	>
		<Grid item md={12} >
			<Button variant="contained" style={{backgroundColor: '#E18B6D',borderRadius:10}} fullWidth onClick={()=>{
          window.open("/create","_self")
      }}>
				Create Room
			</Button>
		</Grid>
		<Grid item md={12} >
			<Button variant="contained" style={{backgroundColor: '#E18B6D'}} fullWidth onClick={()=>{
          window.open("/joinRoom","_self")
      }}>
				Join Room
			</Button>
		</Grid>
		

		

	</Grid>
      
    </div>

		{/* <div  className="container">
      		<h1>This is red car</h1>
    	</div> */}
	
        
      </>
		)
	}
}


