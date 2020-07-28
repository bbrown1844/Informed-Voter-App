import React from 'react';
import { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Popup from "reactjs-popup";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'; 
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Avatar from '@material-ui/core/Avatar';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GavelIcon from '@material-ui/icons/Gavel';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import TimelineIcon from '@material-ui/icons/Timeline';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AccessibleIcon from '@material-ui/icons/Accessible';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import styled, { css } from 'styled-components'
import Card, { CardHeader } from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

///////////////////////////////////////////////////////////
const logo = require('./images/flag.jpg');

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#B22234',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


let autoComplete;
let info;
let Executive = [];
let Judicial = [];
let Law = [];
let positions = [];
let address = [];
let currentAddress;
let exec_rows = [];
let jud_rows = [];
let law_rows = [];


const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

const elections = {

   "mayor":{
    "San Francisco, CA, USA":"Nov 3, 2020",
    "Santa Clara, CA, USA": "Nov 3, 2022"
   },


}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  // console.log(addressObject);

  currentAddress = addressObject.formatted_address;
  var store = require('store')
  store.set('current_addr', {addr:currentAddress});


  var request = require("request");
  var options = { method: 'GET',
    url: 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys',
    qs: 
     { address: addressObject.formatted_address,
       electionId: '2020',
       officialOnly: 'false',
       returnAllAvailableData: 'true' 
     } 
  };

  var options2 = { method: 'GET',
    url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys',
    qs: 
     { address: addressObject.formatted_address,
       electionId: '2020',
       officialOnly: 'false',
       returnAllAvailableData: 'true' 
     } 
  };

  var myJsonElection;
  var response;

  // response = await fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys', {returnAllAvailableData:'true' });
  // myJsonElection = await response.json();
  // console.log("sdfsd", myJsonElection);

  response = await fetch('https://api.wevoteusa.org/apis/v1/electionsRetrieve/');
  myJsonElection = await response.json();
  // console.log("sdfsd", myJsonElection['election_list'][0]);
  // console.log("sdfsd", myJsonElection['election_list'][1]);
  // console.log("sdfsd", myJsonElection['election_list'][2]);
  // console.log("sdfsd", myJsonElection['election_list'][3]);
  // console.log("sdfsd", myJsonElection['election_list'][4]);
  // console.log("sdfsd", myJsonElection['election_list'][5]);

  var listElect = myJsonElection['election_list'];
  var CAElections = [];

  console.log(listElect);
  function checkAdult(stateUS) {
    return stateUS == "CA";
  }

  // for (var i=0; i<listElect.length; i++)
  // {
  //   if (listElect[i]['state_code_list'].find(checkAdult))
  //   {
  //     CAElections.push(listElect[i]);
  //     console.log(listElect[i]);
  //   }
  // }

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    info = JSON.parse(body);

    var temp = info['offices'];
    var temp2 = info['officials'];
    var i = 0;
    var sec = 0;

    while (i < temp.length) {
      let tempDict = {};
      
      if (temp[i]["name"] == "U.S. Senator"){
          tempDict['name'] = temp2[sec]['name'];
          tempDict['pos'] = "U.S. Senator";
          tempDict['level'] = "State"
          try{
            tempDict['address'] = temp2[sec]['address'][0]["line1"];
          }
          catch (err)
          {
            tempDict['address'] = "None";
          }

          if (temp2[sec]['name'] == "Kamala D. Harris")
          {
            tempDict['re-election'] = "Nov 8, 2022";
          }

          Executive.push(tempDict);

          tempDict = {};
          tempDict['name'] = temp2[sec+1]['name'];
          tempDict['pos'] = "U.S. Senator";
          tempDict['re-election'] = "Nov 6, 2025";
          tempDict['level'] = "State"

          try{
            tempDict['address'] = temp2[sec+1]['address'][0]["line1"];
          }
          catch (err)
          {
            tempDict['address'] = "None";
          }
          Executive.push(tempDict);
          sec+=2;
      }
      else if (temp[i]["name"].search("Supreme Court Justice") != -1){
        var j;
        for (j=0; j<7; j++)
        {
          tempDict ={}
          tempDict['name'] = temp2[sec]['name'];
          tempDict['pos'] = "CA Supreme Court Justice";
          tempDict['level'] = "State"
          try{
            tempDict['address'] = temp2[sec]['address'][0]["line1"];
            tempDict['re-election'] = "Nominated by Governor";
          }
          catch (err)
          {
            tempDict['address'] = "None";
          }          
          Judicial.push(tempDict);
          sec+=1
        }
      }
      else if ((temp[i]["name"].search("Attorney") != -1) || (temp[i]["name"].search("Public Defender") != -1))
      {
        tempDict['name'] = temp2[sec]['name'];
        tempDict['pos'] = temp[i]["name"];
        tempDict['re-election'] = "2022";
        tempDict['level'] = "State"
        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }

        Judicial.push(tempDict);
        sec+=1;
      }
      else if (temp[i]["name"].search("Sheriff") != -1 )
      {
        tempDict['name'] = temp2[sec]['name'];
        tempDict['pos'] = temp[i]["name"];
        tempDict['level'] = "Local"

        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
          tempDict['re-election'] = "2022";
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }

        Law.push(tempDict);
        sec+=1;
      }
      else if (temp[i]["name"].search("President") != -1 || temp[i]["name"].search("Vice President") != -1)
      {
        tempDict['name'] = temp2[sec]['name'];
        tempDict['pos'] = temp[i]["name"];
        tempDict ['re-election'] = "Nov 3, 2020";
        tempDict['level'] = "Federal"

        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }
        Executive.push(tempDict);
        sec+=1;
      }
      else if (temp[i]["name"].search("Governor") != -1)
      {
        tempDict['name'] = temp2[sec]['name'];
        tempDict['pos'] = temp[i]["name"];
        tempDict ['re-election'] = "Nov 8, 2022";
        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }
        Executive.push(tempDict);
        sec+=1;
      }
      else if (temp[i]["name"].search("Mayor") != -1)
      {
        tempDict['name'] = temp2[sec]['name'];
        tempDict['pos'] = temp[i]["name"];
        tempDict ['re-election'] = elections['mayor'][addressObject.formatted_address];
        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }
        Executive.push(tempDict);
        sec+=1;
      }
      else
      {
        tempDict['name'] = temp2[sec]['name'];
        tempDict['pos'] = temp[i]["name"];
        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }
        Executive.push(tempDict);
        sec+=1;
      }
      ++i;
    }

    for (i = 0; i < temp2.length-1; i++) 
    {
      try {
        address.push(temp2[i]['address'][0]["line1"]);
      }
      catch (err)
      {
        address.push("None");
      }
    }
    // console.log(address);
    // console.log(info);
    // console.log(Executive);
    // console.log(Judicial);

    var i;
    for (i=0; i<Executive.length; i++)
    {
      exec_rows.push(createData(i, Executive[i]['name'], Executive[i]['pos'], Executive[i]['address'], info['officials'][i]['phones'][0], Executive[i]['re-election']))
    }
    for (i=0; i<Judicial.length; i++)
    {
      jud_rows.push(createData(i, Judicial[i]['name'], Judicial[i]['pos'], Judicial[i]['address'], info['officials'][i]['phones'][0], Judicial[i]['re-election']))
    }
    for (i=0; i<Law.length; i++)
    {
      law_rows.push(createData(i, Law[i]['name'], Law[i]['pos'], Law[i]['address'], info['officials'][i]['phones'][0], Law[i]['re-election']))
    }

    // localStorage.setItem('exec_rows', exec_rows);
    // localStorage.setItem('jud_rows', jud_rows);

    var store = require('store')
    store.set('exec', {name:exec_rows});
    store.set('jud', {name:jud_rows});
    store.set('law', {name:law_rows});


  });


  // request(options2, function (error, response, body) {
  //   if (error) throw new Error(error);
  //   console.log(body)
  // });
}


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'COEN296A 2020 @ '}
      <Link color="inherit" href="http://www.cse.scu.edu/~sfigueira/">
        Professor Silvia Figueira      
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

// Generate Order Data
function createData(id, name, pos, address, social, reelect) {
  return { id, name, pos, address, social, reelect };
}

// function getData(){
//   // rows = [
//   //   createData(0, info['officials'][0]['name'], positions[0], address[0], info['officials'][0]['phones'][0], ""),
//   //   createData(1, info['officials'][1]['name'], positions[1], address[1], info['officials'][1]['phones'][0], ""),
//   //   createData(2, info['officials'][2]['name'], positions[2], address[2], info['officials'][2]['phones'][0], ""),
//   //   createData(3, info['officials'][3]['name'], positions[3], address[3], info['officials'][3]['phones'][0], ""),
//   //   createData(4, info['officials'][4]['name'], positions[4], address[4], info['officials'][4]['phones'][0], ""),
//   // ];

//   var i;
//   for (i=0; i<Executive.length; i++)
//   {
//     console.log(createData(i, info['officials'][i]['name'], positions[i], address[i], info['officials'][i]['phones'][0], ""))
//     exec_rows.push(createData(i, Executive[i]['name'], Executive[i]['pos'], Executive[i]['address'], info['officials'][i]['phones'][0], ""))
//   }
//   for (i=0; i<Judicial.length; i++)
//   {
//     console.log(createData(i, info['officials'][i]['name'], positions[i], address[i], info['officials'][i]['phones'][0], ""))
//     jud_rows.push(createData(i, Judicial[i]['name'], Judicial[i]['pos'], Judicial[i]['address'], info['officials'][i]['phones'][0], ""))
//   }

//   localStorage.setItem('exec_rows', exec_rows);
//   localStorage.setItem('jud_rows', jud_rows);

//   var output = localStorage.getItem('exec_rows');
//   console.log("here",output);

// }

function preventDefault(event) {
  event.preventDefault();
}

const useStyles3 = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function Deposits() {
  const classes = useStyles3();
  var store = require('store');
  var curr_addr = store.get('current_addr').addr;

  return (
    <React.Fragment>
      <Title>Current Location</Title>
      <p>{curr_addr}</p>
      <Title>Nearest Polling Station</Title>
      <Link to="/signin">
        <ListItemText primary="Change Location" />
      </Link>
      {/*}
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
    */}
    </React.Fragment>
  );
}


////////Listitems.js//////////
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/">
        <ListItemText primary="Home" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <Link to="/timeline">
        <ListItemText primary="Timeline" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/hierarchy">
        <ListItemText primary="Hierarchy" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <Link to="/location">
        <ListItemText primary="Location" />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Filters</ListSubheader>
    <ListItem button >
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
        <ListItemText primary="Legislation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerifiedUserIcon />
      </ListItemIcon>
      <ListItemText primary="Law Enforcement" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GavelIcon />
      </ListItemIcon>
      <ListItemText primary="Judicial" />
    </ListItem>
  </div>
);

export const hierarchyListItems = (
  <div>
    <ListSubheader inset>Select One</ListSubheader>
    <ListItem button >
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
        <ListItemText primary="Legislation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerifiedUserIcon />
      </ListItemIcon>
      <ListItemText primary="Law Enforcement" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GavelIcon />
      </ListItemIcon>
      <ListItemText primary="Judicial" />
    </ListItem>
  </div>
);

///////////////

const useStyles2 = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Orders() {
  const classes = useStyles2();
  // var exec = localStorage.getItem('exec_rows');
  // var jud = localStorage.getItem('jud_rows');
  var store = require('store');
  var exec = store.get('exec').name;
  var jud = store.get('jud').name;
  var law = store.get('law').name;

  return (
    <React.Fragment>
    {/*
    <Typography variant="h3" component="h3">
      Representatives
    </Typography> 
  */}
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Representatives
        </Typography>
      </Toolbar>
    </AppBar>
    <br></br>
      <Avatar className={classes.avatar}>
        <AccountBalanceIcon />
      </Avatar>
      <br></br>
      <Title>Executive</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell align="right">Re-Election</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exec.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell><Popup trigger={<button> {row.pos}</button>} position="right center"></Popup></TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.social}</TableCell>
              <TableCell align="right">{row.reelect}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>

      <Avatar className={classes.avatar}>
        <GavelIcon />
      </Avatar>
      <br></br>
      <Title>Judicial and Criminal Justice</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell align="right">Re-Election</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jud.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell><Popup trigger={<button> {row.pos}</button>} position="right center"></Popup></TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.social}</TableCell>
              <TableCell align="right">{row.reelect}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>

      <Avatar>
        <VerifiedUserIcon/>
      </Avatar>
      <br></br>
      <Title>Law Enforcement</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell align="right">Re-Election</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {law.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell><Popup trigger={<button> {row.pos}</button>} position="right center"></Popup></TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.social}</TableCell>
              <TableCell align="right">{row.reelect}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}

///////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.info = {
      value: null,
    };
  }

  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/timeline">
              <Timeline />
            </Route>
            <Route path="/hierarchy">
              <Hierarchy />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


//////////////////////////////////////////////////////////////////
  
function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const name = window.$name;

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders/>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
  );
}


function Timeline(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const name = window.$name;

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <TimelineComponent/>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
  );

}

function parseDate(pDate){
  // var dateD = {"Jan":1,"Feb":2,"March":3,"April":4,"May":5,"June":6,"July":7,"August":8,"Sep":9,"Oct":10, "Nov":11, "Dec":12}
  // var s = pDate.split(" ");
  // return new Date(s[2],dateD[s[0]],s[1]);
  return new Date(pDate);
}

function TimelineComponent() {

  var store = require('store');
  var exec = store.get('exec').name;
  var jud = store.get('jud').name;
  var law = store.get('law').name;

  const parseItems = []

  const items = []

  for (var j=0; j<exec.length; j++){
    if (exec[j]['reelect'] != undefined && exec[j]['pos'] != "undefined")
    {
      console.log(parseDate(exec[j]['reelect']));
      var sDate = new Date(new Date(exec[j]['reelect']));
      parseItems.push({'name':exec[j]['name'],'pos':exec[j]['pos'], 'date':exec[j]['reelect'], 'sortDate':sDate});
    }
  }
  for (var j=0; j<jud.length; j++){
    if (jud[j]['reelect'] != undefined && jud[j]['pos'].search("Supreme Court Justice") == -1)
    {
      parseItems.push({'name':jud[j]['name'],'pos':jud[j]['pos'], 'date':jud[j]['reelect'], 'sortDate':parseDate(jud[j]['reelect'])});
    }
  }
  for (var j=0; j<law.length; j++){
    if (law[j]['reelect'] != undefined)
    {
      parseItems.push({'name':law[j]['name'],'pos':law[j]['pos'], 'date':law[j]['reelect'], 'sortDate':parseDate(law[j]['reelect'])});
    }
  }

  parseItems.sort((a,b) => a.sortDate-b.sortDate);
  for (var i=0; i<parseItems.length; i++) {
    console.log(parseItems[i]);
    items.push(
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={parseItems[i]['date']}
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<HowToVoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">{parseItems[i]['name']}</h3>
        <h4 className="vertical-timeline-element-subtitle">{parseItems[i]['pos']}</h4>

      </VerticalTimelineElement>
    )
  }

  return(
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Nov 3 2020"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<HowToVoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Election Day</h3>
        {/*<h4 className="vertical-timeline-element-subtitle">General Election</h4>*/}
        <p>
          Presidential election
          <br></br>
          Congressional elections
          <br></br>
          Senate Elections
        </p>
      </VerticalTimelineElement>
      {items}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>

  );
}

const Outer = styled.div`
  padding: 30px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`
const DarkBox = styled.div`
  position: absolute;
  width: 2440px;
  height: 30px;
  padding: 5px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
`

