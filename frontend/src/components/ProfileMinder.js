import  React,{ Component,useState, useMemo, useRef } from "react";
import { render } from "react-dom";
import { CardMedia } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import jump from './assets/200jump.jpeg'


import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
	CardActions,
	Button,
	Paper,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@material-ui/core/'
import { useTheme } from '@material-ui/core/styles';

let p=0
//import Background from "../../images/Background.png";
//import './HomeMinder.css'



const style123 = makeStyles((theme) => ({
    paper: {
		height: 140,
		width: 100
	  },
	  control: {
		padding: 20,
		marginTop: 15,
		background: "#fc3"
	  }
}))





  const classes = {
			paper: {
			  height: 140,
			  width: 100
			},
			control: {
			  padding: 20,
			  marginTop: 15,
			  background: "#fc3"
			}
		  };


  


export default class ProfileMinder extends Component{
	constructor(){
		super()
		this.state={
			email:'',
			password:'',
			spacing:0
		}
	}

	

	/* const data = [
        { img: '/static/200jump.jpeg', title: "21 Jump Street" ,rating:4},
		{ img: '/static/200holly.jpeg', title: "Once Upon a time in hollywood" ,rating:4},
		{ img: '/static/200amh.jpeg', title: "American Hustle",rating:4 },
		{ img: '/static/200fight.jpeg', title: "Fight Club",rating:4 },
    ] */
	login = ()=>{
		console.log("In login")
		
	}
	
	render(){

		
		
		var data = [
			{ img: '/assets/200holly.jpeg', title: "Once Upon a time in hollywood" ,rating:4},
			{ img: '/assets/200amh.jpeg', title: "American Hustle",rating:4 },
			{ img: '/assets/200fight.jpeg', title: "Fight Club",rating:4 },
			{ img: './assets/200jump.jpeg', title: "21 Jump Street" ,rating:4}
		]
		var friends2 = [
			{ img: '/static/200jump.jpeg', title: "21 Jump Street" ,rating:4},
			{ img: '/static/200holly.jpeg', title: "Once Upon a time in hollywood" ,rating:4},
			{ img: '/static/200amh.jpeg', title: "American Hustle",rating:4 },
			{ img: '/static/200fight.jpeg', title: "Fight Club",rating:4 },
		]

		var friends = [
			{name:"Tyler"},
			{name:"Rocky"},
			{name:"Keem"},
		]
		console.log("before function")
		//const classes = style123();
		console.log("after function")

		const handleChange = event => {
			//setSpacing(Number(event.target.value));

			this.setState({spacing:Number(event.target.value)})
		  };


		var gridView=()=>{
			return(
				<div style={{flexDirection:'row',background:"red"}}>
			<Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{paddingBottom:"2%"}}>
				<Typography variant="h4" gutterBottom>
					Recently Watched
				</Typography>

				{/* {friends.map(elem=>{

					{console.log("Runnin running",elem.name)}
					<Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
			>						

						<Grid item style={{background:"Yellow",display: "flex", alignItems: "center",marginRight:"5%"}} >
							<Typography variant="h4" gutterBottom>
								${elem.name}
							</Typography>
						</Grid>

						
							{data.map(elem => (
							
							
							
							<Grid item md={2} style={{background:"pink",}}>
									<Card style={{width:"100%",height:"100%"}}>
										<CardMedia
										style={{width:"100%", paddingTop: '56.25%'}}
										image= {elem.img}
										title={`Title : ${elem.title}`}
										/>
										{console.log(elem.title)}
										<CardHeader
											title={`${elem.title}`}
											subheader={`Rating : ${elem.rating}`}
										/>
										
									</Card>
							</Grid>
								))}
					
					
					</Grid>


				})} */}

			<Grid		
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
				>

									
								{data.map(elem => (
									
									
									<Grid item md={2} style={{background:"pink",}}>
										<Card style={{width:"100%",height:"100%"}}>
											<CardMedia
											style={{width:"100%", paddingTop: '56.25%'}}
											image= {elem.img}
											title={`Title : ${elem.title}`}
											/>
											<CardHeader
												title={`${elem.title}`}
												subheader={`Rating : ${elem.rating}`}
											/>
											
										</Card>
								</Grid>
									))}
			</Grid>

			</Grid>

			{/* <Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
				>

									
								{data.map(elem => (
									
									
									<Grid item md={2} style={{background:"pink",}}>
										<Card style={{width:"100%",height:"100%"}}>
											<CardMedia
											style={{width:"100%", paddingTop: '56.25%'}}
											image= {elem.img}
											title={`Title : ${elem.title}`}
											/>
											<CardHeader
												title={`${elem.title}`}
												subheader={`Rating : ${elem.rating}`}
											/>
											
										</Card>
								</Grid>
									))}
			</Grid> */}
		</div>
			);
		}



		return(
			<>
        
		{/* <div style={{
	  backgroundImage: 'url("/static/Background.png")',height: "2000px",width:'2000px',display:"inline-block"
    }}> */}
		{/* <button class="btn" type="submit">Submit</button>
		</div>
		<div style={{
	  backgroundImage: 'url("/static/Background.png")',height: "2000px",width:'2000px',display:"inline-block"
    }}>
		Hello */}


<div style={{
	  backgroundImage: 'url("/static/Background.png")',height: "100%",
	  position: "absolute",
	  left: 0,
	  width: "100%",
	  overflow: "hidden",
    }}>


		<div style={{flexDirection:'row',background:"red"}}>
			<Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{paddingBottom:"2%"}}>
				<Typography variant="h4" gutterBottom>
					Recently Watched
				</Typography>
			</Grid>

