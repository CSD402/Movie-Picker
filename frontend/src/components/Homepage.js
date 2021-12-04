import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage"
import HomeMinder from "./HomeMinder";
import ProfileMinder from "./ProfileMinder";
import JoinRoomPage from "./JoinRoomPage";
//import RoomJoinPage from "./RoomJoinPage"
//import HomeMinder from "./HomeMinder"
//import Room from "./Room";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Redirect
} from "react-router-dom";


//import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

//const theme = createMuiTheme();

/* const useStyles = makeStyles((theme) => {
  root: {
    // some css that access to theme
  }
}); */
export default class HomePage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Router>
				<Routes>
					<Route  path="/" element={<CreateRoomPage/>} />
					<Route path="/create" element={<CreateRoomPage/>}/>
					<Route path="/homeminder" element={<HomeMinder/>}/>
					<Route path="/profileminder" element={<ProfileMinder/>}/>
					<Route path="/joinRoom" element={<JoinRoomPage/>}/>
					{/* <Route path="/join" component={RoomJoinPage}></Route>
					<Route path="/homeminder" component={HomeMinder}></Route>
					<Route path="/profileminder" component={ProfileMinder}></Route>
					<Route path="/room/:roomCode" component={Room} /> 
					<Route path="/joinRoom" component={JoinRoomPage} />
					 the : says we have a variable in url */}
				
					
				</Routes>
			</Router> 
			


			

		);
	}
}


{/* <Router>
				<Switch>
					<Route exact path="/">
						<p>This is the home page 101</p>
					</Route>	
					<Route path="/join" component={RoomJoinPage}></Route>
					<Route path="/create" component={CreateRoomPage}></Route>
					<Route path="/homeminder" component={HomeMinder}></Route>
					<Route path="/profileminder" component={ProfileMinder}></Route>
					<Route path="/room/:roomCode" component={Room} /> 
					<Route path="/joinRoom" component={JoinRoomPage} />
					 the : says we have a variable in url
				
					
				</Switch>
			</Router> */}