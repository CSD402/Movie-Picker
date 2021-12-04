import React, { Component } from "react";
import { render } from "react-dom";
import Cards, { Card } from 'react-swipe-card';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class CreateRoomPage extends Component{
	defaultVotes = 2;
	constructor(props){
		super(props);
		this.state={guestCanPause: true,
			votesToSkip: this.defaultVotes}
	}

	componentDidMount = ()=>{
		console.log("In create room page")
	}


	yo = ()=>{
		console.log("Heyaa")
	}
	
	/* Wrapper = () => {
		const data = ['Alexandre', 'Thomas', 'Lucien']
		return (
			<Cards onEnd={()=>{console.log("Swiped left")}} className='master-root'>
			  {data.map(item => 
				<Card 
				  onSwipeLeft={()=>{console.log("Swiped left")}} 
				  onSwipeRight={()=>{console.log("Swiped left")}}>
				  <h2>{item}</h2>
				</Card>
			  )}
			</Cards>
		)
	  } */
	  handleVotesChange=(e)=> {
		this.setState({
		  votesToSkip: e.target.value,
		});
	  }

	  handleGuestCanPauseChange=(e) =>{
		this.setState({
		  guestCanPause: e.target.value === "true" ? true : false,
		});
	  }


	handleRoomButtonPressed=()=> {

	/* 	console.log(this.state)

		const requestOptions = { 
		method: "POST",
		headers: { "Content-Type": "application/json" }, // not required but just in case
		body: JSON.stringify({ // converting js to json string to feed the model
			votes_to_skip: this.state.votesToSkip,
			guest_can_skip: this.state.guestCanPause,
		}),
		};
		fetch("/api/create-room", requestOptions)
		.then((response) => response.json()) //getting response from api
		.then((data) =>{ 
			console.log(data)
			this.props.history.push("/room/"+data.code) // navigation here
		
		} ) ; */
  
	}

	render(){
		
		return(
		<Grid container spacing={1}>
			<Grid item xs={12} align="center">
				<Typography component="h4" variant="h4">
					Create A Room
				</Typography>
			</Grid>

			<Grid item xs={12} align="center">
				<FormControl component="fieldset">
					<FormHelperText>
					<div align="center">Guest Control of Playback State</div>
					</FormHelperText>
					<RadioGroup
					row
					defaultValue="true"
					onChange={this.handleGuestCanPauseChange}
					>
					<FormControlLabel
						value="true"
						control={<Radio color="primary" />}
						label="Play/Pause"
						labelPlacement="bottom"
					/>
					<FormControlLabel
						value="false"
						control={<Radio color="secondary" />}
						label="No Control"
						labelPlacement="bottom"
					/>
					</RadioGroup>
				</FormControl>
			</Grid>

			<Grid item xs={12} align="center">
				<FormControl>
					<TextField
					required={true}
					type="number"
					inputProps={{
						min: 1,
						style: { textAlign: "center" },
					}}
					onChange={this.handleVotesChange}
					/>
					<FormHelperText>
					<div align="center">Votes Required To Skip Song</div>
					</FormHelperText>
				</FormControl>
			</Grid>

			<Grid item xs={12} align="center">
				<Button
					color="primary"
					variant="contained"
					onClick= {this.handleRoomButtonPressed}
				>
					Create A Room
				</Button>
			</Grid>

			<Grid item xs={12} align="center">
				<Button color="secondary" variant="contained" to="/" component={Link}>
					Back
				</Button>
			</Grid>
      </Grid>
		)
	}
}