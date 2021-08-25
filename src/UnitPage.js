
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Thum1 from "./images/imgTopicListScreen/thum1.png";
import Thum2 from "./images/imgTopicListScreen/thum2.png";
import Thum3 from "./images/imgTopicListScreen/thum3.png";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';

import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import ForumIcon from '@material-ui/icons/Forum';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router";


import TopicList from './TopicList';
import TopicQA from './TopicQA';
import TopicQuiz from './TopicQuiz';
import { colors } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Button from "@material-ui/core/Button";

import Phy from "./images/imgSubjectScreen/Physics.svg";
import Drawer from "@material-ui/core/Drawer";
import Mat from "./images/imgSubjectScreen/Maths.svg";
import Che from "./images/imgSubjectScreen/Chemistry.svg";
import Bot from "./images/imgSubjectScreen/Botany.svg";
import Zoo from "./images/imgSubjectScreen/Zoology.svg";
import Acc from "./images/imgSubjectScreen/Accountancy.svg";
import His from "./images/imgSubjectScreen/History.svg";
import Geo from "./images/imgSubjectScreen/Geography.svg";
import Com from "./images/imgSubjectScreen/Commerce.svg";
import Eco from "./images/imgSubjectScreen/Economics.svg";
import Sta from "./images/imgSubjectScreen/Statistics.svg";
import Comp from "./images/imgSubjectScreen/Computer science.svg";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LockIcon from "@material-ui/icons/Lock";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import ShareIcon from "@material-ui/icons/Share";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ErrorIcon from "@material-ui/icons/Error";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'

const drawerWidth = 350;