const govType = styled.div`
  position: absolute;
  width: 300px;
  height: 150px;
  padding: 30px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
`
/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */

 const useStylesCard = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const desc = {
  "pres": ["The president of the United States (POTUS) is the head of state and","head of government of the United States of America. The president","directs the executive branch of the federal government and is the ","commander-in-chief of the United States Armed Forces."],
  "US Attorney General":["The United States attorney general (AG) is the head of the United States Department of Justice, the chief lawyer of the federal government", "of the United States, and a member of the Cabinet of the United States."],
  "State Attorney General":"Attorneys general are the top legal officers of their state or territory. They advise and represent their legislature and state agencies and act as the “People’s Lawyer” for the citizens. Most are elected, though a few are appointed by the governor.",
  "Supreme Court Justice":"In the United States, a state supreme court (known by other names in some states) is the highest court in the state judiciary of a U.S. state. On matters of state law, the judgment of a state supreme court is considered final and binding in both state and federal courts.",
}

const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  const classes = useStylesCard();
  const bull = <span className={classes.bullet}>•</span>;

  if (node.type === 'Pres')
  {
    return (
      <Outer>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="images/flag.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              President of the United States
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc["pres"][0]}
              <br></br>
              {desc["pres"][1]}
              <br></br>
              {desc["pres"][2]}
              <br></br>
              {desc["pres"][3]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <AccountBalanceIcon/>
          <Button size="small" color="Secondary">
            Federal
          </Button>
        </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'cabinet') {
    return (
      <Outer>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/flag.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Presidential Cabinet
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              The Cabinet includes the Vice President and the heads of 15 executive departments — the Secretaries of Agriculture, Commerce, Defense, 
              <br></br>
              Education, Energy, Health and Human Services, Homeland Security, Housing and Urban Development, Interior, Labor, State, Transportation, 
              <br></br>
              Treasury, and Veterans Affairs, as well as the Attorney General.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <GavelIcon/>
        <Button size="small" color="Secondary">
          Federal
        </Button>
      </CardActions>
    </Card>
      </Outer>
    )
  } 
  else if (node.type === 'US Att') {
    return (
      <Outer>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/flag.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            United States Attorney General
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {desc["US Attorney General"][0]}
              <br></br>
              {desc["US Attorney General"][1]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <GavelIcon/>
        <Button size="small" color="Secondary">
          Federal
        </Button>
      </CardActions>
    </Card>
      </Outer>
    )
  } 
  else if (node.type === 'DOJ')
  {
    return (
      <Outer>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/flag.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Department of Justice
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The United States Department of Justice, also known as the Justice Department, 
            <br></br>
            is a federal executive department of the United States government responsible 
            <br></br>
            for the enforcement of the law and administration of justice in the United States, 
            <br></br>
            and is equivalent to the justice or interior ministries of other countries.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <VerifiedUserIcon/>
        <Button size="small" color="Secondary">
          Federal
        </Button>
      </CardActions>
    </Card>
      </Outer>
    )
  }
  else if (node.type === 'FBI')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                FBI
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Federal Bureau of Investigation is the domestic intelligence and security
                <br></br> 
                service of the United States and its principal federal law enforcement agency
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'USMS')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                USMS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Marshals Service is the primary agency for fugitive operations, the protection 
                <br></br> 
                of officers of the federal judiciary, the management of criminal assets, the 
                <br></br> 
                operation of the United States Federal Witness Protection Program and the Justice 
                <br></br> 
                Prisoner and Alien Transportation System, the execution of federal arrest warrants, 
                <br></br> 
                and the protection of senior government officials through the Office of Protective 
                <br></br> 
                Operations. 
              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'ATF')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ATF
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               The Bureau of Alcohol, Tobacco, Firearms and Explosives deals with violent criminals, 
               <br></br>
               criminal organizations, the illegal use and trafficking of firearms, the illegal use 
               <br></br>
               and storage of explosives, acts of arson and bombings, acts of terrorism, and the illegal 
               <br></br>
               diversion of alcohol and tobacco products.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'DEA')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                DEA
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Drug Enforcement Administration is a United States federal law enforcement
                <br></br>
                agency under the United States Department of Justice, tasked with combating drug
                <br></br>
                trafficking and distribution within the United States.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'HC')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Homeland Security
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Department of Homeland Security secures the nation's air, land, and sea 
                <br></br>
                borders to prevent illegal activity while facilitating lawful travel and trade.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'ICE')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ICE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The U.S. Immigration and Customs Enforcement is a federal law enforcement agency 
                <br></br>
                under the U.S. Department of Homeland Security. ICE's stated mission is to protect 
                <br></br>
                America from the cross-border crime and illegal immigration that threaten national 
                <br></br>
                security and public safety.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'CIA')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                CIA
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Secondary">
              Federal
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'commissioner')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                State Highway Patrol Commissioner
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              The California Highway Patrol (CHP) is dedicated to providing Safety,
              <br></br> 
              Service, and Security to the residents and visitors of California who
              <br></br> 
              use the thousands of miles of our state's roadways. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <AccountBalanceIcon/>
            <Button size="small" color="Primary">
              State
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'statePatrol')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                State and Highway Patrol
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A highway patrol is either a police unit created primarily for the 
                <br></br> 
                purpose of overseeing and enforcing traffic safety compliance on 
                <br></br> 
                roads and highways, or a detail within an existing local or regional 
                <br></br>
                police agency that is primarily concerned with such duties.
                <br></br>
              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Primary">
              State
            </Button>
            <Typography variant="body2" color="textSecondary" component="p">
              Overseen by the California Highway Patrol Commissioner 
            </Typography>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'office state attorney')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Office of the Attorney General
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Attorney General's responsibilities include safeguarding the public from 
                <br></br>
                violent criminals, preserving California's spectacular natural resources, 
                <br></br>
                enforcing civil rights laws, and helping victims of identity theft, 
                <br></br>
                mortgage-related fraud, illegal business practices, and other consumer crimes.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <GavelIcon/>
            <Button size="small" color="Primary">
              State
            </Button>
          <Typography variant="body2" color="textSecondary" component="p">
            Overseen by State Attorney General
          </Typography>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'state attorney')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                State Attorney
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Attorneys general are the top legal officers of their state or territory. 
                <br></br>
                They advise and represent their legislature and state agencies and act as 
                <br></br>
                the “People’s Lawyer” for the citizens.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <GavelIcon/>
            <Button size="small" color="Primary">
              State
            </Button>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'deputy sheriff')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Deputy Sheriff
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Enforce state law at the local county level. Deputies commonly  
                <br></br>
                run the local jail, serve warrants and court summons, and  
                <br></br>
                respond to calls for service in areas outside local police 
                <br></br>
                jurisdictions.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Warning">
              Local
            </Button>
            <Typography variant="body2" color="textSecondary" component="p">
              Elected by the people
            </Typography>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'chief of police')
  {
    return (
      <Outer>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="images/flag.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Chief of Police
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A police chief oversees the police department they serve. A police chief's
                <br></br>
                responsibilities and duties include testing, training, and evaluating officers, 
                <br></br>
                assigning promotions, delegating casework, and conducting administrative duties. 
                <br></br>
                The chief oversees the operations and budget of the police department and is 
                <br></br>
                therefore praised for successes and held responsible for failures.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <VerifiedUserIcon/>
            <Button size="small" color="Success">
              Local
            </Button>
            <Typography variant="body2" color="textSecondary" component="p">
              Chosen by major or elected by the people
            </Typography>
          </CardActions>
        </Card>
      </Outer>
    )
  }
  else if (node.type === 'State')
  {
    return (
      <DarkBox>
        State
      </DarkBox>
    )
  }
  else if (node.type === 'fed')
  {
    return (
      <DarkBox>
        Federal
      </DarkBox>
    )
  }
  else if (node.type == 'Special'){
    return (
      <Outer>
        <p>Add custom displays for each node.type</p>
        <p>You may need to stop event propagation so your forms work.</p>
        <br />
        <Input
          type="number"
          placeholder="Some Input"
          onChange={(e) => console.log(e)}
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </Outer>
    )
  }
  else{
    return (
      <Outer>
        <p>President of the United States</p>
      </Outer>
    )
  }
}

var x_val = 500;
var y_val = 800;
var x_state = 2200;
var y_state = 2250;
var y_fdepart = 2100;
var x_local = 1100;

const lawChart = {
  // offset: {
  //   x: -1200,
  //   y: -750
  // },
  offset: {
    x: -2200,
    y: -700
  },
  nodes: {
    pres: {
      id: "pres",
      type: "Pres",
      position: {
        x: 2500,
        y: 750
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        }
      }
    },
    cabinet: {
      id: "cabinet",
      type: "cabinet",
      position: {
        x: 2300,
        y: y_val+=280
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          properties: {
            value: "yes"
          }
        },
      }
    },
    attorney: {
      id: "attorney",
      type: "US Att",
      position: {
        x: 2300,
        y: y_val+=300
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          properties: {
            value: "yes"
          }
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "yes"
          }
        }
      }
    },
    node3: {
      id: "node3",
      type: "DOJ",
      position: {
        x: 1700,
        y: y_val+=280
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
        port2: {
          id: "port2",
          type: "output"
        },
      }
    },
    node4: {
      id: "node4",
      type: "FBI",
      position: {
        x: x_val,
        y: y_fdepart
      },
      ports: {
        port2: {
          id: "port2",
          type: "output"
        },
      }
    },
    node5: {
      id: "node5",
      type: "USMS",
      position: {
        x: x_val+=600,
        y: y_fdepart
      },
      ports: {
        port2: {
          id: "port2",
          type: "output"
        },
      }
    },
    node6: {
      id: "node6",
      type: "ATF",
      position: {
        x: x_val+=700,
        y: y_fdepart
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
      }
    },
    node7: {
      id: "node7",
      type: "DEA",
      position: {
        x: x_val+=700,
        y: y_fdepart
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
      }
    },
    node8: {
      id: "node8",
      type: "HC",
      position: {
        x: x_val+=700,
        y: y_fdepart
      },
      ports: {
        port2: {
          id: "port2",
          type: "output"
        },
      }
    },
    node9: {
      id: "node9",
      type: "ICE",
      position: {
        x: x_val+=650,
        y: y_fdepart
      },
      ports: {
        port2: {
          id: "port2",
          type: "output"
        },
      }
    },
    node10: {
      id: "node10",
      type: "CIA",
      position: {
        x: x_val+=700,
        y: y_fdepart
      },
      ports: {
        port2: {
          id: "port2",
          type: "output"
        },
      }
    },
    statePatrol: {
      id: "statePatrol",
      type: "statePatrol",
      position: {
        x: x_state-100,
        y: y_state+500
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
      }
    },
    HPCommisioner: {
      id: "HPCommisioner",
      type: "commissioner",
      position: {
        x: x_state-100,
        y: y_state+200
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
      }
    },
    stateAttorn: {
      id: "stateAttorn",
      type: "state attorney",
      position: {
        x: x_state+620,
        y: y_state+200
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
      }
    },
    officeSAttorn: {
      id: "officeSAttorn",
      type: "office state attorney",
      position: {
        x: x_state+620,
        y: y_state+500
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        },
      }
    },
    sheriff: {
      id: "sheriff",
      type: "deputy sheriff",
      position: {
        x: x_state-100,
        y: y_state+=900
      },
      ports: {
      }
    },
    chiefPolice: {
      id: "chiefPolice",
      type: "chief of police",
      position: {
        x: x_state+620,
        y: y_state
      },
      ports: {
      }
    },
    
  
  },
  
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "pres",
        portId: "port1"
      },
      to: {
        nodeId: "cabinet",
        portId: "port1"
      },
    },
    link2: {
      id: "link2",
      from: {
        nodeId: "cabinet",
        portId: "port1"
      },
      to: {
        nodeId: "attorney",
        portId: "port2"
      },
    },
    link3: {
      id: "link3",
      from: {
        nodeId: "attorney",
        portId: "port1"
      },
      to: {
        nodeId: "node3",
        portId: "port2"
      },
    },
    link4: {
      id: "link3",
      from: {
        nodeId: "node4",
        portId: "port2"
      },
      to: {
        nodeId: "node3",
        portId: "port1"
      },
    },
    link5: {
      id: "link4",
      from: {
        nodeId: "node5",
        portId: "port2"
      },
      to: {
        nodeId: "node3",
        portId: "port2"
      },
    },
    link6: {
      id: "link5",
      from: {
        nodeId: "node6",
        portId: "port1"
      },
      to: {
        nodeId: "node3",
        portId: "port2"
      },
    },
    link7: {
      id: "link6",
      from: {
        nodeId: "node7",
        portId: "port1"
      },
      to: {
        nodeId: "node3",
        portId: "port2"
      },
    },
    homeland: {
      id: "homeland",
      from: {
        nodeId: "cabinet",
        portId: "port1"
      },
      to: {
        nodeId: "node8",
        portId: "port2"
      },
    },
    ICE: {
      id: "link6",
      from: {
        nodeId: "cabinet",
        portId: "port1"
      },
      to: {
        nodeId: "node9",
        portId: "port2"
      },
    },
    CIA: {
      id: "link6",
      from: {
        nodeId: "cabinet",
        portId: "port1"
      },
      to: {
        nodeId: "node10",
        portId: "port2"
      },
    },
    sPatrol: {
      id: "spatrol",
      from: {
        nodeId: "HPCommisioner",
        portId: "port1"
      },
      to: {
        nodeId: "statePatrol",
        portId: "port1"
      },
    },
    attOffice: {
      id: "attOffice",
      from: {
        nodeId: "stateAttorn",
        portId: "port1"
      },
      to: {
        nodeId: "officeSAttorn",
        portId: "port1"
      },
    },
  },
  selected: {},
  hovered: {}
};


function Hierarchy() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const name = window.$name;

  //Inner Node

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{hierarchyListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    Hierarchy
                  </Typography>
                </Toolbar>
              </AppBar>
                <Paper>
                  <FlowChartWithState config={{ readonly: true , smartRouting: true}} initialValue={lawChart} Components={{NodeInner: NodeInnerCustom}}/>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
  );
}



function Location() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const name = window.$name;

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
  );
}

function SignIn() {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbh-xo-acZhcEKNlr9IuG6TGaA-8UI3Ys&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container className={classes.root} spacing={2} justify="center">
          <Grid item xs={6} alignItems="center">
            <Avatar className={classes.avatar}>
              <HowToVoteIcon/>
            </Avatar>
          </Grid>
        </Grid>
        <br></br>
        <Grid container className={classes.root} spacing={2} justify="center">
          <Grid item xs={11} alignItems="center">
            <Typography component="h1" variant="h4">
              Informed Voter
            </Typography>
          </Grid>
        </Grid>  
        <br></br>
        <div>
         Find information on your elected officials
        </div>
        <br></br>
        <form className={classes.form} noValidate>
          <Grid container className={classes.root} spacing={2} justify="center">
            <Grid item xs={8} alignItems="center">
              <input 
                onChange= {event => setQuery(event.target.value)} 
                placeholder={"Enter a City"}
                ref = {autoCompleteRef}
                value = {query}
              />
            </Grid>
            <Grid item xs={6} alignItems="center">
              <Button component={Link} to="/">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      {/*
      <Box mt={8}>
        <Copyright />
      </Box>
    */}
    </Container>
  );
}

function repsPage() {}

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
//         <Grid container className={classes.root} spacing={2} justify="center">
//           <Grid item xs={6} alignItems="center">
//             <Avatar className={classes.avatar}>
//               <HowToVoteIcon/>
//             </Avatar>
//           </Grid>
//           <Grid item xs={6} alignItems="center">
//             <Typography component="h1" variant="h4">
//               Informed Voter
//             </Typography>
//           </Grid>
//         </Grid>
        
//         <div>
//          Find information on your elected officials
//         </div>
//         <br></br>
//         <form className={classes.form} noValidate>
//           <Grid container className={classes.root} spacing={2} justify="center">
//             <Grid item xs={8} alignItems="center">
//               <input 
//                 onChange= {event => setQuery(event.target.value)} 
//                 placeholder={"Enter a City"}
//                 ref = {autoCompleteRef}
//                 value = {query}
//               />
//             </Grid>
//             <Grid item xs={6} alignItems="center">
//               <Button component={Link} to="/">
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
        
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

ReactDOM.render(
    <App />,
  document.getElementById('root')
);




