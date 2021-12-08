import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
export default class JoinRoomPage extends Component{
	constructor(props) {
		
		super(props);
		this.state = {
		  roomCode: "",
		  error: "",
		};

		console.log(this.props.route)


	  }
	render(){
		return(
			<div style={{
				//backgroundImage: 'url("/static/Background.png")',
			  backgroundColor:"#EFBFAE",
			  height: "100%",
				position: "absolute",
				left: 0,
				width: "100%",
				overflow:'auto'
			  }}>
				<Grid container spacing={1}>
				<Grid item xs={12} align="center">
				<Typography variant="h4" component="h4">
					Join a Room
				</Typography>
				</Grid>
				<Grid item xs={12} align="center">
				<TextField
					
					label="Code"
					placeholder="Enter a Room Code"
					value={this.state.roomCode}
					helperText={this.state.error}
					variant="outlined"
					onChange={this.handleTextFieldChange}
				/>
				</Grid>
				<Grid item xs={12} align="center">
				<Button
					variant="contained"
					color="primary"
					onClick={this.roomButtonPressed}
				>
					Enter Room
				</Button>
				</Grid>
				<Grid item xs={12} align="center">
				
				</Grid>
		  </Grid>
			</div>
			
		);
	}

	handleTextFieldChange=(e)=> {
		this.setState({
		  roomCode: e.target.value,
		});
	}

	roomButtonPressed = ()=> {
		const requestOptions = {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({
			code: this.state.roomCode,
		  }),
		};

		
		window.open('/room/'+this.state.roomCode);


		/* fetch("/api/join-room", requestOptions)
		  .then((response) => {
			console.log("After fetch")
			if (response.ok) {
			  //this.props.history.push(`/room/${this.state.roomCode}`);
			  this.props.history.push({
				pathname:`/room/${this.state.roomCode}`,
				state: { detail: "fuck you" }

			  });
			} else {
			  this.setState({ error: "Room not found." });
			}
		  })
		  .catch((error) => {
			console.log(error);
		  }); */




	  }
}