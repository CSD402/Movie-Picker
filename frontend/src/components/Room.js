import axios from "axios";
import React, { Component } from "react";
import { Swipeable, direction } from 'react-deck-swiper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TinderCard from 'react-tinder-card'
var characters = [
	{
	  name: '21 Jump Street',
	  url: '/static/200jump.jpeg',
	  desc:" ",
	  genre: " ",
	  Id:" "
	},
	{
	  name: 'American Hustle',
	  url: '/static/200amh.jpeg',
	  desc:" ",
	  genre: " ",
	  Id:" "
	},
	{
	  name: 'Fight Club',
	  url: '/static/200fight.jpeg',
	  desc:" ",
	  genre: " ",
	  Id:" "
	},
	{
	  name: 'OUT in Hollywood',
	  url: '/static/200holly.jpeg',
	  desc:" ",
	  genre: " ",
	  Id:" "
	},
	
  ]
let refss = [React.createRef(),React.createRef(),,React.createRef(),,React.createRef()]
export default class Room extends Component {
	checkUpdates = ()=>{
		console.log("Checking updates")
		axios.
				get("http://localhost:8000/rooms/bestmovie?room_id="+this.roomCode)
				.then((res)=>{
					let bestMovie = res.data["movie_name"]
					if (bestMovie!=this.state.bestMovie)
						this.setState({bestMovie:bestMovie})

				})
		
	}
	constructor(props) {
	  super(props);
	  this.state = {
		votesToSkip: 2,
		guestCanPause: false,
		isHost: false,
		lastDirection:"",
		currentIndex:0,
		movieData:null,
		dummyVar:0,
		bestMovie:" ",
		swipeCount:0
	  };

	  var intervalId = setInterval(this.checkUpdates, 1000);
	 

	  
	  console.log(window.location.href)
	  let roomCode = window.location.href
	  roomCode = roomCode.split("/")
	  this.roomCode = roomCode[roomCode.length-1]
	  
	  //this.roomCode = this.props.match.params.roomCode;
	  //console.log(this.props.match.params.roomCode," is the room code")
	  //this.getRoomDetails();
	}

	componentDidMount(){
		//console.log(this.props)		
		//console.log(this.props.location.state.detail)
		this.getRoomDetails()
	}
  
	getRoomDetails=() =>{
		axios
			.get("http://127.0.0.1:8000/rooms/movies?room_id="+this.roomCode)
			.then((res)=>{
				console.log(res.data)	
				console.log(res.data[1]["id"])
				console.log(res.data[1]["movie_description"])
				console.log(characters[0]["name"])
				let data = res.data
				for(let i=0;i<4;++i){
					characters[i]["name"] = data[i]["movie_name"]
					characters[i]["desc"] = data[i]["movie_description"]
					characters[i]["genre"] = data[i]["movie_genre"]
					characters[i]["Id"] = data[i]["id"]
				}
				this.setState({dummyVar:!(this.state.dummyVar) })
					

			})

	  /* fetch("/api/get-room" + "?code=" + this.roomCode)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		  this.setState({
			votesToSkip: data.votes_to_skip,
			guestCanPause: data.guest_can_skip,
			isHost: data.is_host,
		  });
		}); */
	}

	handleOnSwipe = (swipeDirection) => {
		if (swipeDirection === direction.RIGHT) {
		  // handle right swipe
		  console.log("Swiped Right")
		  return;
		}
	
		if (swipeDirection === direction.LEFT) {
			console.log("Swiped left")
		  // handle left swipe
		  return;
		}
	  }

	swiped = (direction, nameToDelete, index) => {
		//setLastDirection(direction)
		this.setState({lastDirection:direction,currentIndex:index,swipeCount:this.state.swipeCount+1});
		
		
	  }
	