export default function DenseAppBar(props) {
    const [color, setColor] = useState("")
    const useStyles = makeStyles((theme) => ({

        appBar1:
        {
            maxWidth: "85%",
            marginLeft: theme.spacing(20),
            marginRight: theme.spacing(20),
            marginTop: theme.spacing(5),
            justifyContent: "center",
            backgroundColor: color,
            position: "static",
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        unitNo: {
            marginTop: theme.spacing(12),
            textAlign: 'center',
            fontWeight: '900',
            fontSize: '20px',
        },
        unitName:
        {
            marginTop: theme.spacing(2),
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '25px',
            color: color,

        },
        tab:
        {
            width: 900,

        },
        indicator:
        {
            backgroundColor: 'white',
        },

        root: {
            display: "flex",
           
        },


        GridRes: {
            [theme.breakpoints.between('xs', 'sm')]: {
                marginLeft: theme.spacing(44),
            },


            [theme.breakpoints.between('sm', 'md')]: {
                marginLeft: theme.spacing(47),

            },

            [theme.breakpoints.between('md', 'lg')]: {
                marginLeft: theme.spacing(45),

            },
            [theme.breakpoints.between('lg', 'xl')]: {
                marginLeft: theme.spacing(55),

            },

        },
        ButtonRes: {
            [theme.breakpoints.down('sm')]: {
                alignItems: "center",
                display: "inline-block",

                background: "#ffffff",
                color: "black",
                fontWeight: "bold",
                width: "130px",
                height: "130px",
                textTransform: "none",

                fontSize: "14px",
                margin: "12px",
                "&:hover":
                {
                    transition: 'transform 0.5s',
                    transform: 'scale(1.15)'
                }

            },
            [theme.breakpoints.up('md')]: {
                alignItems: "center",
                display: "inline-block",
                background: "#ffffff",
                color: "black",
                fontWeight: "bold",
                width: "155px",
                height: "155px",
                textTransform: "none",

                fontSize: "14px",
                margin: "40px",
                "&:hover":
                {
                    transition: 'transform 0.5s',
                    transform: 'scale(1.15)'
                }
            },
            [theme.breakpoints.up('lg')]: {
                alignItems: "center",
                display: "inline-block",
                background: "#ffffff",
                color: "black",
                fontWeight: "bold",
                width: "195px",
                height: "195px",
                textTransform: "none",

                fontSize: "14px",
                margin: "40px",
                "&:hover":
                {
                    transition: 'transform 0.5s',
                    transform: 'scale(1.15)',
                }
            }

            ,
            [theme.breakpoints.up('xl')]: {
                alignItems: "center",
                background: "#ffffff",
                color: "black",
                boxShadow: '5px',
                fontWeight: "bold",
                width: "340px",
                height: "150px",
                textTransform: "none",
                cursor: "pointer",
                fontSize: "14px",
                display: "inline-block",
                margin: "45px",
                "&:hover":
                {
                    transition: 'transform 0.5s',
                    transform: 'scale(1.05) ',
                    backgroundColor: 'white',
                }
            }




        },
        HrRes: {
            [theme.breakpoints.down('sm')]: {
                marginTop: "10px",
                marginBottom: "10px"
            },
            [theme.breakpoints.up('md')]: {
                marginTop: "100px",
                marginBottom: "120px"
            },
            [theme.breakpoints.up('lg')]: {
                marginBottom: theme.spacing(60)
            },
            [theme.breakpoints.up('xl')]: {
                margin: theme.spacing(80)
            }

        },


        ImgRes: {
            [theme.breakpoints.down('sm')]: {
                marginTop: "10px",
                width: "75px",
                height: "75px",

            },
            [theme.breakpoints.up('md')]: {
                marginTop: "10px",
                width: "100px",
                height: "100px",
            },

            [theme.breakpoints.up('lg')]: {
                marginTop: "10px",
                width: "145px",
                height: "145px",
            },


            [theme.breakpoints.up('xl')]: {
                marginTop: "10px",
                width: "145px",
                height: "145px",
            }
        },
        SubjectRes: {
            [theme.breakpoints.down('sm')]: {
                marginTop: "30px",
                fontSize: "16px",
                paddingLeft: "30px",
                display: "inline-block",
                fontWeight: "bold",
                color: "#00ADB5",

            },
            [theme.breakpoints.up('md')]: {
                marginTop: "30px",
                fontSize: "16px",
                paddingLeft: "30px",
                display: "inline-block",
                fontWeight: "bold",
                color: "#00ADB5",
                marginBottom: "10px",
            },
            [theme.breakpoints.up('xl')]: {
                marginTop: "30px",
                fontSize: "16px",
                paddingLeft: "30px",
                display: "inline-block",
                fontWeight: "bold",
                color: "#00ADB5",
                marginBottom: "10px",
            },
        },
        StandardTypRes: {
            [theme.breakpoints.down('sm')]: {
                background: "#00ADB5",
                color: "white",
                marginTop: "75px",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "22px",
                display: "inline-block",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "10px"
            },
            [theme.breakpoints.up('md')]: {
                background: "#00ADB5",
                color: "white",
                marginTop: "100px",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "22px",
                display: "inline-block",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "10px"
            }
        },

        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        appBarShift1: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
            userSelect: 'none'
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        root1: {
            width: "9.375rem",
        },
        media: {
            height: "9.375rem",
        },
        subjectName: {
            marginTop: theme.spacing(10),
            marginLeft: theme.spacing(3),
            fontWeight: 800,
            fontSize: '25px',


        },
        chapterLength: {
            marginTop: "auto",
            marginBottom: "auto",
            fontWeight: 700,
            fontSize: '20px',
            verticalAlign: 'middle',
            display: 'flex'

        },
        rectangle:
        {
            borderRadius: '5px 5px 20px 5px',
            background: '#00ADB5',
            padding: '20px',
            width: '100px',
            height: '50px',
            marginRight: '410px'

        },
        unitNameCard:
        {
            borderRadius: '10px 10px 10px 10px',
            height: 120,
            marginLeft: theme.spacing(82),
            width: '48%',

        },
        unitTopics: {
            color: 'black',
            fontWeight: 900,
            marginLeft: theme.spacing(1),
            marginTop: '30px',

        },
        ArrowFOrward: {
            marginLeft: theme.spacing(105),
            marginTop: '30px',

        },
        subjectImage: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginLeft: theme.spacing(80),
            marginTop: theme.spacing(10),

        },

    }));
    const location = useLocation();
    const classes = useStyles();

    const [subName, setsubName] = useState("");
    const [unitNames, setunitNames] = useState("");
    const [topicNumber, setTopicNumber] = useState("");

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    
    const alertInfo = (text) => {
        if (text === "Sign Out") {
            confirmAlert({
                title: 'Sign Out',
                message: 'Are you sure to Sign out?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => history.push("/")

                    },
                    {
                        label: 'No',
                    }
                ],
            })

        }
    };





    const [navItemIcons] = React.useState([
        <LockIcon style={{ color: "#00ADB5" }} />,
        <SupervisorAccountIcon style={{ color: "#00ADB5" }} />,
        <PhoneInTalkIcon style={{ color: "#00ADB5" }} />,
        <ShareIcon style={{ color: "#00ADB5" }} />,
        <ListAltIcon style={{ color: "#00ADB5" }} />,
        <ErrorIcon style={{ color: "#00ADB5" }} />,
        <ExitToAppIcon style={{ color: "#00ADB5" }} />,
    ]);
    const [navItemName] = React.useState([
        "Account",
        "About Us",
        "Contact Us",
        "Share the App",
        "Terms and Privacy Policy",
        "App info",
        "Sign Out",
    ]);


    const [myLocalStorageData, setMyLocalStorageData] = useState({})
    var colors = (
        {
            "Maths": '#39A2DB',
            "Physics": '#D83A56',
            "Chemistry": '#0c9',
            "Botany": '#5d8233',
            "Zoology": '#753422',
            "Accountancy": '#d12a21',
            "Commerce": '#9b72aa',
            "History": '#E1701A',
            "Geography": '#39a6a3',
            "Economics": '#903',
            "Statistics": '#669',
            "Computer science": '#716f81',
            "Civics": '#069'
        }
    )


    useEffect(() => {
        setsubName(location.state.subNameToSend)
        setColor(location.state.colorsToSend)
        setunitNames(location.state.unitNumberToSend)
        setTopicNumber(location.state.topicNumberToSend)

    }, [location]);
    console.log(unitNames)

    const history = useHistory();
    const [value, setvalue] = useState(0);
    const handleChange = (event, newvalue) => {
        setvalue(newvalue);

    }
    const data = localStorage.getItem('12thStd')
    const data1 = JSON.parse(data)
    var d = []
    for (var i = 0; i < data1.length; i++) {
        if (data1[i]["subject"] === subName.toLowerCase()) {
            if (data1[i]["unitTopics"][topicNumber + 1]) {
                var tp = (data1[i]["unitTopics"][topicNumber + 1])
                console.log("hello")
                for (var j = 0; j < tp.length; j++) {
                    d.push(tp[j]["topicName"])
                }
            }
        }
    }
    console.log(d)

    return (


        <div >

            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    style={{ background: colors[subName] }}
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{ fontSize: "24px", userSelect: 'none' }} >
                            Gilgal
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <div>

                        </div>
                        <div>
                            <p style={{ marginRight: '75px', fontWeight: 'bold', color: '#00ADB5', fontSize: '16px' }}>Name</p>
                            <p >Board</p>
                            <p>Class</p>
                        </div>

                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <ChevronLeftIcon style={{ color: "#00ADB5" }} />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>

                    <div style={{ marginBottom: "10px", justifyContent: 'center', display: 'flex' }}>

                        <Button variant="outlined" style={{ color: '#00ADB5', textTransform: "none" }}>Change Board and Class</Button>
                        {/* Change page  */}

                    </div>

                    <Divider />
                    <List>
                        {navItemName.map((text, index) => (
                            <ListItem onClick={() => alertInfo(text)} button key={text}>
                                <ListItemIcon>{navItemIcons[index]}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

            </div>
            <div className={classes.unitNo}>Unit: {topicNumber + 1}</div>
            <div className={classes.unitName}>{unitNames}</div>

            <AppBar position="fixed"  className={clsx(classes.appBar1, {
                        [classes.appBarShift1]: open,
                    })}>
                <Tabs variant="fullWidth" textColor="white" value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: 'white' } }}>
                    <Tab className={classes.tab} icon={<SlowMotionVideoIcon />} label="Videos"></Tab>
                    <Tab className={classes.tab} icon={<ForumIcon />} label="Q&A" />
                    <Tab className={classes.tab} icon={<ShutterSpeedIcon />} label="Quiz" />

                </Tabs>
            </AppBar>
            {value === 0 && <TopicList value={d} />}
            {value === 1 && <TopicQA value={topicNumber+1} />}
            {value === 2 && <TopicQuiz />}
        </div>


    );
}