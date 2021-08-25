import React from "react";
import firstSideImage from "./images/imgWelcomeScreen/first_side.svg";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import GilgalLogo from "./images/imgWelcomeScreen/gilgal_logo.png";
import FirstRightImage from "./images/imgWelcomeScreen/first_right_image.svg";
import clsx from "clsx";
import CardFirstImage from "./images/imgWelcomeScreen/wImage1.svg";
import CardSecondImage from "./images/imgWelcomeScreen/wImage2.svg";
import CardThirdImage from "./images/imgWelcomeScreen/wImage3.svg";
import CardFourthImage from "./images/imgWelcomeScreen/wImage4.svg";
import CardFifthImage from "./images/imgWelcomeScreen/wImage5.svg";
import CardSixthImage from "./images/imgWelcomeScreen/wImage6.svg";
import SupportAllDeviceImage from "./images/imgWelcomeScreen/supportAllDeviceImage.svg";
import GooglePlayBadge from "./images/imgWelcomeScreen/google-play-badge.png";

import List from "@material-ui/core/List";

import {
  Divider,
  Drawer,
  Box,
  Typography,
  Toolbar,
  Button,
  Grid,
  Paper,
  AppBar,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import HomeIcon from "@material-ui/icons/Home";
import { HomeWork } from "@material-ui/icons";
import InfoIcon from "@material-ui/icons/Info";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import PersonIcon from "@material-ui/icons/Person";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";

const useStyles = (theme) => ({
  appBarStyle: {
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      boxShadow: "none",
      display: "flex",
      marginTop: 24,
      marginBottom: 24,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: "#F4F9F9",
    },
  },

  appBarImage: {
    [theme.breakpoints.up("md")]: {
      height: "3rem",
      marginLeft: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "2.5rem",
      marginLeft: "10px",
    },
  },

  appBarMenuButton: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      marginLeft: "210px",
    },
  },

  appBarAllButtons: {
    [theme.breakpoints.up("md")]: {
      visibility: "visible",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  offerCardStyles: {
    [theme.breakpoints.up("lg")]: {
        width:"20vw",height:"35vh"
    },
  
    [theme.breakpoints.down("sm")]: {
      
    },
  },

  firstGridText: {
    [theme.breakpoints.up("md")]: {
      lineHeight: "10px",
      height: "100%",
      marginLeft: theme.spacing(16),
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "10px",
      height: "100%",
    },
  },

  firstGridTextStarter: {
    [theme.breakpoints.up("md")]: {
      marginTop: "150px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "100%",
    },
  },

});

class Welcome extends React.Component {
  state = {
    drawerOpen: false,
    menuIcons: [
      <HomeIcon />,
      <PermPhoneMsgIcon />,
      <InfoIcon />,
      <PersonIcon />,
    ],
    wTitle: [
      "Learn with Animated Video Classes",
      "Boost your Skills with Choice Based Questions",
      "Make Mock Test Practices with Model Question Papers",
      "Upgrade your Knowledge with Important Concepts",
      "Say Hello anytime to Clear your Doubts",
      "Updated Syllabus Content",
    ],
    wImage: [
      CardFirstImage,
      CardSecondImage,
      CardThirdImage,
      CardFourthImage,
      CardFifthImage,
      CardSixthImage,
    ],
  };

