import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    root1: {
        maxWidth: 345,
        display: "inline-block",
        margin: "30px",
    },
    media: {
        height: 225,
    },
    grid: {
        marginLeft: theme.spacing(20)
    },
    topicListCard: {
        [theme.breakpoints.up('xl')]: {
            alignItems: "center",
            background: "#ffffff",
            color: "black",
            boxShadow: '5px',
            fontWeight: "bold",
            width: "320px",
            height: "300px",
            textTransform: "none",
            cursor: "pointer",
            fontSize: "14px",
            display: "inline-block",
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(14),
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(6),

            "&:hover":
            {
                transition: 'transform 0.5s',
                transform: 'scale(1.05) ',
                backgroundColor: 'white',
            },
        }
    },
    appBar:
    {
        width: "100%",
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(35),
        justifyContent: "center",
        position: 'relative',
        backgroundColor: '#00ADB5',
    },
    tab:
    {
        width: 900,

    },
    indicator:
    {
        backgroundColor: 'white',
    },
    topicListName:
    {
        fontWeight: "700",
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    icon:{
        color: 'white',
        position: "absolute",
        margin: "0 auto",
        left: "40%", //added
        top: "40%", //added
    fontSize: '50px',
        opacity: "1",
    }
}));

export default function TopicList(props) {
    const location = useLocation();
    const classes = useStyles();

    const [thums] = React.useState([Thum1, Thum2, Thum3, Thum1]);
    const [topicNumber, setTopicNumber] = useState("");

    console.log(props.value)
    var d = []
    for (var i = 0; i < props.value.length; i++) {
        d.push(props.value[i])
    }
    console.log(d)

    return (
        <>
            <div >
                <div style={{ justifyItems: "center" }}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.grid}
                    >
                        <Grid item>
                            <Link to="/playerpage" style={{ textDecoration: "none" }}>
                                {d.map((text, index) => (
                                    <Card className={classes.topicListCard} >
                                        <CardActionArea>
                                            <CardMedia className={classes.media} image={thums[index]}><PlayCircleOutlineIcon className={classes.icon} > </PlayCircleOutlineIcon>
                                            </CardMedia> 
                                            <Typography gutterBottom className={classes.topicListName}>
                                                {text}
                                            </Typography>

                                        </CardActionArea>
                                    </Card>
                                ))}
                            </Link>
                        </Grid>
                    </Grid>

                </div> </div>
        </>
    )
}
