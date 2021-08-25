import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
const useStyles = makeStyles((themes) => ({
  icon: {
    width: 55,
    height: 55,
  },
}));
export default function VideoPanel() {
  const classes = useStyles();
  return (
    <div>
<div className={classes.root}>
                <AppBar position="static" style={{ background: "#00ADB5",padding:"6px"}}  >
                    <Toolbar variant="dense">
                        <Link to='/UnitPage' style={{color:"white"}}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                             </IconButton>
                        </Link>
                        <Typography variant="h6" >
                            Video Name
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
      <ReactPlayer
        width="100%"
        class="reactPlayer"
        style={{ width: "100%", background: "green" }}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
        //   onContextMenu={e => e.preventDefault()}
        // url="https://youtu.be/Law7wfdg_ls"
        url="https://firebasestorage.googleapis.com/v0/b/exo-player-b8500.appspot.com/o/MVI_9858_low_size.mp4?alt=media&token=8a7a3e39-663e-4a89-995b-557659f351d8"
        controls={true}
        onReady={() => console.log("onReady...")}
        onStart={() => console.log("onStart...")}
        onPause={() => console.log("onPause")}
        onError={() => console.log("onError")}
        onEnded={() => console.log("onEnded")}
        
        playIcon={<PlayCircleFilledIcon className={classes.icon} />}
        style={{ color: "white" }}
        //   light={Thum}
        // light={true}
        stopOnUnmount={true}
      />
      <Typography variant="h3" color="textPrimary" style={{ padding: "20px" }}>
        1.1 Introduction
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ padding: "20px" }}
      >
        A Sexual reproduction is the production by parents of two haploid cells
        and the fusion of two haploid cells to form a single, unique diploid
        cell. In most plants and animals, through tens of rounds of mitotic cell
        division, this diploid cell will develop into an adult organism.
      </Typography>
    </div>
  );
}