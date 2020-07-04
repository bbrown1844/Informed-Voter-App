// function SearchLocationInput() {
//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys&libraries=places`,
//       () => handleScriptLoad(setQuery, autoCompleteRef)
//     );
//   }, []);

//   return (
//     <Container component="main" maxWidth="xs">
//       <div className="search-location-input">
//         <h1>
//           Informed Voter
//         </h1>
//         <div>
//         Find local and state information on your elected officials
//         </div>
//         <br></br>
//           <input
//             ref={autoCompleteRef}
//             onChange={event => setQuery(event.target.value)}
//             placeholder="Enter a City"
//             value={query}
//           />
//           <Button variant="contained" color="primary">
//           Go
//           </Button>
//       </div>
//     </Container>
//   );
// }



// class App extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       totalReactPackages: null
//     };
//   }
//   componentDidMount() {
//     var request = require("request");

//     var options = { method: 'GET',
//       url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys',
//       qs: 
//        { address: '975 Lewis St. Santa Clara CA',
//          electionId: '2000',
//          officialOnly: 'false',
//          returnAllAvailableData: 'false' 
//        } 
//     };

//     request(options, function (error, response, body) {
//       if (error) throw new Error(error);

//       console.log(body);
//     });

//     // Simple GET request using fetch
//     // fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys')
//     //     .then(response => response.json())
//     //     .then(data => this.setState({ totalReactPackages: data.elections[0].id }));
//   }

//   render() {
//     // const {totalReactPackages} = this.state;
//     return (
//       <div>
//         <h1>A user</h1>
//         <Button color="primary">Hello World</Button>
//       </div>
//     );
//   }
// }




///////ORIGINAL///////






// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import MapChart from "./MapChart";
// import "./styles.css";
// import 'fontsource-roboto';
// import React, { useState, useEffect, useRef } from "react";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import HowToVote from '@material-ui/icons/HowToVote';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import red from '@material-ui/core/colors/purple';
// import purple from '@material-ui/core/colors/purple';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';

// const logo = require('./images/flag.jpg');

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#B22234',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00',
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     contrastThreshold: 3,
//     // Used by the functions below to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2,
//   },
// });

// let autoComplete;

// const loadScript = (url, callback) => {
//   let script = document.createElement("script");
//   script.type = "text/javascript";

//   if (script.readyState) {
//     script.onreadystatechange = function() {
//       if (script.readyState === "loaded" || script.readyState === "complete") {
//         script.onreadystatechange = null;
//         callback();
//       }
//     };
//   } else {
//     script.onload = () => callback();
//   }

//   script.src = url;
//   document.getElementsByTagName("head")[0].appendChild(script);
// };

// function handleScriptLoad(updateQuery, autoCompleteRef) {
//   autoComplete = new window.google.maps.places.Autocomplete(
//     autoCompleteRef.current,
//     { types: ["(cities)"], componentRestrictions: { country: "us" } }
//   );
//   autoComplete.setFields(["address_components", "formatted_address"]);
//   autoComplete.addListener("place_changed", () =>
//     handlePlaceSelect(updateQuery)
//   );
// }

// async function handlePlaceSelect(updateQuery) {
//   const addressObject = autoComplete.getPlace();
//   const query = addressObject.formatted_address;
//   updateQuery(query);
//   console.log(addressObject);

//   var request = require("request");
//   var options = { method: 'GET',
//     url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys',
//     qs: 
//      { address: addressObject.formatted_address,
//        electionId: '2000',
//        officialOnly: 'false',
//        returnAllAvailableData: 'true' 
//      } 
//   };

//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
//   });
// }


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'COEN296A 2020 @ '}
//       <Link color="inherit" href="http://www.cse.scu.edu/~sfigueira/">
//         Professor Silvia Figueira      
//       </Link>{' '}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// function SignIn() {
//   const classes = useStyles();

//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys&libraries=places`,
//       () => handleScriptLoad(setQuery, autoCompleteRef)
//     );
//   }, []);


//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <img alt="flag" className="flag" src={logo} />
//         <br></br>
//         <Typography component="h1" variant="h4">
//           Informed Voter
//         </Typography>
//         <br></br>
//         <div>
//          Find information on your elected officials
//         </div>
//         <form className={classes.form} noValidate>
//           <Grid container className={classes.root} spacing={2} justify="center">
//             <Grid item xs={4} alignItems="center">
//               <input 
//                 onChange= {event => setQuery(event.target.value)} 
//                 placeholder={"Enter a City"}
//                 ref = {autoCompleteRef}
//                 value = {query}
//               />
//             </Grid>
//             {/*
//             <Grid item xs={6}>
//               <ThemeProvider theme={theme}>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   color="primary"
//                   className={classes.submit}
//                 >
//                   Sign In
//                 </Button>
//               </ThemeProvider>
//             </Grid>
//           */}
//           </Grid>
//           {/*
//           <Grid container>
//             <Grid item xs>
//               <MapChart />
//             </Grid>
//           </Grid>
//           <Grid container justify="center">
//             <Grid item xs >
//               <Link href="#" variant="body2">
//                 Subcribe for updates
//               </Link>
//             </Grid>
//           </Grid>
//           */}
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }