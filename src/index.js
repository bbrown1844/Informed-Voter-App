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

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    info = JSON.parse(body);

    var temp = info['offices'];
    var temp2 = info['officials'];
    var i = 0;
    var sec = 0;

    //TODO: Add in phone #
    while (i < temp.length) {
      let tempDict = {};
      
      if (temp[i]["name"] == "U.S. Senator"){
          tempDict['name'] = temp2[sec]['name'];
          tempDict['pos'] = "U.S. Senator";
          try{
            tempDict['address'] = temp2[sec]['address'][0]["line1"];
          }
          catch (err)
          {
            tempDict['address'] = "None";
          }
          Executive.push(tempDict);

          tempDict = {};
          tempDict['name'] = temp2[sec+1]['name'];
          tempDict['pos'] = "U.S. Senator";
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
          try{
            tempDict['address'] = temp2[sec]['address'][0]["line1"];
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
        try{
          tempDict['address'] = temp2[sec]['address'][0]["line1"];
        }
        catch (err)
        {
          tempDict['address'] = "None";
        }

        Law.push(tempDict);
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
      exec_rows.push(createData(i, Executive[i]['name'], Executive[i]['pos'], Executive[i]['address'], info['officials'][i]['phones'][0], ""))
    }
    for (i=0; i<Judicial.length; i++)
    {
      jud_rows.push(createData(i, Judicial[i]['name'], Judicial[i]['pos'], Judicial[i]['address'], info['officials'][i]['phones'][0], ""))
    }
    for (i=0; i<Law.length; i++)
    {
      law_rows.push(createData(i, Law[i]['name'], Law[i]['pos'], Law[i]['address'], info['officials'][i]['phones'][0], ""))
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
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
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
    <Typography variant="h3" component="h3">
      Representatives
    </Typography> 
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
              <TableCell>{row.date}</TableCell>
              <TableCell><Popup trigger={<button> {row.name}</button>} position="right center"></Popup></TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
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
              <TableCell>{row.date}</TableCell>
              <TableCell><Popup trigger={<button> {row.name}</button>} position="right center">This is a test</Popup></TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>

      <Avatar className={classes.avatar}>
        <VerifiedUserIcon />
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
              <TableCell>{row.date}</TableCell>
              <TableCell><Popup trigger={<button> {row.name}</button>} position="right center">This is a test</Popup></TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
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
          <List>{secondaryListItems}</List>
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

function TimelineComponent() {
  return(
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AccessibleIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AccessibleIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AccessibleIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AccessibleIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>

  );
}


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