			<Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
				>

									
								{data.map(elem => (
									
									
									<Grid item md={2} style={{background:"pink",}}>
										<Card style={{width:"100%",height:"100%"}}>
											<CardMedia
											style={{width:"100%", paddingTop: '56.25%'}}
											image= {elem.img}
											title={`Title : ${elem.title}`}
											/>
											<CardHeader
												title={`${elem.title}`}
												subheader={`Rating : ${elem.rating}`}
											/>
											
										</Card>
									</Grid>
									))}






									

									
			</Grid>
		</div>


		<div style={{flexDirection:'row',background:"red",marginTop:"5%"}}>
			<Grid container direction="column" justify="flex-start" alignItems="flex-start" style={{paddingBottom:"2%"}} spacing={2}>
				<Typography variant="h4" gutterBottom>
					What your Friends are watching
				</Typography>
			

			
				{/* {friends.map(elem=>{
					{console.log("Runnin running")}
					<Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
			>						

						<Grid item style={{background:"Yellow",display: "flex", alignItems: "center",marginRight:"5%"}} >
							<Typography variant="h4" gutterBottom>
								${elem.name}
							</Typography>
						</Grid>

						
							{data.map(elem => (
							
							
							<Grid item md={2} style={{background:"pink",}}>
									<Card style={{width:"100%",height:"100%"}}>
										<CardMedia
										style={{width:"100%", paddingTop: '56.25%'}}
										image= {elem.img}
										title={`Title : ${elem.title}`}
										/>
										<CardHeader
											title={`${elem.title}`}
											subheader={`Rating : ${elem.rating}`}
										/>
										
									</Card>
							</Grid>
								))}


								
					
					
					</Grid>

				})} */}

				{/* <Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
			>	 */}

			
				<div style={{display:"flex",flexDirection:"row"}}>

					<Grid item style={{background:"Yellow",display: "flex", alignItems: "center",marginRight:"5%"}} >
						<Typography variant="h4" gutterBottom>
							Tyler
						</Typography>
					</Grid>


						{data.map(elem => (
						
						
						<Grid item md={2} style={{background:"pink"}} spacing={2}>
								<Card style={{width:"100%",height:"100%"}}>
									<CardMedia
									style={{width:"100%", paddingTop: '56.25%'}}
									image= {elem.img}
									title={`Title : ${elem.title}`}
									/>
									<CardHeader
										title={`${elem.title}`}
										subheader={`Rating : ${elem.rating}`}
									/>
									
								</Card>
						</Grid>
							))}

					

				</div>


								
					
					
					

				
				{/* </Grid> */}


				{/* <Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}>						
				
					<div style={{display:"flex",flexDirection:"row",padding:"2%"}}>

					
							<Grid item style={{background:"Yellow",display: "flex", alignItems: "center",marginRight:"5%"}} >
								<Typography variant="h4" gutterBottom>
									Tyler
								</Typography>
							</Grid>

							
								{data.map(elem => (
								
								
								<Grid item md={2} style={{background:"pink",}}>
										<Card style={{width:"100%",height:"100%"}}>
											<CardMedia
											style={{width:"100%", paddingTop: '56.25%'}}
											image= {elem.img}
											title={`Title : ${elem.title}`}
											/>
											<CardHeader
												title={`${elem.title}`}
												subheader={`Rating : ${elem.rating}`}
											/>
											
										</Card>
								</Grid>
									))}
					
					</div>

					<div style={{display:"flex",flexDirection:"row"}}>

							<Grid item style={{background:"Yellow",display: "flex", alignItems: "center",marginRight:"5%"}} >
								<Typography variant="h4" gutterBottom>
									Tyler
								</Typography>
							</Grid>

							
								{data.map(elem => (
								
								
								<Grid item md={2} style={{background:"pink",}}>
										<Card style={{width:"100%",height:"100%"}}>
											<CardMedia
											style={{width:"100%", paddingTop: '56.25%'}}
											image= {elem.img}
											title={`Title : ${elem.title}`}
											/>
											<CardHeader
												title={`${elem.title}`}
												subheader={`Rating : ${elem.rating}`}
											/>
											
										</Card>
								</Grid>
									))}
					
					</div>
				</Grid> */}


			</Grid>


				{/* <Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					alignItems="stretch"
					style={{marginLeft:"2%"}}
			>								

					<Grid item style={{background:"Yellow",display: "flex", alignItems: "center",marginRight:"5%"}} >
						<Typography variant="h4" gutterBottom>
							Tyler
						</Typography>
					</Grid>

					
						{data.map(elem => (
						
						
						<Grid item md={2} style={{background:"pink",}}>
								<Card style={{width:"100%",height:"100%"}}>
									<CardMedia
									style={{width:"100%", paddingTop: '56.25%'}}
									image= {elem.img}
									title={`Title : ${elem.title}`}
									/>
									<CardHeader
										title={`${elem.title}`}
										subheader={`Rating : ${elem.rating}`}
									/>
									
								</Card>
						</Grid>
							))}
					
					
				</Grid> */}

				

			



		</div>

		
			
</div>	

{/* <div>
      <div style={{background:"red"}}>
		  
        <Grid container justify="center" spacing={this.state.spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
			
              <Paper  style={{height: 140,width: 100}}/>
			  {console.log("after classes in div")}
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{background:"green"}}>
        <Paper   style={classes.control} > 
          <div>
            <FormLabel>spacing</FormLabel>
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={this.state.spacing.toString()}
              onChange={handleChange}
              row
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </div>
        </Paper>
      </div>
</div> */}
      
    {/* </div> */}

		{/* <div  className="container">
      		<h1>This is red car</h1>
    	</div> */}
	
        
      </>
		)
	}
	
}


