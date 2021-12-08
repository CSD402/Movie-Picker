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
import axios from "axios";
//import { useHistory } from "react-router-dom";



export default class CreateRoomPage extends Component{
	defaultVotes = 2;
	constructor(props){
		super(props);
		console.log(this.props)
		this.state={guestCanPause: true,
			votesToSkip: this.defaultVotes,
			room_desc:""
		
	}
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
			room_desc: e.target.value,
		});
	  }

	  handleGuestCanPauseChange=(e) =>{
		this.setState({
		  guestCanPause: e.target.value === "true" ? true : false,
		});
	  }


	handleRoomButtonPressed=()=> {

		console.log(this.state)

		const requestOptions = { 
		method: "POST",
		headers: { "Content-Type": "application/json" }, // not required but just in case
		body: JSON.stringify({ // converting js to json string to feed the model
			votes_to_skip: this.state.votesToSkip,
			guest_can_skip: this.state.guestCanPause,
		}),
		};

		axios
		.post("http://localhost:8000/rooms/addroom",{
			room_description:this.state.room_desc
		})
		.then((res)=>{
			console.log(res)
			let room_id = res.data["room_id"]
			//console.log(res.data["room_id"])
			/* let room = res.data.room_id
			console.log(room) */
			/* this.props.history.push({
				pathname:`/room/${room_id}`

			  }); */
			//const history = useHistory();
			//history.push('/room/$'+room_id)
			  

			window.open('/room/'+room_id);
			/* axios
			.get("http://127.0.0.1:8000/rooms/movies?room_id="+room_id)
			.then((res)=>{
				console.log(res)	
			}) */
		
		})

		/* fetch("/api/create-room", requestOptions)
		.then((response) => response.json()) //getting response from api
		.then((data) =>{ 
			console.log(data)
			this.props.history.push("/room/"+data.code) // navigation here
		
		} ) ; */
  
	}

	render(){
		
		return(
	<div style={{backgroundColor:"#EFBFAE",
    height: "100%",
	  position: "absolute",
	  left: 0,
	  width: "100%",
	  overflow:'auto'}}>
		  	<Grid container spacing={1} style={{backgroundColor:"#EFBFAE"}}>
			<Grid item xs={12} align="center">
				<Typography component="h4" variant="h4">
					Create A Room
				</Typography>
			</Grid>

			<Grid item xs={12} align="center">
				<FormControl component="fieldset">
					<FormHelperText>
					<div align="center">Enter the room description</div>
					</FormHelperText>
					
				</FormControl>
			</Grid>

			<Grid item xs={12} align="center">
				<FormControl>
					<TextField
					required={true}
					type="string"
					inputProps={{
						min: 1,
						style: { textAlign: "center" },
					}}
					onChange={this.handleVotesChange}
					/>
					<FormHelperText>
					<div align="center">Description</div>
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

			
      </Grid>
	</div>
		
		)
	}
}