	  outOfFrame = (name,movie_id) => {
		console.log(`${name}  left the screen!`)
		console.log("the direction was",this.state.lastDirection)
		console.log(movie_id)

		if (this.state.lastDirection == "right"){
			axios.
			get("http://localhost:8000/rooms/swipe?movie_id="+movie_id)
			.then((res)=>{
				console.log(res)
				axios.
				get("http://localhost:8000/rooms/bestmovie?room_id="+this.roomCode)
				.then((res)=>{

					console.log("Best movie")
					console.log(res.data)
					//let num_votes = res.data["num_votes"]
					let bestMovie = res.data["movie_name"]
					let votes = res.data["num_votes"]
					console.log(this.state.swipeCount,"Swipe Count")
					if (votes>0){
						this.setState({bestMovie:bestMovie})
						console.log(bestMovie)
					}
					
					
					
				})
			})
		}
		else if (this.state.lastDirection == "left"){
			if(this.state.swipeCount==4){
				axios.
				get("http://localhost:8000/rooms/bestmovie?room_id="+this.roomCode)
				.then((res)=>{
					
					//let num_votes = res.data["num_votes"]
					let bestMovie = res.data["movie_name"]
					let votes = res.data["num_votes"]
					console.log(this.state.swipeCount,"Swipe Count")
					if (votes>0){
						this.setState({bestMovie:bestMovie})
						console.log(bestMovie)
					}
					else{

						
						axios.
						get("http://127.0.0.1:8000/rooms/moremovies?room_id="+this.roomCode)
						.then((res)=>{
							console.log(res)
							axios
							.get("http://127.0.0.1:8000/rooms/movies?room_id="+this.roomCode)
							.then((res)=>{
								console.log(res.data)	
								console.log(res.data[1]["id"])
								console.log(res.data[1]["movie_description"])
								console.log(characters[0]["name"])
								let data = res.data
								for(let i=0;i<4;++i){
									characters[i]["name"] = data[data.length-1-i]["movie_name"]
									characters[i]["desc"] = data[data.length-1-i]["movie_description"]
									characters[i]["genre"] = data[data.length-1-i]["movie_genre"]
									characters[i]["Id"] = data[data.length-1-i]["id"]
								}
								this.setState({dummyVar:!(this.state.dummyVar),swipeCount:0 })
									

							})
							

					})
						
						
					}
					
					
				})
			}
		}

	

		// room/swipe?moive_id=

		// handle the case in which go back is pressed before card goes outOfFrame
		
		// TODO: when quickly swipe and restore multiple times the same card,
		// it happens multiple outOfFrame events are queued and the card disappear
		// during latest swipes. Only the last outOfFrame event should be considered valid
	  }

	  swipe = async (dir) =>{
		await refss[this.state.currentIndex].current.swipe(dir)
	  }
  
	render() {
	  return (
		<>
		{/* <div>
		  <h3>{this.roomCode}</h3>
		  <p>Votes: {this.state.votesToSkip}</p>
		  <p>Guest Can Pause: { (this.state.guestCanPause + " ").toString()}</p>
		  <p>Host: { (this.state.isHost + " ").toString()}</p>
		</div> */}
		<div style={{height: "100%",
	  position: "absolute",
	  left: 0,
	  width: "100%",
	  overflow:'auto',display:"inline-block",backgroundColor:"#EFBFAE"}}>

		  <div>
			  <Typography variant="h6"
						noWrap
						component="div">
				  Room Code : {this.roomCode}
			  </Typography>
		  </div>

			<div style={{width:""}}>
				<Button variant="contained" style={{top:"20%",left:"30%",position:"fixed"}} onClick={() => this.swipe('left')}>Swipe Left</Button>
				<Button variant="contained" style={{top:"20%",left:"58%",position:"fixed"}} onClick={() => this.swipe('right')}>Swipe Right</Button>
			</div>
			<div className='cardContainer' style = {{width:"1000px",height:"1000px",top:"10%",left:"40%", position:"fixed",display:"inline-block"}}>
			
			
			{/* {this.state.lastDirection ? <h2 className='infoText'>You swiped {this.state.lastDirection}</h2> : <h2 className='infoText' />} */}
			<h2 className='infoText'>{this.state.bestMovie}</h2>
				{characters.map((character,index) =>(
				<TinderCard className='swipe' ref = {refss[index]}  key={character.name} onSwipe={(dir) => this.swiped(dir, character.name,index)} onCardLeftScreen={() => this.outOfFrame(character.name,character.Id)}>
					<div style={{width:"250px",height:"200px",backgroundColor:"#ADD8E6",alignItems:"center",justifyContent:"center",}} className='card'>
						<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
							{character.name}
						</Typography>
						<Typography
						variant="h10"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
							Genre : {character.genre}
						</Typography>
					</div>
					<div style={{ width:"10px",height:"10px"}} className='card'>
					

					</div>
				</TinderCard>
				))}
				
				
			</div>
		</div>
	
		</>
	  );
	}
  }