  onMenuBtnClick() {
    if (this.state.drawerOpen === true) {
      this.setState({ drawerOpen: false });
    } else {
      this.setState({ drawerOpen: true });
    }
  }
  onLoginClick() {
    console.log("hello");
    this.props.history.push("/Login");
  }
  onGetStartClick() {
    this.props.history.push("/Register");
  }
  onLandingPageClick() {
    this.props.history.push("/");
  }
  onContactClick() {
    this.props.history.push("/Contactus");
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          overflow: "hidden",
          minHeight: "100vh",
          maxWidth: "100vw",
         
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <AppBar position="static" className={classes.appBarStyle}>
            <Toolbar>
              <Box display="flex" flexGrow={1}>
                <div>
                  <img
                    alt="FirstImage"
                    style={{ cursor: "pointer" }}
                    className={classes.appBarImage}
                    src={GilgalLogo}
                    onClick={this.onLandingPageClick.bind(this)}
                  ></img>
                </div>
              </Box>
              {/* whatever is on the right side */}

              <div className={classes.appBarMenuButton}>
                <IconButton onClick={this.onMenuBtnClick.bind(this)}>
                  <MenuIcon />
                </IconButton>
              </div>

              <div className={classes.appBarAllButtons}>
                <Button style={{ marginLeft: "60px", color: "#1EA5FC" }}>
                  Home
                </Button>
                <Button
                  style={{ marginLeft: "60px" }}
                  onClick={this.onContactClick.bind(this)}
                  color="#000000"
                >
                  Contact
                </Button>
                <Button style={{ marginLeft: "60px" }} color="#000000">
                  About
                </Button>
                <Button style={{ marginLeft: "60px" }} color="#000000">
                  Careers
                </Button>
                <Button
                  style={{
                    marginRight: "100px",
                    marginLeft: "60px",
                    background: "#1EA5FC",
                    color: "#ffffff",
                  }}
                  variant="contained"
                  onClick={this.onLoginClick.bind(this)}
                >
                  Login
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Grid lg={12} container spacing={1}>
            <Grid item lg={6} sm={6} xs={12}>
              <div>
                <div className={classes.firstGridText}>
                  <div className={classes.firstGridTextStarter}>
                    <Typography
                      noWrap={false}
                      variant="h5"
                      style={{ marginBottom: "5px" }}
                      color="#000000"
                    >
                      Get Ready for the
                    </Typography>
                    <Typography
                      noWrap={false}
                      style={{ color: "#1EA5FC", marginBottom: "10px" }}
                      variant="h3"
                    >
                      Next Level Learning Experience
                    </Typography>
                    <Button
                      size="large"
                      variant="contained"
                      style={{ backgroundColor: "#1EA5FC", color: "white" }}
                      onClick={this.onGetStartClick.bind(this)}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <img
                alt="FirstImage"
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "87%",
                  maxHeight: "auto",
                }}
                src={FirstRightImage}
              ></img>
            </Grid>
          </Grid>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "5%",
            }}
          >
            <Typography
              noWrap={false}
              variant="h4"
              style={{ marginBottom: "5px", align: "center", color: "#1EA5FC" }}
            >
              What we offer
            </Typography>
          </div>

          <div style={{ marginRight: "6.5%", marginTop: "3%" }}>
          <Grid container spacing={5}>
            {this.state.wTitle.map((text, i) => (
                <Grid item xs={12} lg={4} sm={6} md={4}>
                  <div className={classes.firstGridText}>
                    <Card variant="outlined" className={classes.offerCardStyles}>
                      <CardContent style={{ margin: "5%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            alt="FirstImage"
                            style={{
                              display: "block",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "50%",
                              height: "50%",
                            }}
                            src={this.state.wImage[i]}
                          ></img>
                          <Typography
                            align="center"
                            noWrap={false}
                            variant="h6"
                            style={{ marginTop: "5%" }}
                            color="#1EA5FC"
                          >
                            {text}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
            
            ))}
            </Grid>
          </div>
          

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "5%",
            }}
          >
            <Typography
              noWrap={false}
              variant="h4"
              style={{ marginBottom: "5px", align: "center", color: "#1EA5FC" }}
            >
              Download our App
            </Typography>
          </div>

          <div style={{ marginRight: "6%", marginTop: "3%" }}>
            <Grid lg={12} container spacing={1}>
              <Grid item lg={6} sm={6} xs={12}>
                <div>
                  <div className={classes.firstGridText}>
                    <div>
                      <Typography
                        noWrap={false}
                        variant="h4"
                        style={{ marginBottom: "5px" }}
                        color="#000000"
                      >
                        Gilgal App is available in all platforms
                      </Typography>
                      <a href="https://play.google.com/store/apps/details?id=com.byjus.thelearningapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img
                          style={{ width: "40%", height: "30%" }}
                          alt="Get it on Google Play"
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <img
                    alt="SupportImage"
                    style={{
                      display: "block",
                      width: "60%",
                      height: "70%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    src={SupportAllDeviceImage}
                  ></img>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ marginRight: "6%", marginTop: "3%", marginLeft: "6%" }}>
            <hr />
            <Grid lg={12} container spacing={1}>
              <Grid item lg={6} sm={6} xs={12}>
                <Typography
                  noWrap={false}
                  variant="h6"
                  style={{ marginBottom: "5px" }}
                  color="#000000"
                >
                  Disclaimer | Privacy Policy | Terms of Services
                </Typography>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Typography
                    noWrap={false}
                    variant="h6"
                    style={{ marginBottom: "5px" }}
                    color="#000000"
                  >
                    © 2021, GILGAL. All rights reserved.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Drawer
          variant="temporary"
          onEscapeKeyDown={this.onMenuBtnClick.bind(this)}
          onBackdropClick={this.onMenuBtnClick.bind(this)}
          className={classes.drawer}
          anchor="right"
          open={this.state.drawerOpen}
          width="100%"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <IconButton onClick={this.onMenuBtnClick.bind(this)}>
              {<ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Home", "Contact", "About", "Login"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{this.state.menuIcons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}
export default withRouter(withStyles(useStyles)(Welcome));
