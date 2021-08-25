import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

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
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import useLocalStorage from "local-storage";
import { createContext } from 'react';


import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
function App() {
  console.log("Enter Func")

  const drawerWidth = 350;
  const useStyles = makeStyles((theme) => ({
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
        paddingLeft: "10px",
        paddingRight: "10px",
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
        paddingLeft: "10px",
        paddingRight: "10px",
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
        paddingLeft: "10px",
        paddingRight: "10px",
        fontSize: "14px",
        margin: "40px",
        "&:hover":
        {
          transition: 'transform 0.5s',
          transform: 'scale(1.15)',
          backgroundColor: 'white',

        }
      }

      ,
      [theme.breakpoints.up('xl')]: {
        alignItems: "center",
        background: "#ffffff",
        color: "black",
        fontWeight: "bold",
        width: "195px",
        height: "195px",
        textTransform: "none",
        paddingLeft: "10px",
        paddingRight: "10px",
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
        marginTop: "20px",
        marginBottom: "20px"
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
    menuButton: {
      marginRight: theme.spacing(2),
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
  }));

  const classes = useStyles();
  const theme = useTheme();



  const alertInfo = (text) => {
    if(text==="Sign Out")
    {
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

 

  

  const history = useHistory();
  var navItemIcons = [
    <LockIcon style={{ color: "#00ADB5" }} />,
    <SupervisorAccountIcon style={{ color: "#00ADB5" }} />,
    <PhoneInTalkIcon style={{ color: "#00ADB5" }} />,
    <ShareIcon style={{ color: "#00ADB5" }} />,
    <ListAltIcon style={{ color: "#00ADB5" }} />,
    <ErrorIcon style={{ color: "#00ADB5" }} />,
    <ExitToAppIcon style={{ color: "#00ADB5" }} />,
  ];

  const responseData = [{
		"unitNames": ["Applications of Matrices and Determinants", "Complex Numbers", "Theory of Equations", "Inverse Trigonometric Function", "Two Dimensional Analytical Geometry-II", "Applications of Vector Algebra", "Applications of Differential Calculus", "Differentials and Partial Derivatives", "Applications of Integration", "Ordinary Differential Equations", "Probability Distributions", "Discrete Mathematics"],
		"className": "class12th",
		"subject": "maths",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Inverse of a Non-Singular Square Matrix",
				"topicURL": ""
			}, {
				"topicName": "1.3 Elementary Transformations of a Matrix",
				"topicURL": ""
			}, {
				"topicName": "1.4 Applications of Matrices: Solving System of Linear Equations",
				"topicURL": ""
			}, {
				"topicName": "1.5 Applications of Matrices: Consistency of system of linear equations by rank method",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction to Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.2 Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.3 Basic Algebraic Properties of Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.4 Conjugate of a Complex Number",
				"topicURL": ""
			}, {
				"topicName": "2.5 Modulus of a Complex Number",
				"topicURL": ""
			}, {
				"topicName": "2.6 Geometry and Locus of Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.7 Polar and Euler form of a Complex Numbe",
				"topicURL": ""
			}, {
				"topicName": "2.8 de Moivre's Theorem and its Applications",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Basics of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.3 Vieta's Formulae and Formation of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.4 Nature of Roots and Nature of Coefficients of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.5 Applications to Geometrical Problems",
				"topicURL": ""
			}, {
				"topicName": "3.6 Roots of Higher Degree Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.7 Polynomials with Additional Information",
				"topicURL": ""
			}, {
				"topicName": "3.8 Polynomial Equations with no additional information",
				"topicURL": ""
			}, {
				"topicName": "3.9 Descartes Rule",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topiURL": ""
			}, {
				"topicName": "4.2 Some Fundamental Concepts",
				"topiURL": ""
			}, {
				"topicName": "4.3 Sine Function and Inverse Sine Function",
				"topiURL": ""
			}, {
				"topicName": "4.4 The Cosine Function and Inverse Cosine Function",
				"topiURL": ""
			}, {
				"topicName": "4.5 The Tangent Function and the Inverse Tangent Function",
				"topiURL": ""
			}, {
				"topicName": "4.6 The Cosecant Function and the Inverse Cosecant Function",
				"topiURL": ""
			}, {
				"topicName": "4.7 The Secant Function and Inverse Secant Function",
				"topiURL": ""
			}, {
				"topicName": "4.8 The Cotangent Function and the Inverse Cotangent Function",
				"topiURL": ""
			}, {
				"topicName": "4.9 Principal Value of Inverse Trigonometric Functions",
				"topiURL": ""
			}, {
				"topicName": "4.10 Properties of Inverse Trigonometric Functions",
				"topiURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topiURL": ""
			}, {
				"topicName": "5.2 Circle",
				"topicURL": ""
			}, {
				"topicName": "5.3 Conics",
				"topiURL": ""
			}, {
				"topicName": "5.4 Conic Sections",
				"topicURL": ""
			}, {
				"topicName": "5.5 Parametric form of Conics",
				"topiURL": ""
			}, {
				"topicName": "5.6 Tangents and Normals to Conics",
				"topiURL": ""
			}, {
				"topicName": "5.7 Real life Applications of Conics",
				"topiURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Geometric Introduction to Vectors",
				"topicURL": ""
			}, {
				"topicName": "6.3 Scalar Product and Vector Product",
				"topicURL": ""
			}, {
				"topicName": "6.4 Scalar triple product",
				"topicURL": ""
			}, {
				"topicName": "6.5 Vector triple product",
				"topicURL": ""
			}, {
				"topicName": "6.6 Jacobi's Identity and Lagrange's Identity",
				"topicURL": ""
			}, {
				"topicName": "6.7 Different forms of Equation of a Straight line",
				"topicURL": ""
			}, {
				"topicName": "6.8 Different forms of Equation of a plane",
				"topicURL": ""
			}, {
				"topicName": "6.9 Image of a point in a plane",
				"topicURL": ""
			}, {
				"topicName": "6.10 Meeting point of a line and a plane",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Meaning of Derivatives",
				"topicURL": ""
			}, {
				"topicName": "7.3 Mean Value Theorem",
				"topicURL": ""
			}, {
				"topicName": "7.4 Series Expansions",
				"topicURL": ""
			}, {
				"topicName": "7.5 Indeterminate Forms",
				"topicURL": ""
			}, {
				"topicName": "7.6 Applications of First Derivative",
				"topicURL": ""
			}, {
				"topicName": "7.7 Applications of Second Derivative",
				"topicURL": ""
			}, {
				"topicName": "7.8 Applications in Optimization",
				"topicURL": ""
			}, {
				"topicName": "7.9 Symmetry and Asymptotes",
				"topicURL": ""
			}, {
				"topicName": "7.10 Sketching of Curves",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Linear Approximation and Differentials",
				"topicURL": ""
			}, {
				"topicName": "8.3 Functions of Several Variables",
				"topicURL": ""
			}, {
				"topicName": "8.4 Limit and Continuity of Functions of Two Variables",
				"topicURL": ""
			}, {
				"topicName": "8.5 Partial Derivatives",
				"topicURL": ""
			}, {
				"topicName": "8.6 Linear Approximation and Differential of a Function of Several Variables",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Definite Integral as the Limit of a Sum",
				"topicURL": ""
			}, {
				"topicName": "9.3 Fundamental Theorems of Integral Calculus and their Applications",
				"topicURL": ""
			}, {
				"topicName": "9.4 Bernoulli's Formula",
				"topicURL": ""
			}, {
				"topicName": "9.5 Improper Integrals",
				"topicURL": ""
			}, {
				"topicName": "9.6 Reduction Formulae",
				"topicURL": ""
			}, {
				"topicName": "9.7 Gamma Integral",
				"topicURL": ""
			}, {
				"topicName": "9.8 Evaluation of Bounded Plane Area by Integration",
				"topicURL": ""
			}, {
				"topicName": "9.9 Volume of a Solid obtained by Revolving Area about an Axis",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Differential Equation, Order and Degree",
				"topicURL": ""
			}, {
				"topicName": "10.3 Classification of Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.4 Formation of Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.5 Solution of Ordinary Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.6 Solution of First Order and First Degree Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.7 First Order Linear Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.8 Applications of First Order Ordinary Differential Equations",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "11.2 Random Variable",
				"topicURL": ""
			}, {
				"topicName": "11.3 Types of Random Variable",
				"topicURL": ""
			}, {
				"topicName": "11.4 Continuous Distributions",
				"topicURL": ""
			}, {
				"topicName": "11.5 Mathematical Expectation",
				"topicURL": ""
			}, {
				"topicName": "11.6 Theoretical Distributions: Some Special Discrete Distributions",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "12.2 Binary Operations",
				"topicURL": ""
			}, {
				"topicName": "12.3 Mathematical Logic",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Electrostatics", "Current Electricity", "Magnetism and Magnetic Effects of Electric Current", "Electromagnetic Induction and Alternating Current", "Electromagnetic Waves", "Optics", "Dual Nature of Radiation and Matter", "Atomic and Nuclear Physics", "Semiconductor Electronics", "Communication Systems"],
		"className": "class12th",
		"subject": "physics",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Coulomb's Law",
				"topicURL": ""
			}, {
				"topicName": "1.3 Electric Field and Electric Field Lines",
				"topicURL": ""
			}, {
				"topicName": "1.4 Electric Dipole and Its Properties",
				"topicURL": ""
			}, {
				"topicName": "1.5 Electrostatic Potential and Potential Energy",
				"topicURL": ""
			}, {
				"topicName": "1.5.4 Equi-potential Surface",
				"topicURL": ""
			}, {
				"topicName": "1.6 Gauss Law and Its Applications",
				"topicURL": ""
			}, {
				"topicName": "1.7 Electrostatics of Conductors and Dielectrics",
				"topicURL": ""
			}, {
				"topicName": "1.8 Capacitors and Capacitance",
				"topicURL": ""
			}, {
				"topicName": "1.9 Distribution of Charges in a Conductor and Action at Points",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.2 Electric Current",
				"topicURL": ""
			}, {
				"topicName": "2.3 Ohm's Law",
				"topicURL": ""
			}, {
				"topicName": "2.4 Energy and Power in Electrical Circuits",
				"topicURL": ""
			}, {
				"topicName": "2.5 Electric Cells and Batteries",
				"topicURL": ""
			}, {
				"topicName": "2.6 Kirchhoff's Rules",
				"topicURL": ""
			}, {
				"topicName": "2.7 Heating Effect of Electric Current",
				"topicURL": ""
			}, {
				"topicName": "2.8 Thermoelectric Effect"
			}],
			"3": [{
				"topicName": "3.1 Introduction to Magnetism",
				"topicURL": ""
			}, {
				"topicName": "3.2 Coulomb's Inverse Square Law of Magnetism",
				"topicURL": ""
			}, {
				"topicName": "3.3 Torque Acting on a Bar Magnet in Uniform Magnetic Field",
				"topicURL": ""
			}, {
				"topicName": "3.4 Magnetic Properties",
				"topicURL": ""
			}, {
				"topicName": "3.5 Classification of Magnetic Materials",
				"topicURL": ""
			}, {
				"topicName": "3.6 Hysteresis",
				"topicURL": ""
			}, {
				"topicName": "3.7 Magnetic Effects of Current",
				"topicURL": ""
			}, {
				"topicName": "3.8 Biot - Savart Law",
				"topicURL": ""
			}, {
				"topicName": "3.9 Ampere's Circuital Law",
				"topicURL": ""
			}, {
				"topicName": "3.10 Lorentz Force",
				"topicURL": ""
			}, {
				"topicName": "3.11 Torque on a Current Loop",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Electromagnetic Induction",
				"topicURL": ""
			}, {
				"topicName": "4.2 Eddy Currents",
				"topicURL": ""
			}, {
				"topicName": "4.3 Self–induction",
				"topicURL": ""
			}, {
				"topicName": "4.4 Methods of Producing Induced Emf",
				"topicURL": ""
			}, {
				"topicName": "4.5 Ac Generator",
				"topicURL": ""
			}, {
				"topicName": "4.6 Transformer",
				"topicURL": ""
			}, {
				"topicName": "4.7 Alternating Current",
				"topicURL": ""
			}, {
				"topicName": "4.8 Power in Ac Circuits",
				"topicURL": ""
			}, {
				"topicName": "4.9 Oscillation in Lc Circuits",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "5.2 Electromagnetic Waves",
				"topicURL": ""
			}, {
				"topicName": "5.3 Types of Spectrum Emission and Absorption Spectrum Fraunhofer Lines",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Spherical Mirrors",
				"topicURL": ""
			}, {
				"topicName": "6.3 Speed of Light",
				"topicURL": ""
			}, {
				"topicName": "6.4 Refraction",
				"topicURL": ""
			}, {
				"topicName": "6.5 Refraction at Single Spherical Surface",
				"topicURL": ""
			}, {
				"topicName": "6.6 Thin Lens",
				"topicURL": ""
			}, {
				"topicName": "6.7 Prism",
				"topicURL": ""
			}, {
				"topicName": "6.8 Theories on Light",
				"topicURL": ""
			}, {
				"topicName": "6.9 Wave Nature of Light",
				"topicURL": ""
			}, {
				"topicName": "6.10 Interference",
				"topicURL": ""
			}, {
				"topicName": "6.11 Diffraction",
				"topicURL": ""
			}, {
				"topicName": "6.12 Polarisation",
				"topicURL": ""
			}, {
				"topicName": "6.13 Scattering Optical Instruments",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Photo Electric Effect",
				"topicURL": ""
			}, {
				"topicName": "7.3 Matter Waves",
				"topicURL": ""
			}, {
				"topicName": "7.4 X – Rays",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Electric Discharge Through Gases",
				"topicURL": ""
			}, {
				"topicName": "8.3 Atom Models",
				"topicURL": ""
			}, {
				"topicName": "8.4 Nuclei",
				"topicURL": ""
			}, {
				"topicName": "8.5 Nuclear Force",
				"topicURL": ""
			}, {
				"topicName": "8.6 Radioactivity",
				"topicURL": ""
			}, {
				"topicName": "8.7 Nuclear Fission",
				"topicURL": ""
			}, {
				"topicName": "8.8 Nuclear Fusion",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Types of Semiconductrors",
				"topicURL": ""
			}, {
				"topicName": "9.3 Diodes",
				"topicURL": ""
			}, {
				"topicName": "9.4 the Bipolar Junction Transistor",
				"topicURL": ""
			}, {
				"topicName": "9.5 Digital Electronics",
				"topicURL": ""
			}, {
				"topicName": "9.6 Boolean Algebra",
				"topicURL": ""
			}, {
				"topicName": "9.7 De Morgan's Theorem",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Modulation",
				"topicURL": ""
			}, {
				"topicName": "10.3 the Elements of an Electronic Communication System",
				"topicURL": ""
			}, {
				"topicName": "10.4 Antenna Size",
				"topicURL": ""
			}, {
				"topicName": "10.5 Propagation of Electromagnetic Waves",
				"topicURL": ""
			}, {
				"topicName": "10.6 Satellite Communication",
				"topicURL": ""
			}, {
				"topicName": "10.7 Fibre Optic Communication",
				"topicURL": ""
			}, {
				"topicName": "10.8 Radar and Applications",
				"topicURL": ""
			}, {
				"topicName": "10.9 Mobile Communication",
				"topicURL": ""
			}, {
				"topicName": "10.10 Internet",
				"topicURL": ""
			}, {
				"topicName": "10.11 Global Positioning System",
				"topicURL": ""
			}, {
				"topicName": "10.12 Application of Information and Communication Technology in Agriculture, Fisheries",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Accounts from Incomplete Records", "Accounts of Not - for - Profit Organisation", "Accounts of Partnership Firms - Fundamentals", "Goodwill in Partnership Accounts", "Admission of a Partner", "Retirement and Death of a Partner", "Company Accounts", "Financial Statement Analysis", "Ratio Analysis", "Computerised Accounting System Tally"],
		"className": "class12th",
		"subject": "accountancy",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Meaning of incomplete records",
				"topicURL": ""
			}, {
				"topicName": "1.3 Features of incomplete records",
				"topicURL": ""
			}, {
				"topicName": "1.4 Limitations of incomplete records",
				"topicURL": ""
			}, {
				"topicName": "1.5 Differences between double entry system and incomplete records",
				"topicURL": ""
			}, {
				"topicName": "1.6 Accounts from incomplete records",
				"topicURL": ""
			}, {
				"topicName": "1.7 Ascertaining profit or loss from incomplete records through statement of affairs",
				"topicURL": ""
			}, {
				"topicName": "1.8 Preparation of final accounts from incomplete records",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.2 Features of not-for-profit organisations",
				"topicURL": ""
			}, {
				"topicName": "2.3 Receipts and Payments Account",
				"topicURL": ""
			}, {
				"topicName": "2.4 Items peculiar to not-for-profit organisations,  2.5 Income and Expenditure Account, 2.6 Balance Sheet",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Meaning",
				"topicURL": ""
			}, {
				"topicName": "definition and features of partnership",
				"topicURL": ""
			}, {
				"topicName": "3.3 Partnership deed",
				"topicURL": ""
			}, {
				"topicName": "3.4 Application of the provisions of the Indian Partnership Act 1932 in the absence of partnership deed",
				"topicURL": ""
			}, {
				"topicName": "3.5 Final accounts of partnership firms",
				"topicURL": ""
			}, {
				"topicName": "3.6 Methods of maintaining capital accounts of partners",
				"topicURL": ""
			}, {
				"topicName": "3.7 Interest on capital and interest on drawings of partners",
				"topicURL": ""
			}, {
				"topicName": "3.8 Salary and commission to partners",
				"topicURL": ""
			}, {
				"topicName": "3.9 Interest on loan from partners",
				"topicURL": ""
			}, {
				"topicName": "3.10 Division of profits among partners",
				"topicURL": ""
			}, {
				"topicName": "3.11 Profit and loss appropriation account",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "4.2 Nature of goodwill",
				"topicURL": ""
			}, {
				"topicName": "4.3 Factors determining the value of goodwill of a partnership fi rm",
				"topicURL": ""
			}, {
				"topicName": "4.4 Need for valuation of goodwill of partnership firms",
				"topicURL": ""
			}, {
				"topicName": "4.5 Classification of goodwill",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "5.2 Adjustments required at the time of admission of a partner",
				"topicURL": ""
			}, {
				"topicName": "5.3 Distribution of accumulated profits reserves and losses",
				"topicURL": ""
			}, {
				"topicName": "5.4 Revaluation of assets and liabilities",
				"topicURL": ""
			}, {
				"topicName": "5.5 New profit sharing ratio and Sacrificing ratio",
				"topicURL": ""
			}, {
				"topicName": "5.6 Adjustment for goodwill",
				"topicURL": ""
			}, {
				"topicName": "5.7 Adjustment of capital on the basis of new profit sharing ratio",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Adjustments required on retirement of a partner",
				"topicURL": ""
			}, {
				"topicName": "6.3 Distribution of accumulated profits reserves and losses",
				"topicURL": ""
			}, {
				"topicName": "6.4 Revaluation of assets and liabilities",
				"topicURL": ""
			}, {
				"topicName": "6.5 Determination of new profit sharing ratio and gaining ratio",
				"topicURL": ""
			}, {
				"topicName": "6.6 Adjustment for goodwill",
				"topicURL": ""
			}, {
				"topicName": "6.7 Adjustment for current year`s profit or loss upto the date of retirement",
				"topicURL": ""
			}, {
				"topicName": "6.8 Settlement of the amount due to the retiring partner Death of a partner",
				"topicURL": ""
			}, {
				"topicName": "6.9 Adjustments required on the death of a partner",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Meaning and definition of a company",
				"topicURL": ""
			}, {
				"topicName": "7.3 Characteristics of a company",
				"topicURL": ""
			}, {
				"topicName": "7.4 Meaning and types of shares",
				"topicURL": ""
			}, {
				"topicName": "7.5 Divisions of share capital",
				"topicURL": ""
			}, {
				"topicName": "7.6 Issue of equity shares",
				"topicURL": ""
			}, {
				"topicName": "7.7 Process of issue of equity shares",
				"topicURL": ""
			}, {
				"topicName": "7.8 Issue of shares for cash in instalments",
				"topicURL": ""
			}, {
				"topicName": "7.9 Issue of shares for cash in lumpsum",
				"topicURL": ""
			}, {
				"topicName": "7.10 Issue of shares for consideration other than cash",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Financial statements",
				"topicURL": ""
			}, {
				"topicName": "8.3 Financial statements of companies",
				"topicURL": ""
			}, {
				"topicName": "8.4 Financial statement analysis",
				"topicURL": ""
			}, {
				"topicName": "8.5 Tools of financial statement analysis",
				"topicURL": ""
			}, {
				"topicName": "8.6 Preparation of comparative statements",
				"topicURL": ""
			}, {
				"topicName": "8.7 Preparation of common size statements",
				"topicURL": ""
			}, {
				"topicName": "8.8 Trend analysis",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1. Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2. Meaning of accounting ratios",
				"topicURL": ""
			}, {
				"topicName": "9.3. Meaning and definition of ratio analysis",
				"topicURL": ""
			}, {
				"topicName": "9.4. Objectives of ratio analysis",
				"topicURL": ""
			}, {
				"topicName": "9.6. Computation of ratios",
				"topicURL": ""
			}, {
				"topicName": "9.7.  Advantages of ratio analysis",
				"topicURL": ""
			}, {
				"topicName": "9.8. Limitations of ratio analysis",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Applications of Computerised Acounting System (CAS)",
				"topicURL": ""
			}, {
				"topicName": "10.3 Automated accounting system",
				"topicURL": ""
			}, {
				"topicName": "10.4 Designing the accounting reports",
				"topicURL": ""
			}, {
				"topicName": "10.5. Data exchange with other information system",
				"topicURL": ""
			}, {
				"topicName": "10.6. Application of computerised accounting system - Tally with GST package",
				"topicURL": ""
			}, {
				"topicName": "10.7. Practical application of accounting soft ware - Tally.ERP 9",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Metallurgy", "P-block Elements-i", "P-block Elements - Ii", "Transition and Inner Transition Elements", "Coordination Chemistry", "Solid State", "Chemical Kinetics", "Ionic Equilibrium", "Electro Chemistry", "Surface Chemistry", "Hydroxy Compounds and Ethers", "Carbonyl Compounds", "Organic Nitrogen Compounds", "Biomolecules", "Chemistry in Everyday Life"],
		"className": "class12th",
		"subject": "chemistry",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Occurrence of metals",
				"topicURL": ""
			}, {
				"topicName": "1.3 Extraction of crude metal",
				"topicURL": ""
			}, {
				"topicName": "1.4 Thermodynamic principle of metallurgy",
				"topicURL": ""
			}, {
				"topicName": "1.5 Electrochemical principle of metallurgy",
				"topicURL": ""
			}, {
				"topicName": "1.6 Refining process",
				"topicURL": ""
			}, {
				"topicName": "1.7 Application metals",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.1 General trends in properties of p-block elements:",
				"topicURL": ""
			}, {
				"topicName": "2.2 Group 13 (Boron group) elements",
				"topicURL": ""
			}, {
				"topicName": "2.3 Group 14 (Carbon group) elements",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Group 15 (Nitrogen group) elements",
				"topicURL": ""
			}, {
				"topicName": "3.3 Oxygen:",
				"topicURL": ""
			}, {
				"topicName": "3.4 Group 17",
				"topicURL": ""
			}, {
				"topicName": "3.5 Group 18",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "4.2 Position of d- block elements in the periodic table",
				"topicURL": ""
			}, {
				"topicName": "4.3 Electronic configuration",
				"topicURL": ""
			}, {
				"topicName": "4.4 General trend in properties",
				"topicURL": ""
			}, {
				"topicName": "4.5 important compound of Transition elements",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "5.2 Coordination compounds and double salts",
				"topicURL": ""
			}, {
				"topicName": "5.3 Werner's theory of coordination compounds",
				"topicURL": ""
			}, {
				"topicName": "5.4 Definition of important terms pertaining to co-ordination compounds",
				"topicURL": ""
			}, {
				"topicName": "5.5 Nomenclature of coordination compounds",
				"topicURL": ""
			}, {
				"topicName": "5.6 Isomerism in coordination compounds",
				"topicURL": ""
			}, {
				"topicName": "5.7 Theories of coordination compound",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 General characteristics of solids",
				"topicURL": ""
			}, {
				"topicName": "6.3 Classification of solids",
				"topicURL": ""
			}, {
				"topicName": "6.4 Classification of crystalline solids:",
				"topicURL": ""
			}, {
				"topicName": "6.5 Crystal lattice and unit cell",
				"topicURL": ""
			}, {
				"topicName": "6.6 Primitive and non-primitive unit cell",
				"topicURL": ""
			}, {
				"topicName": "6.7 Packing in crystals",
				"topicURL": ""
			}, {
				"topicName": "6.8 Imperfection in solids",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Rate of a chemical reaction",
				"topicURL": ""
			}, {
				"topicName": "7.3 Rate law and rate constant",
				"topicURL": ""
			}, {
				"topicName": "7.4 Molecularity",
				"topicURL": ""
			}, {
				"topicName": "7.5 The integrated rate equation",
				"topicURL": ""
			}, {
				"topicName": "7.6 Half life period of a reaction:",
				"topicURL": ""
			}, {
				"topicName": "7.7 Collision theory :",
				"topicURL": ""
			}, {
				"topicName": "7.8 Arrhenius equation – The effect of temperature on reaction rate",
				"topicURL": ""
			}, {
				"topicName": "7.9 Factors affecting the reaction rate:",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Acids and bases",
				"topicURL": ""
			}, {
				"topicName": "8.2 Strength of Acids and Bases",
				"topicURL": ""
			}, {
				"topicName": "8.3 Ionisation of water",
				"topicURL": ""
			}, {
				"topicName": "8.4 The pH scale",
				"topicURL": ""
			}, {
				"topicName": "8.5 Ionisation of weak acids",
				"topicURL": ""
			}, {
				"topicName": "8.6 Common Ion Effect",
				"topicURL": ""
			}, {
				"topicName": "8.7 Buffer Solution",
				"topicURL": ""
			}, {
				"topicName": "8.8 Salt Hydrolysis",
				"topicURL": ""
			}, {
				"topicName": "8.9 Solubility Product",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Conductivity of electrolytic solution",
				"topicURL": ""
			}, {
				"topicName": "9.3 Variation of molar conductivity with concentration",
				"topicURL": ""
			}, {
				"topicName": "9.4 Electrochemical Cell",
				"topicURL": ""
			}, {
				"topicName": "9.5 Thermodynamics of cell reactions",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Adsorption and Absorption",
				"topicURL": ""
			}, {
				"topicName": "10.3 Catalysis",
				"topicURL": ""
			}, {
				"topicName": "10.4 Enzyme Catalysis",
				"topicURL": ""
			}, {
				"topicName": "10.5 Colloid Dispersion phase and dispersion medium",
				"topicURL": ""
			}, {
				"topicName": "10.6 Emulsions",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "11.2 Classification of alcohols",
				"topicURL": ""
			}, {
				"topicName": "11.3 IUPAC Nomenclature",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Nomenclature if Aldehydes and Ketones",
				"topicURL": ""
			}, {
				"topicName": "12.2 Structure of carbonyl group",
				"topicURL": ""
			}, {
				"topicName": "12.3 Preparation of aldehydes and ketones",
				"topicURL": ""
			}, {
				"topicName": "12.4 Physical properties of Aldehydes and Ketones",
				"topicURL": ""
			}],
			"13": [{
				"topicName": "13.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "13.2 Nitro Compounds",
				"topicURL": ""
			}, {
				"topicName": "13.3 Electrolytic Reduction",
				"topicURL": ""
			}, {
				"topicName": "13.4 Properties of amines",
				"topicURL": ""
			}, {
				"topicName": "13.5 Diazonium Salts",
				"topicURL": ""
			}, {
				"topicName": "13.6 Cyanides AND Isocyanides",
				"topicURL": ""
			}],
			"14": [{
				"topicName": "14.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "14.2 Carbohydrates:",
				"topicURL": ""
			}, {
				"topicName": "14.3 Proteins",
				"topicURL": ""
			}, {
				"topicName": "14.4 Lipids:",
				"topicURL": ""
			}, {
				"topicName": "14.5 Vitamins",
				"topicURL": ""
			}, {
				"topicName": "14.6 Nucleic acids",
				"topicURL": ""
			}, {
				"topicName": "14.7 Hormones",
				"topicURL": ""
			}],
			"15": [{
				"topicName": "15.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "15.2 Drug",
				"topicURL": ""
			}, {
				"topicName": "15.3 Food additives:",
				"topicURL": ""
			}, {
				"topicName": "15.4 Cleansing agents:",
				"topicURL": ""
			}, {
				"topicName": "15.5 Polymers",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Population Geography", "Human Settlements", "Resources", "Economic Activities", "Cultural and Political Geography", "Geo Informatics", "Sustainable Development", "Man-Made Disasters-Public Awarness for Disaster Risk Reduction", "Surveying", "Map Projection", "Thematic Mapping", "Representation of Geographical Data", "Statistical Techniques"],
		"className": "class12th",
		"subject": "geography",
		"unitTopics": {
			"1": [{
				"topicName": "1.1. Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Distribution of World population",
				"topicURL": ""
			}, {
				"topicName": "1.3 Density of Population",
				"topicURL": ""
			}, {
				"topicName": "1.4 Growth of world population",
				"topicURL": ""
			}, {
				"topicName": "1.5 Composition of Population",
				"topicURL": ""
			}, {
				"topicName": "1.6 Migration",
				"topicURL": ""
			}, {
				"topicName": "1.7 Overpopulation",
				"topicURL": ""
			}, {
				"topicName": "1.8 Measures to control overpopulation",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1. Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.2. Origin and development of Settlement",
				"topicURL": ""
			}, {
				"topicName": "2.3. Site and Situation",
				"topicURL": ""
			}, {
				"topicName": "2.4. Pattern of Rural Settlement",
				"topicURL": ""
			}, {
				"topicName": "2.5. Classification of Rural Settlement",
				"topicURL": ""
			}, {
				"topicName": "2.6. Urban Settlement",
				"topicURL": ""
			}, {
				"topicName": "2.7. The concentric zone theory",
				"topicURL": ""
			}, {
				"topicName": "2.8. Urbanization of the World and India",
				"topicURL": ""
			}, {
				"topicName": "2.9. Issues of Urbanization",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Classification of Resources",
				"topicURL": ""
			}, {
				"topicName": "3.3 Mineral resources",
				"topicURL": ""
			}, {
				"topicName": "3.4 Th e world distribution of minerals",
				"topicURL": ""
			}, {
				"topicName": "3.5 Energy Resources",
				"topicURL": ""
			}, {
				"topicName": "3.6 Conservation of Resources",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "4.2 Primary activities",
				"topicURL": ""
			}, {
				"topicName": "4.3 Secondary activities",
				"topicURL": ""
			}, {
				"topicName": "4.4 Tertiary activities",
				"topicURL": ""
			}, {
				"topicName": "4.5 Division of the world on the basis of Economic Activies",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "5.2 Cultural Realms of the World",
				"topicURL": ""
			}, {
				"topicName": "5.3 Races",
				"topicURL": ""
			}, {
				"topicName": "5.4 Tribal Distribution of the World",
				"topicURL": ""
			}, {
				"topicName": "5.5 Political Geography - Concept of Nation and State",
				"topicURL": ""
			}, {
				"topicName": "5.5.1 Frontiers and Boundaries",
				"topicURL": ""
			}, {
				"topicName": "5.5.2 Geopolitics: Global Strategic views",
				"topicURL": ""
			}, {
				"topicName": "5.5.3 21st Century Geopolitics of the Multipolar World Order",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Remote sensing",
				"topicURL": ""
			}, {
				"topicName": "6.3 Geographic Information System (GIS)",
				"topicURL": ""
			}, {
				"topicName": "6.4 Global Navigation Satellite System (GNSS)",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Concept and Goals of Sustainable development",
				"topicURL": ""
			}, {
				"topicName": "7.3 Climate Change and Sustainability",
				"topicURL": ""
			}, {
				"topicName": "7.4 Watershed management and its importance",
				"topicURL": ""
			}, {
				"topicName": "7.5 Environmental Impact Assessment",
				"topicURL": ""
			}, {
				"topicName": "7.6 Measures for promotion of sustainable development",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Community based Disaster Risk Reduction",
				"topicURL": ""
			}, {
				"topicName": "8.3 Man - made disasters",
				"topicURL": ""
			}, {
				"topicName": "8.3.1 Stampede",
				"topicURL": ""
			}, {
				"topicName": "8.3.2 Drowning",
				"topicURL": ""
			}, {
				"topicName": "8.3.3 Fire Accident",
				"topicURL": ""
			}, {
				"topicName": "8.3.4 Industrial Disasters",
				"topicURL": ""
			}, {
				"topicName": "8.3.5 Road Accident",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Clinometers",
				"topicURL": ""
			}, {
				"topicName": "9.3 Prismatic Compass",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Classification of Map Projections",
				"topicURL": ""
			}, {
				"topicName": "10.3 Construction of Some selected Map Projections",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "11.2 Thematic Map",
				"topicURL": ""
			}, {
				"topicName": "11.2.1 Dot method",
				"topicURL": ""
			}, {
				"topicName": "11.2.2 Choropleth method",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "12.2 Classification of statistical diagrams",
				"topicURL": ""
			}, {
				"topicName": "12.2.1 Line Diagram",
				"topicURL": ""
			}, {
				"topicName": "12.2.2 Bar Diagram",
				"topicURL": ""
			}, {
				"topicName": "12.2.3 Pie Diagram",
				"topicURL": ""
			}],
			"13": [{
				"topicName": "13.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "13.2 Role of statistics in geography",
				"topicURL": ""
			}, {
				"topicName": "13.3 Types of Data",
				"topicURL": ""
			}, {
				"topicName": "13.4 Methods of collection of Data",
				"topicURL": ""
			}, {
				"topicName": "13.5 Organisation and Classification of Data",
				"topicURL": ""
			}, {
				"topicName": "13.6 Statistical techniques measures of central tendency",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Tests of Significance - Basic Concepts and Large Sample Tests", "Tests Based on Sampling Distributions I", "Tests Based on Sampling Distributions  Ii", "Correlation Analysis", "Regression Analysis", "Index Numbers", "Time Series and Forecasting", "Vital Statistics and Official Statistics", "Project Work"],
		"className": "class12th",
		"subject": "statistics",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Parameter and Statistic",
				"topicURL": ""
			}, {
				"topicName": "1.2 Sampling Distribution",
				"topicURL": ""
			}, {
				"topicName": "1.3 Standard Error",
				"topicURL": ""
			}, {
				"topicName": "1.4 Null Hypothesis and Alternative Hypothesis",
				"topicURL": ""
			}, {
				"topicName": "1.5 Errors in Statistical Hypotheses Testing",
				"topicURL": ""
			}, {
				"topicName": "1.6 Level of Significance ,Critical Region and Critical Value(s)",
				"topicURL": ""
			}, {
				"topicName": "1.7 One-tailed and Two-tailed Tests",
				"topicURL": ""
			}, {
				"topicName": "1.8 General Procedure for Test of Hypotheses",
				"topicURL": ""
			}, {
				"topicName": "1.9 Test of Hypotheses for Population Mean (population Variance Is Known)",
				"topicURL": ""
			}, {
				"topicName": "1.10 Test of Hypotheses for Population Mean (population Variance Is Unknown)",
				"topicURL": ""
			}, {
				"topicName": "1.11 Test of Hypotheses for Equality of Means of Two Populations (population Variances Are Known)",
				"topicURL": ""
			}, {
				"topicName": "1.12 Test of Hypotheses for Equality of Means of Two Populations (population Variances Are Unknown)",
				"topicURL": ""
			}, {
				"topicName": "1.13 Test of Hypotheses for  Population Proportion",
				"topicURL": ""
			}, {
				"topicName": "1.14 Test of Hypotheses for Equality of Proportions of Two Populations",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Student's T Distribution and Its Applications",
				"topicURL": ""
			}, {
				"topicName": "2.2 Chi-square Distribution and Its Applications",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 F -distribution and Its Applications",
				"topicURL": ""
			}, {
				"topicName": "3.2 Test of Significance for Two Normal Population Variances",
				"topicURL": ""
			}, {
				"topicName": "3.3 Analysis of Variance (anova)",
				"topicURL": ""
			}, {
				"topicName": "3.4 Two-way Anova",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Definition of Correlation",
				"topicURL": ""
			}, {
				"topicName": "4.2 Types of Correlation",
				"topicURL": ""
			}, {
				"topicName": "4.3 Scatter Diagram",
				"topicURL": ""
			}, {
				"topicName": "4.4 Karl Pearson`s Correlation Coefficient",
				"topicURL": ""
			}, {
				"topicName": "4.5 Spearman`s Rank Correlation Coefficient",
				"topicURL": ""
			}, {
				"topicName": "4.6 Yule`s Coefficient of Association",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Definition",
				"topicURL": ""
			}, {
				"topicName": "5.2 Uses of Regression",
				"topicURL": ""
			}, {
				"topicName": "5.3 Why Are There Two Regression Lines?",
				"topicURL": ""
			}, {
				"topicName": "5.4 Method of Least Squares",
				"topicURL": ""
			}, {
				"topicName": "5.5 Properties of Regression Coefficients",
				"topicURL": ""
			}, {
				"topicName": "5.6 Difference Between Correlation and Regression",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Definition and Uses of Index Numbers",
				"topicURL": ""
			}, {
				"topicName": "6.2 Types of Index Numbers",
				"topicURL": ""
			}, {
				"topicName": "6.3 Methods of Constructing Index Numbers",
				"topicURL": ""
			}, {
				"topicName": "6.4 Weighted Index Numbers",
				"topicURL": ""
			}, {
				"topicName": "6.5 Consumer Price Index Numbers",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Definition",
				"topicURL": ""
			}, {
				"topicName": "7.2 Components of Time Series",
				"topicURL": ""
			}, {
				"topicName": "7.3 Measurement of Components",
				"topicURL": ""
			}, {
				"topicName": "7.4 Forecasting",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Vital Statistics",
				"topicURL": ""
			}, {
				"topicName": "8.2 Official Statistics",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Designing a Project",
				"topicURL": ""
			}, {
				"topicName": "9.2 Project Work Plan",
				"topicURL": ""
			}, {
				"topicName": "9.3 Questionnaire Development Process",
				"topicURL": ""
			}, {
				"topicName": "9.4 Features of a Project Report",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Reproduction in Organisms", "Human Reproduction", "Reproductive Health", "Principles of Inheritance and Variation", "Molecular Genetics", "Evolution", "Human Health and Diseases", "Immunology", "Microbes in Human Welfare", "Applications of biotechnology", "Organism and Population", "Biodiversity and its conservation", "Enviromental Issues"],
		"className": "class12th",
		"subject": "zoology",
		"unitTopics": {
			"1": [{
				"topicName": "1.1. Modes of reproduction",
				"topicURL": ""
			}, {
				"topicName": "1.2. Asexual reproduction",
				"topicURL": ""
			}, {
				"topicName": "1.3. Sexual reproduction",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Human reproductive system",
				"topicURL": ""
			}, {
				"topicName": "2.2 Gametogenesis",
				"topicURL": ""
			}, {
				"topicName": "2.3 Menstrual cycle",
				"topicURL": ""
			}, {
				"topicName": "2.4 Menstrual disorders and menstrual hygiene",
				"topicURL": ""
			}, {
				"topicName": "2.5 Fertilisation and implantation",
				"topicURL": ""
			}, {
				"topicName": "2.6 Maintenance of pregnancy and embryonic development",
				"topicURL": ""
			}, {
				"topicName": "2.7 Parturition and lactation",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1. Need for reproductive health Problems and strategies",
				"topicURL": ""
			}, {
				"topicName": "3.2. Amniocentesis and its statutory ban",
				"topicURL": ""
			}, {
				"topicName": "3.3. Social impact of sex ratio, female foeticide and infanticide",
				"topicURL": ""
			}, {
				"topicName": "3.4. Population explosion and birth control",
				"topicURL": ""
			}, {
				"topicName": "3.5. Medical termination of pregnancy (MTP)",
				"topicURL": ""
			}, {
				"topicName": "3.6. Sexually transmitted diseases (STD)",
				"topicURL": ""
			}, {
				"topicName": "3.7. Infertility",
				"topicURL": ""
			}, {
				"topicName": "3.8. Assisted reproductive technologies (ART)",
				"topicURL": ""
			}, {
				"topicName": "3..9. Detection of foetal disorders during early pregnancy",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Multiple alleles",
				"topicURL": ""
			}, {
				"topicName": "4.2 Human blood groups",
				"topicURL": ""
			}, {
				"topicName": "4.3 Genetic control of Rh factor",
				"topicURL": ""
			}, {
				"topicName": "4.4 Sex determination in human, insects and birds",
				"topicURL": ""
			}, {
				"topicName": "4.5 Sex linked inheritance",
				"topicURL": ""
			}, {
				"topicName": "4.6. Karyotyping",
				"topicURL": ""
			}, {
				"topicName": "4.7. Pedigree analysis",
				"topicURL": ""
			}, {
				"topicName": "4.8. Mendelian disorders",
				"topicURL": ""
			}, {
				"topicName": "4.9. Chromosomal abnormalities",
				"topicURL": ""
			}, {
				"topicName": "4.10. Extra chromosomal inheritance",
				"topicURL": ""
			}, {
				"topicName": "4.11. Eugenics, euphenics and euthenics",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Gene as the functional unit of inheritance",
				"topicURL": ""
			}, {
				"topicName": "5.2 In search of the genetic material",
				"topicURL": ""
			}, {
				"topicName": "5.3 DNA is the genetic material",
				"topicURL": ""
			}, {
				"topicName": "5.4 Chemistry of nucleic acids",
				"topicURL": ""
			}, {
				"topicName": "10.6 Emulsions",
				"topicURL": ""
			}, {
				"topicName": "5.6 Properties of genetic material",
				"topicURL": ""
			}, {
				"topicName": "5.7 Packaging of DNA helix",
				"topicURL": ""
			}, {
				"topicName": "5.8 DNA Replication",
				"topicURL": ""
			}, {
				"topicName": "5.9 Transcription",
				"topicURL": ""
			}, {
				"topicName": "5.10 Genetic code",
				"topicURL": ""
			}, {
				"topicName": "5.11 tRNA – the adapter molecule",
				"topicURL": ""
			}, {
				"topicName": "5.12 Translation",
				"topicURL": ""
			}, {
				"topicName": "5.13 Regulation of Gene expression",
				"topicURL": ""
			}, {
				"topicName": "5.14 Human Genome Project (HGP)",
				"topicURL": ""
			}, {
				"topicName": "5.15 DNA finger printing technique",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Origin of life - Evolution of life forms",
				"topicURL": ""
			}, {
				"topicName": "6.2 Geological time scale",
				"topicURL": ""
			}, {
				"topicName": "6.3 Biological evolution",
				"topicURL": ""
			}, {
				"topicName": "6.4 Evidences for biological evolution",
				"topicURL": ""
			}, {
				"topicName": "6.5 Theories of biological evolution",
				"topicURL": ""
			}, {
				"topicName": "6.6 Mechanism of evolution",
				"topicURL": ""
			}, {
				"topicName": "6.7 Hardy Weinberg principle",
				"topicURL": ""
			}, {
				"topicName": "6.8 Origin and evolution of man",
				"topicURL": ""
			}, {
				"topicName": "6.9 Isolating mechanisms",
				"topicURL": ""
			}, {
				"topicName": "6.10 Speciation",
				"topicURL": ""
			}, {
				"topicName": "6.11 Extinction of animals",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Common diseases in human beings Infectious and non infectious diseases",
				"topicURL": ""
			}, {
				"topicName": "7.2 Maintenance of personal and public hygiene",
				"topicURL": ""
			}, {
				"topicName": "7.3 Adolescence – Drug and alcohol abuse",
				"topicURL": ""
			}, {
				"topicName": "7.4 Mental health – Depression",
				"topicURL": ""
			}, {
				"topicName": "7.5 Lifestyle disorders in human beings",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Basic concepts of immunology",
				"topicURL": ""
			}, {
				"topicName": "8.2 Innate immunity",
				"topicURL": ""
			}, {
				"topicName": "8.3 Acquired immunity",
				"topicURL": ""
			}, {
				"topicName": "8.4 Immune responses",
				"topicURL": ""
			}, {
				"topicName": "8.5 Lymphoid organs",
				"topicURL": ""
			}, {
				"topicName": "8.6 Antigens",
				"topicURL": ""
			}, {
				"topicName": "8.7 Antibodies",
				"topicURL": ""
			}, {
				"topicName": "8.8 Antigen- antibody interactions",
				"topicURL": ""
			}, {
				"topicName": "8.9 Vaccines",
				"topicURL": ""
			}, {
				"topicName": "8.10 Vaccination and immunization",
				"topicURL": ""
			}, {
				"topicName": "8.11 Hypersensitivity",
				"topicURL": ""
			}, {
				"topicName": "8.12 Immunodeficiency diseases",
				"topicURL": ""
			}, {
				"topicName": "8.13 Autoimmune diseases",
				"topicURL": ""
			}, {
				"topicName": "8.14 Tumour immunology",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Microbes in household products",
				"topicURL": ""
			}, {
				"topicName": "9.2 Microbes in industrial products",
				"topicURL": ""
			}, {
				"topicName": "9.3 Microbes in sewage treatment and energy generation",
				"topicURL": ""
			}, {
				"topicName": "9.4 Microbes in the production of biogas",
				"topicURL": ""
			}, {
				"topicName": "9.5 Microbes as bio-control agents and bio-fertilisers",
				"topicURL": ""
			}, {
				"topicName": "9.6 Bioremediation",
				"topicURL": ""
			}, {
				"topicName": "9.7 Gamma Integral",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Applications in Medicine",
				"topicURL": ""
			}, {
				"topicName": "10.2 Gene therapy",
				"topicURL": ""
			}, {
				"topicName": "10.3 Stem Cell Therapy",
				"topicURL": ""
			}, {
				"topicName": "10.4 Molecular Diagnosis",
				"topicURL": ""
			}, {
				"topicName": "10.5 Transgenic Animals",
				"topicURL": ""
			}, {
				"topicName": "10.6 Biological products and their uses",
				"topicURL": ""
			}, {
				"topicName": "10.7 Animal cloning",
				"topicURL": ""
			}, {
				"topicName": "10.8 Ethical issues",
				"topicURL": ""
			}, {
				"topicName": "10.9 Regulation in biotechnology",
				"topicURL": ""
			}, {
				"topicName": "10.10 Possible threats of Genetically Modified Organisms",
				"topicURL": ""
			}, {
				"topicName": "10.11 Biosafety guidelines",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1. Organism and its Environment",
				"topicURL": ""
			}, {
				"topicName": "11.2. Habitat",
				"topicURL": ""
			}, {
				"topicName": "11.3. Major Abiotic Components or Factors",
				"topicURL": ""
			}, {
				"topicName": "11.4. Concept of Biome and Distribution",
				"topicURL": ""
			}, {
				"topicName": "11.5. Responses to abiotic factors",
				"topicURL": ""
			}, {
				"topicName": "11.6. Adaptations",
				"topicURL": ""
			}, {
				"topicName": "11.7. Populations",
				"topicURL": ""
			}, {
				"topicName": "11.8. Population attributes",
				"topicURL": ""
			}, {
				"topicName": "11.9. Population age distribution",
				"topicURL": ""
			}, {
				"topicName": "11.10. Growth models / Curves",
				"topicURL": ""
			}, {
				"topicName": "11.11. Population regulation",
				"topicURL": ""
			}, {
				"topicName": "11.12. Population interactions",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Biodiversity",
				"topicURL": ""
			}, {
				"topicName": "12.2 Importance of biodiversity – Global and India",
				"topicURL": ""
			}, {
				"topicName": "12.3 Biogeographical regions of India",
				"topicURL": ""
			}, {
				"topicName": "12.4 Threats to biodiversity",
				"topicURL": ""
			}, {
				"topicName": "12.5. Causes of Biodiversity Loss",
				"topicURL": ""
			}, {
				"topicName": "12.6 IUCN",
				"topicURL": ""
			}, {
				"topicName": "12.7 Biodiversity and its conservation",
				"topicURL": ""
			}, {
				"topicName": "12.8 Restoration of degraded habitats",
				"topicURL": ""
			}, {
				"topicName": "12.9 Biodiversity Act (BDA)",
				"topicURL": ""
			}],
			"13": [{
				"topicName": "13.1 Pollution",
				"topicURL": ""
			}, {
				"topicName": "13.2 Air Pollution",
				"topicURL": ""
			}, {
				"topicName": "13.3 Water Pollution",
				"topicURL": ""
			}, {
				"topicName": "13.4 Noise Pollution",
				"topicURL": ""
			}, {
				"topicName": "13.5 Agrochemicals",
				"topicURL": ""
			}, {
				"topicName": "13.6 Biomagnification",
				"topicURL": ""
			}, {
				"topicName": "13.7 Eutrophication",
				"topicURL": ""
			}, {
				"topicName": "13.8 Organic Farming and its Implementation",
				"topicURL": ""
			}, {
				"topicName": "13.9 Solid Waste Management",
				"topicURL": ""
			}, {
				"topicName": "13.10 Global Environment Change",
				"topicURL": ""
			}, {
				"topicName": "13.11 Impact on Specific Ecosystem",
				"topicURL": ""
			}, {
				"topicName": "13.12 Ozone Depletion",
				"topicURL": ""
			}, {
				"topicName": "13.13 Deforestation",
				"topicURL": ""
			}, {
				"topicName": "13.14 Ecosan Toilets",
				"topicURL": ""
			}, {
				"topicName": "13.15 Peoples Participation in Conservation of Forests",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Function", "Data Abstraction", "Scoping", "Algorithmic Strateg", "Python  Variables and Operators", "Control Structures", "Python Functions", "Strings and String Manipulation", "Lists, Tuples, Sets and Dictionary", "Python Classes and Obj", "Database Concepts", "Structured Query Language", "Python and Csv Files", "Importing C++ Programs in Python", "Data Manipulation Through Sql", "Data Visualization Using Pyplot Line Chart, Pie Chart and Bar Chart"],
		"className": "class12th",
		"subject": "computer science",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Function with respect to Programming language",
				"topicURL": ""
			}, {
				"topicName": "1.3 Interface Vs Implementation",
				"topicURL": ""
			}, {
				"topicName": "1.4 Pure functions",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.1 Data Abstraction- Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.2 Abstract Data Types",
				"topicURL": ""
			}, {
				"topicName": "2.3 constructors and selectors",
				"topicURL": ""
			}, {
				"topicName": "2.4 Representation of Abstract Datatype using Rational numbers",
				"topicURL": ""
			}, {
				"topicName": "2.5 Lists,Tuples",
				"topicURL": ""
			}, {
				"topicName": "2.6 Data Abstraction in Structure",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Variable Scope",
				"topicURL": ""
			}, {
				"topicName": "3.3 LEGB rule",
				"topicURL": ""
			}, {
				"topicName": "3.4 Types of Variable Scope",
				"topicURL": ""
			}, {
				"topicName": "3.5 Module",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction to Algorithmic strategies",
				"topicURL": ""
			}, {
				"topicName": "4.2 Complexity of an Algorithm",
				"topicURL": ""
			}, {
				"topicName": "4.3 Efficiency of an algorit",
				"topicURL": ""
			}, {
				"topicName": "4.4 Algorithm for Searching Techniques",
				"topicURL": ""
			}, {
				"topicName": "4.5 Sorting Techniques",
				"topicURL": ""
			}, {
				"topicName": "4.6 Dynamic programming",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "5.2 Key features of Python",
				"topicURL": ""
			}, {
				"topicName": "5.3 Programming in Python",
				"topicURL": ""
			}, {
				"topicName": "5.4 Input and Output Functions",
				"topicURL": ""
			}, {
				"topicName": "5.5 Comments in Python",
				"topicURL": ""
			}, {
				"topicName": "5.6 Indentation",
				"topicURL": ""
			}, {
				"topicName": "5.7 Tokens",
				"topicURL": ""
			}, {
				"topicName": "5.8 Python Data types",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Control Structures",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Defining Functions",
				"topicURL": ""
			}, {
				"topicName": "7.3 Calling a Function",
				"topicURL": ""
			}, {
				"topicName": "7.4 Passing Parameters in Functions",
				"topicURL": ""
			}, {
				"topicName": "7.5 Function Arguments",
				"topicURL": ""
			}, {
				"topicName": "7.6 Anonymous Fu",
				"topicURL": ""
			}, {
				"topicName": "7.7 The return Statement",
				"topicURL": ""
			}, {
				"topicName": "7.8 Scope of Variables",
				"topicURL": ""
			}, {
				"topicName": "7.9 Functions using libraries",
				"topicURL": ""
			}, {
				"topicName": "7.10 Python recursive functions",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Creating Strings",
				"topicURL": ""
			}, {
				"topicName": "8.3 Accessing characters in a String",
				"topicURL": ""
			}, {
				"topicName": "8.4 Modifying and Deleting Strings",
				"topicURL": ""
			}, {
				"topicName": "8.5 String Operators",
				"topicURL": ""
			}, {
				"topicName": "8.6 String Formatting Operators",
				"topicURL": ""
			}, {
				"topicName": "8.7 Formatting characters",
				"topicURL": ""
			}, {
				"topicName": "8.8 The format( ) function",
				"topicURL": ""
			}, {
				"topicName": "8.9 Built-in String fun",
				"topicURL": ""
			}, {
				"topicName": "8.10 Membership Operators",
				"topicURL": ""
			}, {
				"topicName": "8.11 Programs using Strings",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction to List",
				"topicURL": ""
			}, {
				"topicName": "9.2 Tuples",
				"topicURL": ""
			}, {
				"topicName": "9.3 Sets",
				"topicURL": ""
			}, {
				"topicName": "9.4 Dictionaries",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Defining classes",
				"topicURL": ""
			}, {
				"topicName": "10.3 Creating Objects",
				"topicURL": ""
			}, {
				"topicName": "10.4 Accessing Class Members",
				"topicURL": ""
			}, {
				"topicName": "10.5 Class Methods",
				"topicURL": ""
			}, {
				"topicName": "10.6 Constructor and Destructor in Python",
				"topicURL": ""
			}, {
				"topicName": "10.7 Public and Private Data Members",
				"topicURL": ""
			}, {
				"topicName": "10.8 Sample Programs to illustrate classes and objects",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Data",
				"topicURL": ""
			}, {
				"topicName": "11.2 Information",
				"topicURL": ""
			}, {
				"topicName": "11.3 Data Base Management System (DBMS)",
				"topicURL": ""
			}, {
				"topicName": "11.5 Database Structure",
				"topicURL": ""
			}, {
				"topicName": "11.6 Data Model",
				"topicURL": ""
			}, {
				"topicName": "11.7 Difference between DBMS and RDBMS",
				"topicURL": ""
			}, {
				"topicName": "11.8 Types of Relationships",
				"topicURL": ""
			}, {
				"topicName": "11.9 Relational Algebra in DBMS",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Introduction to SQL",
				"topicURL": ""
			}, {
				"topicName": "12.2 Role of SQL in RDBMS",
				"topicURL": ""
			}, {
				"topicName": "12.3 Processing Skills of SQL",
				"topicURL": ""
			}, {
				"topicName": "12.4 Creating Database",
				"topicURL": ""
			}, {
				"topicName": "12.5 Components of SQL",
				"topicURL": ""
			}, {
				"topicName": "12.6 Data Types",
				"topicURL": ""
			}, {
				"topicName": "12.7 SQL Commands and their Functions",
				"topicURL": ""
			}],
			"13": [{
				"topicName": "13.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "13.2 Difference between CSV and XLS file formats",
				"topicURL": ""
			}, {
				"topicName": "13.3 Purpose Of CSV File",
				"topicURL": ""
			}, {
				"topicName": "13.4 Creating a CSV file using Notepad (or any text editor)",
				"topicURL": ""
			}, {
				"topicName": "13.5 Create A CSV File Using Microsoft Excel",
				"topicURL": ""
			}, {
				"topicName": "13.6 Read and write a CSV file Using Pyt",
				"topicURL": ""
			}, {
				"topicName": "13.7 Writing Data Into Different Types in Csv Files",
				"topicURL": ""
			}],
			"14": [{
				"topicName": "14.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "14.2 Scripting Language",
				"topicURL": ""
			}, {
				"topicName": "14.2.1 Difference between Scripting and Programming Languages",
				"topicURL": ""
			}, {
				"topicName": "14.3 Applications of Scripting Languages",
				"topicURL": ""
			}, {
				"topicName": "14.4 Features of Python over C++",
				"topicURL": ""
			}, {
				"topicName": "14.5 Importing C++ Files in Pythona",
				"topicURL": ""
			}, {
				"topicName": "14.5.1 MinGW Interface",
				"topicURL": ""
			}, {
				"topicName": "14.5.2 Executing C++ Program through Python",
				"topicURL": ""
			}, {
				"topicName": "14.6 Python Program to import C++",
				"topicURL": ""
			}, {
				"topicName": "14.7 Python program Executing C++ Program using control statement",
				"topicURL": ""
			}, {
				"topicName": "14.8 How Python is handling the errors in C++",
				"topicURL": ""
			}, {
				"topicName": "14.9 Python program Executing C++ Program Containing Arrays",
				"topicURL": ""
			}, {
				"topicName": "14.10 Python program Executing C++ Program Containing Functions",
				"topicURL": ""
			}, {
				"topicName": "14.11 Python program to Illustrate the inheritance of a Class",
				"topicURL": ""
			}],
			"15": [{
				"topicName": "15.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "15.2 SQLite",
				"topicURL": ""
			}, {
				"topicName": "15.3 Creating a Database using SQL",
				"topicURL": ""
			}, {
				"topicName": "15.4 SQL Query Using P",
				"topicURL": ""
			}, {
				"topicName": "15.5 The SQL AND, OR and NOT Oper",
				"topicURL": ""
			}, {
				"topicName": "15.6 Querying A Date Column",
				"topicURL": ""
			}, {
				"topicName": "15.7 Aggregate Function",
				"topicURL": ""
			}, {
				"topicName": "15.8 Updating A Re",
				"topicURL": ""
			}, {
				"topicName": "15.9 Deletion Operation",
				"topicURL": ""
			}, {
				"topicName": "15.10 Data input by User",
				"topicURL": ""
			}, {
				"topicName": "15.11 Using Multiple Table for Querying",
				"topicURL": ""
			}, {
				"topicName": "15.12 Integrating Query With Csv File",
				"topicURL": ""
			}, {
				"topicName": "15.13 Table List",
				"topicURL": ""
			}],
			"16": [{
				"topicName": "16.1 Data Visualization Definition",
				"topicURL": ""
			}, {
				"topicName": "16.2 Getting Started",
				"topicURL": ""
			}, {
				"topicName": "16.3 Special Plot Types",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Asexual and Sexual Reproduction in Plants", "Classical Genetics", "Chromosomal Basis of Inheritance", "Principles and Processes of Biotechnology", "Plant Tissue Culture", "Principles of Ecology", "Ecosystem", "Environmental Issues", "Plant Breeding", "Economically Useful Plants and  Entrepreneurial Botany"],
		"className": "class12th",
		"subject": "botany",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Asexual Reproduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Vegetative reproduction",
				"topicURL": ""
			}, {
				"topicName": "1.3 Sexual Reproduction",
				"topicURL": ""
			}, {
				"topicName": "1.4 Pre-fertilization structure and Events",
				"topicURL": ""
			}, {
				"topicName": "1.5 Fertilization",
				"topicURL": ""
			}, {
				"topicName": "1.6 Post Fertilization structure and events",
				"topicURL": ""
			}, {
				"topicName": "1.7 Apomixis",
				"topicURL": ""
			}, {
				"topicName": "1.8 Polyembryony",
				"topicURL": ""
			}, {
				"topicName": "1.9 Parthenocarpy",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Heredity and variation",
				"topicURL": ""
			}, {
				"topicName": "2.2 Mendelism",
				"topicURL": ""
			}, {
				"topicName": "2.3 Monohybrid cross",
				"topicURL": ""
			}, {
				"topicName": "2.4 Intragenic gene interactions",
				"topicURL": ""
			}, {
				"topicName": "2.5 Intergenic gene interactions",
				"topicURL": ""
			}, {
				"topicName": "2.6 Polygenic Inheritance in Wheat (Kernel colour)",
				"topicURL": ""
			}, {
				"topicName": "2.7 Extra Chromosomal Inheritance or  Extra Nuclear Inheritance (Cytoplasmic Inheritance) DNA is the universal genetic material",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Chromosomal Theory of Inheritance",
				"topicURL": ""
			}, {
				"topicName": "3.2 Linkage",
				"topicURL": ""
			}, {
				"topicName": "3.3 Crossing Over",
				"topicURL": ""
			}, {
				"topicName": "3.4 Multiple alleles",
				"topicURL": ""
			}, {
				"topicName": "3.5 Sex determination in plants",
				"topicURL": ""
			}, {
				"topicName": "3.6 Mutation",
				"topicURL": ""
			}, {
				"topicName": "3.7 DNA Metabolism in Plants",
				"topicURL": ""
			}, {
				"topicName": "3.8 Protein synthesis in plants",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Development of Biotechnology",
				"topicURL": ""
			}, {
				"topicName": "4.2 Historical Perspective",
				"topicURL": ""
			}, {
				"topicName": "4.3 Traditional Biotechnology",
				"topicURL": ""
			}, {
				"topicName": "4.4 Advancements in Modern Biotechnology",
				"topicURL": ""
			}, {
				"topicName": "4.5 Tools for Genetic Engineering",
				"topicURL": ""
			}, {
				"topicName": "4.6 Methods of Gene Transfer",
				"topicURL": ""
			}, {
				"topicName": "4.7 Screening for Recombinants",
				"topicURL": ""
			}, {
				"topicName": "4.8 Transgenic Plants / Genetically Modified Crops (Gm Crops)",
				"topicURL": ""
			}, {
				"topicName": "4.9 Applications of Biotechnology",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Milestones in Plant Tissue Culture",
				"topicURL": ""
			}, {
				"topicName": "5.2 Basic concepts of Tissue Culture",
				"topicURL": ""
			}, {
				"topicName": "5.3 Plant Tissue Culture (PTC)",
				"topicURL": ""
			}, {
				"topicName": "5.4 Plant Regeneration Pathway",
				"topicURL": ""
			}, {
				"topicName": "5.5 Applications of Plant Tissue Culture",
				"topicURL": ""
			}, {
				"topicName": "5.6 Conservation of plant genetic resources",
				"topicURL": ""
			}, {
				"topicName": "5.7 Intellectual Property Right (IPR)",
				"topicURL": ""
			}, {
				"topicName": "5.8 Future of Biotechnology",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Ecology",
				"topicURL": ""
			}, {
				"topicName": "6.2 Ecological factors",
				"topicURL": ""
			}, {
				"topicName": "6.3 Ecological adaptations",
				"topicURL": ""
			}, {
				"topicName": "6.4 Dispersal of Fruits and Seeds",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Structure of ecosystem",
				"topicURL": ""
			}, {
				"topicName": "7.2 Functions of ecosystem",
				"topicURL": ""
			}, {
				"topicName": "7.3 Plant Succession",
				"topicURL": ""
			}, {
				"topicName": "7.4 Vegetation",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Green House effect and Global warming",
				"topicURL": ""
			}, {
				"topicName": "8.2 Forestry",
				"topicURL": ""
			}, {
				"topicName": "8.3 Deforestation",
				"topicURL": ""
			}, {
				"topicName": "8.4 Afforestation",
				"topicURL": ""
			}, {
				"topicName": "8.5 Agrochemicals and their effects",
				"topicURL": ""
			}, {
				"topicName": "8.6 Alien invasive species",
				"topicURL": ""
			}, {
				"topicName": "8.7 Conservation",
				"topicURL": ""
			}, {
				"topicName": "8.8 Carbon Capture and Storage (CCS)",
				"topicURL": ""
			}, {
				"topicName": "8.9 Rain water harvesting \u2013 RWH (Solution to water crisis \u2013 A ecological problem)",
				"topicURL": ""
			}, {
				"topicName": "8.10 Sewage disposal",
				"topicURL": ""
			}, {
				"topicName": "8.11 Environmental Impact Assessment (EIA)",
				"topicURL": ""
			}, {
				"topicName": "8.12. Geographic Information System",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Relationship between humans and plants",
				"topicURL": ""
			}, {
				"topicName": "9.2 Domestication of plants",
				"topicURL": ""
			}, {
				"topicName": "9.3 Origin of Agriculture",
				"topicURL": ""
			}, {
				"topicName": "9.4 History of Agriculture",
				"topicURL": ""
			}, {
				"topicName": "9.5 Organic Agriculture",
				"topicURL": ""
			}, {
				"topicName": "9.6 Plant Breeding",
				"topicURL": ""
			}, {
				"topicName": "9.7 Conventional Plant Breeding Methods",
				"topicURL": ""
			}, {
				"topicName": "9.8 Modern Plant Breeding",
				"topicURL": ""
			}, {
				"topicName": "9.9 Seed Protection",
				"topicURL": ""
			}, {
				"topicName": "9.10 Seed Storage",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Food plants",
				"topicURL": ""
			}, {
				"topicName": "10.2 Spices and Condiments",
				"topicURL": ""
			}, {
				"topicName": "10.3 Fibres",
				"topicURL": ""
			}, {
				"topicName": "10.4 Timber",
				"topicURL": ""
			}, {
				"topicName": "10.5 Latex",
				"topicURL": ""
			}, {
				"topicName": "10.6 Pulp Wood",
				"topicURL": ""
			}, {
				"topicName": "10.7 Dyes",
				"topicURL": ""
			}, {
				"topicName": "10.8 Cosmetics",
				"topicURL": ""
			}, {
				"topicName": "10.9 Traditional Systems of Medicines",
				"topicURL": ""
			}, {
				"topicName": "10.10 Medicinal Plants",
				"topicURL": ""
			}, {
				"topicName": "10.11 Entrepreneurial Botany",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Introduction to Macro Economics", "National Income", "Theories of Employment and Income", "Consumption And Investment Functions", "Monetary Economics", "Banking", "International Economics", "International Economic Organisations", "Fiscal Economics", "Environmental Economics", "Economics of Development and Planning", "Introduction to Statistical Methods and Econometrics"],
		"className": "class12th",
		"subject": "economics",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Meaning of Macro Economics",
				"topicURL": ""
			}, {
				"topicName": "1.3 There is a need to understand the functioning",
				"topicURL": ""
			}, {
				"topicName": "1.4 Scope of Macro Economics",
				"topicURL": ""
			}, {
				"topicName": "1.5 Limitations",
				"topicURL": ""
			}, {
				"topicName": "1.6 Economy and its Types",
				"topicURL": ""
			}, {
				"topicName": "1.7 Economic Systems",
				"topicURL": ""
			}, {
				"topicName": "1.8 Concepts of Macro Economics",
				"topicURL": ""
			}, {
				"topicName": "1.9 Circular Flow of Income",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "2.2 Meaning of National Income",
				"topicURL": ""
			}, {
				"topicName": "2.3 Definitions",
				"topicURL": ""
			}, {
				"topicName": "2.4 Basic concepts of national income",
				"topicURL": ""
			}, {
				"topicName": "2.5 Methods of Measuring National Income",
				"topicURL": ""
			}, {
				"topicName": "2.6 Importance of National Income Analysis",
				"topicURL": ""
			}, {
				"topicName": "2.7 Difficulties in Measuring National Income",
				"topicURL": ""
			}, {
				"topicName": "2.8 National Income and Social Accounting",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Meaning of Full Employment",
				"topicURL": ""
			}, {
				"topicName": "3.3 Unemployment and its types",
				"topicURL": ""
			}, {
				"topicName": "3.4 Classical Theory of Employment",
				"topicURL": ""
			}, {
				"topicName": "3.5 Keynes' Theory of Employment and Income",
				"topicURL": ""
			}, {
				"topicName": "3.6 Effective Demand",
				"topicURL": ""
			}, {
				"topicName": "3.7 Comparison of Classicism and Keynesianism",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "4.2 Consumption Function",
				"topicURL": ""
			}, {
				"topicName": "4.3 Investment Function",
				"topicURL": ""
			}, {
				"topicName": "4.4 Multiplier",
				"topicURL": ""
			}, {
				"topicName": "4.5 The Accelerator Principle",
				"topicURL": ""
			}, {
				"topicName": "4.6 Super Multiplier: (k and \u03b2 interaction)",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "5.2 Money",
				"topicURL": ""
			}, {
				"topicName": "5.3 Supply of Money",
				"topicURL": ""
			}, {
				"topicName": "5.4 Quantity Theories of Money",
				"topicURL": ""
			}, {
				"topicName": "5.5 Inflation",
				"topicURL": ""
			}, {
				"topicName": "5.6 Meaning of Deflation Disinflation and Stagflation",
				"topicURL": ""
			}, {
				"topicName": "5.7 Trade Cycle",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Historical Development",
				"topicURL": ""
			}, {
				"topicName": "6.3 Commercial banks",
				"topicURL": ""
			}, {
				"topicName": "6.4 Non-Banking Financial Institution (NBFI)",
				"topicURL": ""
			}, {
				"topicName": "6.5 Central Bank",
				"topicURL": ""
			}, {
				"topicName": "6.6 The Agricultural Refinance Development Corporation (ARDC)",
				"topicURL": ""
			}, {
				"topicName": "6.7 Regional Rural Banks (RRBs)",
				"topicURL": ""
			}, {
				"topicName": "6.8 NABARD and its role in Agricultural credit",
				"topicURL": ""
			}, {
				"topicName": "6.9 Reserve bank of India and industrial finance",
				"topicURL": ""
			}, {
				"topicName": "6.10 Monetary Policy",
				"topicURL": ""
			}, {
				"topicName": "6.11 Recent Advancements in Banking Sector",
				"topicURL": ""
			}, {
				"topicName": "6.12 Money Market",
				"topicURL": ""
			}, {
				"topicName": "6.13 Capital Market",
				"topicURL": ""
			}, {
				"topicName": "6.14 Demonetisation",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Meaning of International Economics",
				"topicURL": ""
			}, {
				"topicName": "7.3 Subject Matter of International Economics",
				"topicURL": ""
			}, {
				"topicName": "7.4 Meaning of Trade",
				"topicURL": ""
			}, {
				"topicName": "7.5 Theories of International Trade",
				"topicURL": ""
			}, {
				"topicName": "7.6 Gains from International Trade",
				"topicURL": ""
			}, {
				"topicName": "7.7 Terms of Trade",
				"topicURL": ""
			}, {
				"topicName": "7.8 Balance of Trade Vs Balance of Payments",
				"topicURL": ""
			}, {
				"topicName": "7.9 Exchange Rate",
				"topicURL": ""
			}, {
				"topicName": "7.10 Foreign Direct Investment (FDI) and Trade",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 International Monetary Fund",
				"topicURL": ""
			}, {
				"topicName": "8.3 International Bank For Reconstruction And Development (IBRD) or World Bank",
				"topicURL": ""
			}, {
				"topicName": "8.4 World Trade Organization",
				"topicURL": ""
			}, {
				"topicName": "8.5 Trade Blocks",
				"topicURL": ""
			}, {
				"topicName": "8.6 South Asian Association For Regional Co-Operation (SAARC)",
				"topicURL": ""
			}, {
				"topicName": "8.7 Association of South East Asian Nations (ASEAN)",
				"topicURL": ""
			}, {
				"topicName": "8.8 BRICS",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Meaning of Public Finance",
				"topicURL": ""
			}, {
				"topicName": "9.3 Definitions",
				"topicURL": ""
			}, {
				"topicName": "9.4 Subject Matter / Scope of Public Finance",
				"topicURL": ""
			}, {
				"topicName": "9.5 Public finance and Private finance",
				"topicURL": ""
			}, {
				"topicName": "9.6 Functions of Modern State",
				"topicURL": ""
			}, {
				"topicName": "9.7 Public Expenditure",
				"topicURL": ""
			}, {
				"topicName": "9.8 Public Revenue",
				"topicURL": ""
			}, {
				"topicName": "9.9 Tax Revenue",
				"topicURL": ""
			}, {
				"topicName": "9.10 Public Debt",
				"topicURL": ""
			}, {
				"topicName": "9.11 Budget",
				"topicURL": ""
			}, {
				"topicName": "9.12 Federal Finance",
				"topicURL": ""
			}, {
				"topicName": "9.13 History of Finance Commission",
				"topicURL": ""
			}, {
				"topicName": "9.14 Local Finance",
				"topicURL": ""
			}, {
				"topicName": "9.15 Fiscal policy",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Meaning of Environment",
				"topicURL": ""
			}, {
				"topicName": "10.3 Eco System",
				"topicURL": ""
			}, {
				"topicName": "10.4 Linkage between Economy and Environment",
				"topicURL": ""
			}, {
				"topicName": "10.5 Environmental Goods",
				"topicURL": ""
			}, {
				"topicName": "10.6 Environmental Environmental",
				"topicURL": ""
			}, {
				"topicName": "10.7 Pollution",
				"topicURL": ""
			}, {
				"topicName": "10.8 Global Warming",
				"topicURL": ""
			}, {
				"topicName": "10.9 Climate Change",
				"topicURL": ""
			}, {
				"topicName": "10.10 Acid Rain",
				"topicURL": ""
			}, {
				"topicName": "10.11 e-Wastes",
				"topicURL": ""
			}, {
				"topicName": "10.12 Sustainable Development",
				"topicURL": ""
			}, {
				"topicName": "10.13 Green Initiatives",
				"topicURL": ""
			}, {
				"topicName": "10.14 Organic Farming",
				"topicURL": ""
			}, {
				"topicName": "10.15 Tree Plantation",
				"topicURL": ""
			}, {
				"topicName": "10.16 Seed Ball",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Meaning of Development and Underdevelopment",
				"topicURL": ""
			}, {
				"topicName": "11.2 Economic Growth Vs Economic Development",
				"topicURL": ""
			}, {
				"topicName": "11.3 Measurement of Economic Development",
				"topicURL": ""
			}, {
				"topicName": "11.4 Determinants of Economic Development",
				"topicURL": ""
			}, {
				"topicName": "11.5 Economic and Non-Economic Factors",
				"topicURL": ""
			}, {
				"topicName": "11.6 Vicious Circle of Poverty",
				"topicURL": ""
			}, {
				"topicName": "11.7 Planning",
				"topicURL": ""
			}, {
				"topicName": "11.8 Types of planning",
				"topicURL": ""
			}, {
				"topicName": "11.9 NITI Aayog",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Etymology and Milestones of Statistics in Global Level",
				"topicURL": ""
			}, {
				"topicName": "12.2 Evolution of Statistics in India",
				"topicURL": ""
			}, {
				"topicName": "12.3 Definitions of Statistics",
				"topicURL": ""
			}, {
				"topicName": "12.4 Characteristics and Functions of Statistics",
				"topicURL": ""
			}, {
				"topicName": "12.5 Nature of Statistics",
				"topicURL": ""
			}, {
				"topicName": "12.6 Scope of Statistics",
				"topicURL": ""
			}, {
				"topicName": "12.7 Limitations of statistics",
				"topicURL": ""
			}, {
				"topicName": "12.8 Types of Statistics",
				"topicURL": ""
			}, {
				"topicName": "12.9 Data",
				"topicURL": ""
			}, {
				"topicName": "12.10 Arithmetic mean or mean ( )",
				"topicURL": ""
			}, {
				"topicName": "12.11 Standard Deviation",
				"topicURL": ""
			}, {
				"topicName": "12.12 Correlation",
				"topicURL": ""
			}, {
				"topicName": "12.13 Regression",
				"topicURL": ""
			}, {
				"topicName": "12.14 Introduction To Econometrics",
				"topicURL": ""
			}, {
				"topicName": "12.15 Official Statistics",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Rise of Nationalism in India", "Rise of Extremism and Swadeshi movement", "Impact of World War I on Indian Freedom Movement", "Advent of Gandhi and Mas Mobilisation", "Perod of radicalism in Anti-imperialist Struggles", "Religion in Nationalist Politics", "Last Phase of Indian National Movemnt ", "Reconstruction of Post Colonial India", "Envisioning a New Socio Economic oreder", "Modern World: The Age of Reason", "The Age of Revolutions", "Europe in Turmoil", "Imperialism and its Onslaught", "Outbreak of World War II and its Impact in Colonies", "The World after World War II"],
		"className": "class12th",
		"subject": "history",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Socio - economicBackground",
				"topicURL": ""
			}, {
				"topicName": "1.2 Western Education and its Impact",
				"topicURL": ""
			}, {
				"topicName": "1.3 Social and Religious Reforms",
				"topicURL": ""
			}, {
				"topicName": "1.4 Other decisive Factors for the Rise of Nationalism",
				"topicURL": ""
			}, {
				"topicName": "1.5 Birth of Indian Associations",
				"topicURL": ""
			}, {
				"topicName": "1.6 Naoroji and his drain Theory",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Partition of Bengal",
				"topicURL": ""
			}, {
				"topicName": "2.2 Anti - Partition Movement",
				"topicURL": ""
			}, {
				"topicName": "2.3 Boycott and Swadeshi Movements in Bengal(1905-1911)",
				"topicURL": ""
			}, {
				"topicName": "2.4 Militant Nationalism",
				"topicURL": ""
			}, {
				"topicName": "2.5 Revolutionary Extremism",
				"topicURL": ""
			}, {
				"topicName": "2.6 SwadeshiCampaign in TamilNadu",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 All India Home Rule League",
				"topicURL": ""
			}, {
				"topicName": "3.2 Impact of the War",
				"topicURL": ""
			}, {
				"topicName": "3.3 Provisions of the Lucknow Pact",
				"topicURL": ""
			}, {
				"topicName": "3.4 repressive Measures of the Colonial State",
				"topicURL": ""
			}, {
				"topicName": "3.5 The defence of India Act,1915",
				"topicURL": ""
			}, {
				"topicName": "3.6 Khilafat Movement",
				"topicURL": ""
			}, {
				"topicName": "3.7Rise of Labour Movement",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Gandhi's Experiments of Sayagraha",
				"topicURL": ""
			}, {
				"topicName": "4.2 Montagu-chelmsford Reforms",
				"topicURL": ""
			}, {
				"topicName": "4.3 The Non-Brahmin Movemnt",
				"topicURL": ""
			}, {
				"topicName": "4.4 Non-cooperation Movemnet",
				"topicURL": ""
			}, {
				"topicName": "4.5 Swarajist Party and its Activities",
				"topicURL": ""
			}, {
				"topicName": "4.6 Simon Commism-Nehru Report-Lahore Congress",
				"topicURL": ""
			}, {
				"topicName": "4.7 The Round Table Conferences",
				"topicURL": ""
			}, {
				"topicName": "4.8 Emergence of Dr.B.R.Ambedkar and the Separate Electrotes",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.1 Kanpur Conspiracy case,1924",
				"topicURL": ""
			}, {
				"topicName": "5.2 Meerut Conspiracy case,1929",
				"topicURL": ""
			}, {
				"topicName": "5.3 Bhagat singh and Kalpana Dutt",
				"topicURL": ""
			}, {
				"topicName": "5.4 Karachi Session of the Indian National Congress,1931 ",
				"topicURL": ""
			}, {
				"topicName": "5.5 The Great Depression and its Impact of India",
				"topicURL": ""
			}, {
				"topicName": "5.6 Industrial Developemnt in India",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.1 Origin and Growth of communalism in British India",
				"topicURL": ""
			}, {
				"topicName": "6.2 Formation of All india Muslim league",
				"topicURL": ""
			}, {
				"topicName": "6.3 Emergence of the All india hindu Mahasabha",
				"topicURL": ""
			}, {
				"topicName": "6.4 First Congress ministries",
				"topicURL": ""
			}, {
				"topicName": "6.5 Observation of Day of Deliverance",
				"topicURL": ""
			}, {
				"topicName": "6.6 Direct Action Day",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Cripps Mission",
				"topicURL": ""
			}, {
				"topicName": "7.2 Quit India Movemt ",
				"topicURL": ""
			}, {
				"topicName": "7.3 Netaji Subhas Chandra Bose and the INA",
				"topicURL": ""
			}, {
				"topicName": "7.4 The Royal Indian Navy Revolt",
				"topicURL": ""
			}, {
				"topicName": "7.5 Rajaji Proposals and the Wavell Plan",
				"topicURL": ""
			}, {
				"topicName": "7.6 Mountbatten Plan",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Consequences of Partition",
				"topicURL": ""
			}, {
				"topicName": "8.2 Making of the Constitution",
				"topicURL": ""
			}, {
				"topicName": "8.3 Merger of Princely States",
				"topicURL": ""
			}, {
				"topicName": "8.4 Linguistic Reorganization of States",
				"topicURL": ""
			}, {
				"topicName": "8.5 India's Foreign Policy",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Land Reforms and Rural Reconstruction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Developement of Agriculture",
				"topicURL": ""
			}, {
				"topicName": "9.3 Developemnt of Industry",
				"topicURL": ""
			}, {
				"topicName": "9.4 Five Year Plans",
				"topicURL": ""
			}, {
				"topicName": "9.5 Education,Science and Technology",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Renaissance in Italy and its Spread in Western Europe",
				"topicURL": ""
			}, {
				"topicName": "10.2 Discovery of New Sea Routes to the East",
				"topicURL": ""
			}, {
				"topicName": "10.3 Commercial Revolution",
				"topicURL": ""
			}, {
				"topicName": "10.4 Protestant Reformation and Catholic Counter Reformation",
				"topicURL": ""
			}, {
				"topicName": "10.5 Rise of New Monarchies/ Nation-States",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 The American War of Independence",
				"topicURL": ""
			}, {
				"topicName": "11.2 The French Revolution",
				"topicURL": ""
			}, {
				"topicName": "11.3 Revolution in Latin America",
				"topicURL": ""
			}, {
				"topicName": "11.4 Industrial Revolution",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Rise of New Monarchies/ Nation-States",
				"topicURL": ""
			}],
			"13": [{
				"topicName": "13.1 Rise of Imperialism",
				"topicURL": ""
			}, {
				"topicName": "13.2 Scramble for Colonies and Road to War ",
				"topicURL": ""
			}, {
				"topicName": "13.3 World War I",
				"topicURL": ""
			}, {
				"topicName": "13.4 Russian Revolution and its Impactt",
				"topicURL": ""
			}, {
				"topicName": "13.5 League of Nations",
				"topicURL": ""
			}, {
				"topicName": "13.6 The Great Depression",
				"topicURL": ""
			}, {
				"topicName": "13.7 Rise of Fascism and Nazism",
				"topicURL": ""
			}],
			"14": [{
				"topicName": "14.1 Second World War: Causes",
				"topicURL": ""
			}, {
				"topicName": "14.2 Chinese Revolution, 1949",
				"topicURL": ""
			}, {
				"topicName": "14.3 Liberation Struggles in Indonesia and Philippines",
				"topicURL": ""
			}],
			"15": [{
				"topicName": "15.1 Post-War Conditions in Europe",
				"topicURL": ""
			}, {
				"topicName": "15.2 Cold War",
				"topicURL": ""
			}, {
				"topicName": "15.3 Third World Countries and Non-Alignment",
				"topicURL": ""
			}, {
				"topicName": "15.4 UNO and Global Disputes",
				"topicURL": ""
			}, {
				"topicName": "15.5 Consolidation and Expansion of European Community",
				"topicURL": ""
			}]
		}
	}, {
		"unitNames": ["Principles of Managment", "Functions Of Management", "Managment by Objectives and managment by exception", "Introduction to financial Markets", "Capital Market", "Money Market", "Stock Exchange", "Securities exchange board of India(SEBI)", "Fundamentals of HRM", "Recruitment Methods", "Employee selection process", "Employee Training Method", "Concept of Market and Marketer", "Marketing and Marketing Mix", "Recent Trends in Marketing", "Consumerism", "Rights, Duties and responsibilities of consumers", "Grievance Redressal Mechanism", "Environmental factors", "Liberalization, Privatization and Globalization", "The sale of Goos act ,1930", "The Negotiable instruments act 1881", "Elements of Entrepreneurships", "Types of Entrepreneurs", "Government Schemes for Entrepreneurial Development", "Companies Act 2013", "Company Management", "Company Secretary"],
		"className": "class12th",
		"subject": "commerce",
		"unitTopics": {
			"1": [{
				"topicName": "1.01 Concept of Management ",
				"topicURL": ""
			}, {
				"topicName": "1.02 Definitions of Management",
				"topicURL": ""
			}, {
				"topicName": "1.03 Management Vs. Administration",
				"topicURL": ""
			}, {
				"topicName": "1.04 Management Process  1.0",
				"topicURL": ""
			}, {
				"topicName": "1.05 Principles of Scientific Management",
				"topicURL": ""
			}, {
				"topicName": "1.06 Principles of Modern Management",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.01 Main Functions",
				"topicURL": ""
			}, {
				"topicName": "2.02 Subsidiary Functions",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.01 Meaning and Definition of MBO",
				"topicURL": ""
			}, {
				"topicName": "3.02 Objectives of MBO",
				"topicURL": ""
			}, {
				"topicName": "3.03 Features of MBO",
				"topicURL": ""
			}, {
				"topicName": "3.04 Process of MBO",
				"topicURL": ""
			}, {
				"topicName": "3.05 Advantages of MBO  ",
				"topicURL": ""
			}, {
				"topicName": "3.06 Disadvantages of MBO",
				"topicURL": ""
			}, {
				"topicName": "3.07 Meaning of MBE",
				"topicURL": ""
			}, {
				"topicName": "3.08 Process of MBE",
				"topicURL": ""
			}, {
				"topicName": "3.09 Advantages of MBE",
				"topicURL": ""
			}, {
				"topicName": "3.10 Disadvantages of MBE",
				"topicURL": ""
			}],
			"4": [{
				"topicName": " 4.01 Meaning and Definition of Financial Market",
				"topicURL": ""
			}, {
				"topicName": "4.02 Scope of Indian Financial Market",
				"topicURL": ""
			}, {
				"topicName": "4.03 Types of Financial Markets",
				"topicURL": ""
			}, {
				"topicName": "4.04 Role of Financial Market",
				"topicURL": ""
			}, {
				"topicName": "4.05 Functions of Financial Market",
				"topicURL": ""
			}, {
				"topicName": "4.06 New Issue Market (NIM) Vs. Secondary Market",
				"topicURL": ""
			}],
			"5": [{
				"topicName": "5.01 Meaning and Definition",
				"topicURL": ""
			}, {
				"topicName": "5.02 Characteristics of Capital Market",
				"topicURL": ""
			}, {
				"topicName": "5.03 Kinds of Capital Market",
				"topicURL": ""
			}, {
				"topicName": "5.04 Functions and Importance of Capital Market",
				"topicURL": ""
			}, {
				"topicName": "5.05 Indian Capital Market \u2013 Evolution and Growth",
				"topicURL": ""
			}],
			"6": [{
				"topicName": "6.01 Meaning and Definition",
				"topicURL": ""
			}, {
				"topicName": "6.02 Characteristics",
				"topicURL": ""
			}, {
				"topicName": "6.03 Difference between Capital Market and Money Market",
				"topicURL": ""
			}, {
				"topicName": "6.04 Parti1cipants in Money Market",
				"topicURL": ""
			}, {
				"topicName": "6.05.01 Treasury Bills",
				"topicURL": ""
			}, {
				"topicName": "6.05.02 Certificate of Deposit",
				"topicURL": ""
			}, {
				"topicName": "6.05.03 Commercial Bills",
				"topicURL": ""
			}, {
				"topicName": "6.05.04 Government or Gilt-Edged Securities Market.",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.01 Stock Exchange \u2013 Origin, Meaning and Definition",
				"topicURL": ""
			}, {
				"topicName": "7.02 Functions of Stock Exchange",
				"topicURL": ""
			}, {
				"topicName": "7.03 Features of Stock Exchange ",
				"topicURL": ""
			}, {
				"topicName": "7.04 Benefits and Limitations of Stock",
				"topicURL": ""
			}, {
				"topicName": "7.05 Stock Exchanges in India",
				"topicURL": ""
			}, {
				"topicName": "7.06 Types of Speculators  ",
				"topicURL": ""
			}, {
				"topicName": "7.07 Stock Exchange Vs. Commodity Exchange",
				"topicURL": ""
			}, {
				"topicName": "7.08 Recent Development in Stock Exchange",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.01 Introduction of SEBI",
				"topicURL": ""
			}, {
				"topicName": "8.02 Objectives 8.0of SEBI",
				"topicURL": ""
			}, {
				"topicName": "8.02 Objectives 8.0of SEBI",
				"topicURL": ""
			}, {
				"topicName": "8.04 Powers of SEBI",
				"topicURL": ""
			}, {
				"topicName": "8.05 Dematerialization",
				"topicURL": ""
			}, {
				"topicName": "8.06 Benefits of Dematerialization",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.01 Meaning and Definition of Human Resource",
				"topicURL": ""
			}, {
				"topicName": "9.02 Characteristics of Human Resource",
				"topicURL": ""
			}, {
				"topicName": "9.03 Significance of Human Resource",
				"topicURL": ""
			}, {
				"topicName": "9.04 Meaning and Definition of Human Resource  Management",
				"topicURL": ""
			}, {
				"topicName": "9.05 Nature and Features of Human Resource  Management",
				"topicURL": ""
			}, {
				"topicName": "9.06 Significance of Human Resource Management",
				"topicURL": ""
			}, {
				"topicName": "9.07 Functions of Human Resource Management",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.01 Meaning and Definition of Recruitment",
				"topicURL": ""
			}, {
				"topicName": "10.02 Recruitment Process",
				"topicURL": ""
			}, {
				"topicName": "10.03 Sources of Recruitment",
				"topicURL": ""
			}, {
				"topicName": "10.04 Recent Trends in Recruitment",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.01 Steps in Employee Selection Process",
				"topicURL": ""
			}, {
				"topicName": "11.02 Factors influencing Selection Process",
				"topicURL": ""
			}, {
				"topicName": " 11.03 Importance of Selection",
				"topicURL": ""
			}, {
				"topicName": "11.04 Selection differs from Recruitment",
				"topicURL": ""
			}, {
				"topicName": "11.05 Placement",
				"topicURL": ""
			}, {
				"topicName": "11.06 Significance of Placement",
				"topicURL": ""
			}, {
				"topicName": "11.07 Principles of Placement",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.01 Purpose of Training or Need for Training",
				"topicURL": ""
			}, {
				"topicName": "12.02 Steps in Designing a Training Programme ",
				"topicURL": ""
			}, {
				"topicName": "12.02 Steps in Designing a Training Programme ",
				"topicURL": ""
			}, {
				"topicName": "12.03 (ii) Off the Job Training",
				"topicURL": ""
			}, {
				"topicName": "12.04 Differences Between on the Job Training and off  the Job Training",
				"topicURL": ""
			}, {
				"topicName": "12.05 Steps in Designing a Training Programme",
				"topicURL": ""
			}],
			"13": [{
				"topicName": "13.01. Meaning and Definition of Market",
				"topicURL": ""
			}, {
				"topicName": "13.02. Need for Market",
				"topicURL": ""
			}, {
				"topicName": "13.03. Classification of Markets",
				"topicURL": ""
			}, {
				"topicName": "13.04. Meaning and Definition of Marketer",
				"topicURL": ""
			}, {
				"topicName": "13.05. What can be Marketed? ",
				"topicURL": ""
			}, {
				"topicName": "13.06. Role of a Marketer",
				"topicURL": ""
			}, {
				"topicName": "13.07. Functions of Marketer",
				"topicURL": ""
			}],
			"14": [{
				"topicName": "14.01. Introduction",
				"topicURL": ""
			}, {
				"topicName": "14.02 Evolution of Marketing",
				"topicURL": ""
			}, {
				"topicName": "14.03. Marketing Concepts",
				"topicURL": ""
			}, {
				"topicName": "14.04. Definition of Marketing",
				"topicURL": ""
			}, {
				"topicName": "14.05. Objectives of Marketing",
				"topicURL": ""
			}, {
				"topicName": "14.06. Importance of Marketing to the soceity",
				"topicURL": ""
			}, {
				"topicName": "14.07 Importance of Marketing to Individual Firms",
				"topicURL": ""
			}, {
				"topicName": "14.08  Functions of Marketing ",
				"topicURL": ""
			}, {
				"topicName": "14.09 Meaning and Definition of Marketing Mix ",
				"topicURL": ""
			}, {
				"topicName": "14.10 Elements of Marketing Mix ",
				"topicURL": ""
			}, {
				"topicName": "14.11 Marketing Mix Matrix",
				"topicURL": ""
			}],
			"15": [{
				"topicName": "15.01 Recent Trends in Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.02 E-Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.03 E-Tailing",
				"topicURL": ""
			}, {
				"topicName": "15.04 Green Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.05 Social Marketing  ",
				"topicURL": ""
			}, {
				"topicName": "15.06 Rural Marketing ",
				"topicURL": ""
			}, {
				"topicName": "15.07 Services Marketing ",
				"topicURL": ""
			}, {
				"topicName": "15.08 Commodity Exchanges ",
				"topicURL": ""
			}, {
				"topicName": "15.09 Niche Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.10 Viral Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.11 Ambush Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.12 Guerrilla Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.13 Multi Level Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.14 Referral Marketing",
				"topicURL": ""
			}, {
				"topicName": "15.15 Content Marketing",
				"topicURL": ""
			}],
			"16": [{
				"topicName": "16.01 Consumer",
				"topicURL": ""
			}, {
				"topicName": "16.02 Consumer Exploitation",
				"topicURL": ""
			}, {
				"topicName": "16.03 Consumerism and Need for Consumerism",
				"topicURL": ""
			}, {
				"topicName": "16.04 Importance of Consumerism ",
				"topicURL": ""
			}, {
				"topicName": "16.05 Origin, Evolution and Growth of Consumerism",
				"topicURL": ""
			}, {
				"topicName": "16.06 Consumer Protection",
				"topicURL": ""
			}, {
				"topicName": "16.07 Need for Consumer Protection",
				"topicURL": ""
			}, {
				"topicName": "16.08 Consume Legislation ",
				"topicURL": ""
			}, {
				"topicName": "16.09 The Consumer Protection Act 1986",
				"topicURL": ""
			}, {
				"topicName": "16.10 Caveat Emptor",
				"topicURL": ""
			}, {
				"topicName": "16.11 Caveat Venditor",
				"topicURL": ""
			}],
			"17": [{
				"topicName": "17.01 Duties of Consumers",
				"topicURL": ""
			}, {
				"topicName": "17.02 Consumer Responsibilities",
				"topicURL": ""
			}, {
				"topicName": "17.03 Consumer Rights",
				"topicURL": ""
			}],
			"18": [{
				"topicName": "18.01 Grievance and Need for Redressal Mechanism ",
				"topicURL": ""
			}, {
				"topicName": "18.02 Consumer Councils",
				"topicURL": ""
			}, {
				"topicName": "18.03 Three Tier Courts or Quasi Judiciary ",
				"topicURL": ""
			}, {
				"topicName": "18.04 District Forum ",
				"topicURL": ""
			}, {
				"topicName": "18.05 State Consumer Disputes Redressal  Commission or State Commission",
				"topicURL": ""
			}, {
				"topicName": "18.06 National Consumer Disputes Redressal  Commission (NCDRC) or National  Commission",
				"topicURL": ""
			}, {
				"topicName": "18.07 Voluntary Organizations for Consumer  Awareness",
				"topicURL": ""
			}],
			"19": [{
				"topicName": "19.01 Meaning and Definition of Business Environment ",
				"topicURL": ""
			}, {
				"topicName": "19.02 Types of Business Environment",
				"topicURL": ""
			}, {
				"topicName": "19.03 Future Environment of Business-VUCA",
				"topicURL": ""
			}, {
				"topicName": "19.04 Corporate Governance ",
				"topicURL": ""
			}, {
				"topicName": "19.05 Goods and Services Tax(GST)",
				"topicURL": ""
			}],
			"20": [{
				"topicName": "20.01 Dimensions of New Economic Policy ",
				"topicURL": ""
			}, {
				"topicName": "20.02 Dimensions of New Economic Policy ",
				"topicURL": ""
			}, {
				"topicName": "20.03 Advantages and disadvantages of Liberalisation",
				"topicURL": ""
			}, {
				"topicName": "20.04 Impact of Liberalisation",
				"topicURL": ""
			}, {
				"topicName": "20.05 Meaning and Forms of Privatisation",
				"topicURL": ""
			}, {
				"topicName": "20.06 Advantages and disadvantages of Privatisation",
				"topicURL": ""
			}, {
				"topicName": "20.07 Impact of Privatisation ",
				"topicURL": ""
			}, {
				"topicName": "20.08 Meaning and Forms of Globalisation ",
				"topicURL": ""
			}, {
				"topicName": "20.09 Advantages and disadvantages of Globalisation",
				"topicURL": ""
			}, {
				"topicName": "20.10 Impact of Globalisation",
				"topicURL": ""
			}, {
				"topicName": "20.11 Highlights of LPG policy",
				"topicURL": ""
			}],
			"21": [{
				"topicName": "21.01 Formation of Contract of Sale ",
				"topicURL": ""
			}, {
				"topicName": "21.02 Difference between Sale and Agreement to Sell ",
				"topicURL": ""
			}, {
				"topicName": "21.03 Types of Goods",
				"topicURL": ""
			}, {
				"topicName": "21.04 Transfer of Ownership",
				"topicURL": ""
			}, {
				"topicName": "21.05 Conditions and Warranties",
				"topicURL": ""
			}, {
				"topicName": "21.06 Rights of an Unpaid Seller",
				"topicURL": ""
			}],
			"22": [{
				"topicName": "22.01 Negotiable Instruments Meaning,  Characteristics, Assumptions",
				"topicURL": ""
			}, {
				"topicName": "22.02 Bills of Exchange, Cheque, Promissory Note, A  Comparison",
				"topicURL": ""
			}, {
				"topicName": "22.03 Crossing of Cheque",
				"topicURL": ""
			}, {
				"topicName": "22.04 Endorsements",
				"topicURL": ""
			}],
			"23": [{
				"topicName": "23.01 Entrepreneurship Concept, Meaning and  Definition",
				"topicURL": ""
			}, {
				"topicName": "23.02 Characteristics of Entrepreneur",
				"topicURL": ""
			}, {
				"topicName": "23.03 Importance of Entrepreneurship ",
				"topicURL": ""
			}, {
				"topicName": "23.04 Entrepreneur, Intrapreneur and Manager, A  Comparison",
				"topicURL": ""
			}, {
				"topicName": "23.05 Women Entrepreneurs, Opportunities and  Challenges ",
				"topicURL": ""
			}, {
				"topicName": "23.06 Entrepreneurial Functions",
				"topicURL": ""
			}],
			"24": [{
				"topicName": "24.01 Types of Entrepreneurs",
				"topicURL": ""
			}, {
				"topicName": "24.02 Classification According to Function",
				"topicURL": ""
			}, {
				"topicName": "24.03 Classification According to Type Of Business",
				"topicURL": ""
			}, {
				"topicName": "24.04 Classification Based on Technology Adopted ",
				"topicURL": ""
			}, {
				"topicName": " 24.05 Classification in terms of Motivation",
				"topicURL": ""
			}, {
				"topicName": " 24.06 Classification Based on Development Stage ",
				"topicURL": ""
			}, {
				"topicName": "24.07 Classification According to Area ",
				"topicURL": ""
			}, {
				"topicName": "24.08 Classification According to Owner- ship",
				"topicURL": ""
			}],
			"25": [{
				"topicName": "25.01 India's Efforts at Promoting Entrepreneurship  and Innovations ",
				"topicURL": ""
			}, {
				"topicName": "25.02 Specific Entrepreneurship Schemes",
				"topicURL": ""
			}, {
				"topicName": "25.03 Steps in Promoting an Entrepreneurial Venture ",
				"topicURL": ""
			}, {
				"topicName": "25.04 Entrepreneurial Schemes of Government of  Tamilnadu",
				"topicURL": ""
			}],
			"26": [{
				"topicName": "26.01 Evolution and History of Company Law in India ",
				"topicURL": ""
			}, {
				"topicName": "26.02 The Companies Act 2013 ",
				"topicURL": ""
			}, {
				"topicName": "26.03 Meaning and Definition of Body Corporate  (Company)",
				"topicURL": ""
			}, {
				"topicName": "26.04 Formation / Incorporation of Company",
				"topicURL": ""
			}, {
				"topicName": "26.05 Promoter ",
				"topicURL": ""
			}, {
				"topicName": "26.06 Procedural Aspects of Company Formation ",
				"topicURL": ""
			}, {
				"topicName": "26.07 Share and Share Capital",
				"topicURL": ""
			}, {
				"topicName": "26.08 Issue of Shares, Bonus Shares and Rights Shares",
				"topicURL": ""
			}, {
				"topicName": "26.09 Sharing Certificate and Share Warrant",
				"topicURL": ""
			}, {
				"topicName": "26.10 Shares and Stock",
				"topicURL": ""
			}, {
				"topicName": "26.11 Debentures",
				"topicURL": ""
			}],
			"27": [{
				"topicName": "27.01 Introduction, Meaning and Definition of  Director",
				"topicURL": ""
			}, {
				"topicName": "27.02 Key  Managerial Personnel of a Company",
				"topicURL": ""
			}, {
				"topicName": "27.03 Board of Directors",
				"topicURL": ""
			}, {
				"topicName": "27.04 Types of Directors as per Companies Act 2013",
				"topicURL": ""
			}, {
				"topicName": "27.05 Number of Directors",
				"topicURL": ""
			}, {
				"topicName": "27.06 Legal position of Director",
				"topicURL": ""
			}, {
				"topicName": "27.07 Appointment of Director",
				"topicURL": ""
			}, {
				"topicName": "27.08 Qualification of Director",
				"topicURL": ""
			}, {
				"topicName": "27.09 Disqualification of Director",
				"topicURL": ""
			}, {
				"topicName": "27.10 Removal of Director",
				"topicURL": ""
			}, {
				"topicName": "27.11 Remuneration of Director",
				"topicURL": ""
			}, {
				"topicName": "27.12 Power of Director",
				"topicURL": ""
			}, {
				"topicName": "27.13 Rights of Director",
				"topicURL": ""
			}, {
				"topicName": "27.14 Duties of Director",
				"topicURL": ""
			}, {
				"topicName": "27.15 Liabilities of Director",
				"topicURL": ""
			}, {
				"topicName": "27.16 Directorial Register",
				"topicURL": ""
			}, {
				"topicName": "27.17 Manager Vs. Director",
				"topicURL": ""
			}, {
				"topicName": "27.18 Managing Director Vs. Whole time Director",
				"topicURL": ""
			}],
			"28": [{
				"topicName": "28.01 Company Secretary",
				"topicURL": ""
			}, {
				"topicName": "28.02 Qualifications of Company Secretary",
				"topicURL": ""
			}, {
				"topicName": "28.03 Appointment of Company Secretary",
				"topicURL": ""
			}, {
				"topicName": "28.04 Functions/ Duties of Company Secretary",
				"topicURL": ""
			}, {
				"topicName": "28.05 Powers and Rights of Company Secretary",
				"topicURL": ""
			}, {
				"topicName": "28.06 Removal / Dismissal of Company Secretary",
				"topicURL": ""
			}, {
				"topicName": "28.07 Company Meetings",
				"topicURL": ""
			}, {
				"topicName": "28.08 Kinds of Company Meetings",
				"topicURL": ""
			}, {
				"topicName": "28.09 Resolution",
				"topicURL": ""
			}, {
				"topicName": "28.10 Voting",
				"topicURL": ""
			}, {
				"topicName": "28.11 Procedures of Voting",
				"topicURL": ""
			}]
		}
	},
	{
		"unitNames": ["Applications of Matrices and Determinants", "Complex Numbers", "Theory of Equations", "Inverse Trigonometric Function", "Two Dimensional Analytical Geometry-II", "Applications of Vector Algebra", "Applications of Differential Calculus", "Differentials and Partial Derivatives", "Applications of Integration", "Ordinary Differential Equations", "Probability Distributions", "Discrete Mathematics"],
		"className": "class12th",
		"subject": "தமிழ்",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Inverse of a Non-Singular Square Matrix",
				"topicURL": ""
			}, {
				"topicName": "1.3 Elementary Transformations of a Matrix",
				"topicURL": ""
			}, {
				"topicName": "1.4 Applications of Matrices: Solving System of Linear Equations",
				"topicURL": ""
			}, {
				"topicName": "1.5 Applications of Matrices: Consistency of system of linear equations by rank method",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction to Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.2 Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.3 Basic Algebraic Properties of Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.4 Conjugate of a Complex Number",
				"topicURL": ""
			}, {
				"topicName": "2.5 Modulus of a Complex Number",
				"topicURL": ""
			}, {
				"topicName": "2.6 Geometry and Locus of Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.7 Polar and Euler form of a Complex Numbe",
				"topicURL": ""
			}, {
				"topicName": "2.8 de Moivre's Theorem and its Applications",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Basics of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.3 Vieta's Formulae and Formation of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.4 Nature of Roots and Nature of Coefficients of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.5 Applications to Geometrical Problems",
				"topicURL": ""
			}, {
				"topicName": "3.6 Roots of Higher Degree Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.7 Polynomials with Additional Information",
				"topicURL": ""
			}, {
				"topicName": "3.8 Polynomial Equations with no additional information",
				"topicURL": ""
			}, {
				"topicName": "3.9 Descartes Rule",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topiURL": ""
			}, {
				"topicName": "4.2 Some Fundamental Concepts",
				"topiURL": ""
			}, {
				"topicName": "4.3 Sine Function and Inverse Sine Function",
				"topiURL": ""
			}, {
				"topicName": "4.4 The Cosine Function and Inverse Cosine Function",
				"topiURL": ""
			}, {
				"topicName": "4.5 The Tangent Function and the Inverse Tangent Function",
				"topiURL": ""
			}, {
				"topicName": "4.6 The Cosecant Function and the Inverse Cosecant Function",
				"topiURL": ""
			}, {
				"topicName": "4.7 The Secant Function and Inverse Secant Function",
				"topiURL": ""
			}, {
				"topicName": "4.8 The Cotangent Function and the Inverse Cotangent Function",
				"topiURL": ""
			}, {
				"topicName": "4.9 Principal Value of Inverse Trigonometric Functions",
				"topiURL": ""
			}, {
				"topicName": "4.10 Properties of Inverse Trigonometric Functions",
				"topiURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topiURL": ""
			}, {
				"topicName": "5.2 Circle",
				"topicURL": ""
			}, {
				"topicName": "5.3 Conics",
				"topiURL": ""
			}, {
				"topicName": "5.4 Conic Sections",
				"topicURL": ""
			}, {
				"topicName": "5.5 Parametric form of Conics",
				"topiURL": ""
			}, {
				"topicName": "5.6 Tangents and Normals to Conics",
				"topiURL": ""
			}, {
				"topicName": "5.7 Real life Applications of Conics",
				"topiURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Geometric Introduction to Vectors",
				"topicURL": ""
			}, {
				"topicName": "6.3 Scalar Product and Vector Product",
				"topicURL": ""
			}, {
				"topicName": "6.4 Scalar triple product",
				"topicURL": ""
			}, {
				"topicName": "6.5 Vector triple product",
				"topicURL": ""
			}, {
				"topicName": "6.6 Jacobi's Identity and Lagrange's Identity",
				"topicURL": ""
			}, {
				"topicName": "6.7 Different forms of Equation of a Straight line",
				"topicURL": ""
			}, {
				"topicName": "6.8 Different forms of Equation of a plane",
				"topicURL": ""
			}, {
				"topicName": "6.9 Image of a point in a plane",
				"topicURL": ""
			}, {
				"topicName": "6.10 Meeting point of a line and a plane",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Meaning of Derivatives",
				"topicURL": ""
			}, {
				"topicName": "7.3 Mean Value Theorem",
				"topicURL": ""
			}, {
				"topicName": "7.4 Series Expansions",
				"topicURL": ""
			}, {
				"topicName": "7.5 Indeterminate Forms",
				"topicURL": ""
			}, {
				"topicName": "7.6 Applications of First Derivative",
				"topicURL": ""
			}, {
				"topicName": "7.7 Applications of Second Derivative",
				"topicURL": ""
			}, {
				"topicName": "7.8 Applications in Optimization",
				"topicURL": ""
			}, {
				"topicName": "7.9 Symmetry and Asymptotes",
				"topicURL": ""
			}, {
				"topicName": "7.10 Sketching of Curves",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Linear Approximation and Differentials",
				"topicURL": ""
			}, {
				"topicName": "8.3 Functions of Several Variables",
				"topicURL": ""
			}, {
				"topicName": "8.4 Limit and Continuity of Functions of Two Variables",
				"topicURL": ""
			}, {
				"topicName": "8.5 Partial Derivatives",
				"topicURL": ""
			}, {
				"topicName": "8.6 Linear Approximation and Differential of a Function of Several Variables",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Definite Integral as the Limit of a Sum",
				"topicURL": ""
			}, {
				"topicName": "9.3 Fundamental Theorems of Integral Calculus and their Applications",
				"topicURL": ""
			}, {
				"topicName": "9.4 Bernoulli's Formula",
				"topicURL": ""
			}, {
				"topicName": "9.5 Improper Integrals",
				"topicURL": ""
			}, {
				"topicName": "9.6 Reduction Formulae",
				"topicURL": ""
			}, {
				"topicName": "9.7 Gamma Integral",
				"topicURL": ""
			}, {
				"topicName": "9.8 Evaluation of Bounded Plane Area by Integration",
				"topicURL": ""
			}, {
				"topicName": "9.9 Volume of a Solid obtained by Revolving Area about an Axis",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Differential Equation, Order and Degree",
				"topicURL": ""
			}, {
				"topicName": "10.3 Classification of Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.4 Formation of Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.5 Solution of Ordinary Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.6 Solution of First Order and First Degree Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.7 First Order Linear Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.8 Applications of First Order Ordinary Differential Equations",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "11.2 Random Variable",
				"topicURL": ""
			}, {
				"topicName": "11.3 Types of Random Variable",
				"topicURL": ""
			}, {
				"topicName": "11.4 Continuous Distributions",
				"topicURL": ""
			}, {
				"topicName": "11.5 Mathematical Expectation",
				"topicURL": ""
			}, {
				"topicName": "11.6 Theoretical Distributions: Some Special Discrete Distributions",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "12.2 Binary Operations",
				"topicURL": ""
			}, {
				"topicName": "12.3 Mathematical Logic",
				"topicURL": ""
			}]
		}
	},
	{
		"unitNames": ["Applications of Matrices and Determinants", "Complex Numbers", "Theory of Equations", "Inverse Trigonometric Function", "Two Dimensional Analytical Geometry-II", "Applications of Vector Algebra", "Applications of Differential Calculus", "Differentials and Partial Derivatives", "Applications of Integration", "Ordinary Differential Equations", "Probability Distributions", "Discrete Mathematics"],
		"className": "class12th",
		"subject": "English",
		"unitTopics": {
			"1": [{
				"topicName": "1.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "1.2 Inverse of a Non-Singular Square Matrix",
				"topicURL": ""
			}, {
				"topicName": "1.3 Elementary Transformations of a Matrix",
				"topicURL": ""
			}, {
				"topicName": "1.4 Applications of Matrices: Solving System of Linear Equations",
				"topicURL": ""
			}, {
				"topicName": "1.5 Applications of Matrices: Consistency of system of linear equations by rank method",
				"topicURL": ""
			}],
			"2": [{
				"topicName": "2.1 Introduction to Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.2 Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.3 Basic Algebraic Properties of Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.4 Conjugate of a Complex Number",
				"topicURL": ""
			}, {
				"topicName": "2.5 Modulus of a Complex Number",
				"topicURL": ""
			}, {
				"topicName": "2.6 Geometry and Locus of Complex Numbers",
				"topicURL": ""
			}, {
				"topicName": "2.7 Polar and Euler form of a Complex Numbe",
				"topicURL": ""
			}, {
				"topicName": "2.8 de Moivre's Theorem and its Applications",
				"topicURL": ""
			}],
			"3": [{
				"topicName": "3.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "3.2 Basics of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.3 Vieta's Formulae and Formation of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.4 Nature of Roots and Nature of Coefficients of Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.5 Applications to Geometrical Problems",
				"topicURL": ""
			}, {
				"topicName": "3.6 Roots of Higher Degree Polynomial Equations",
				"topicURL": ""
			}, {
				"topicName": "3.7 Polynomials with Additional Information",
				"topicURL": ""
			}, {
				"topicName": "3.8 Polynomial Equations with no additional information",
				"topicURL": ""
			}, {
				"topicName": "3.9 Descartes Rule",
				"topicURL": ""
			}],
			"4": [{
				"topicName": "4.1 Introduction",
				"topiURL": ""
			}, {
				"topicName": "4.2 Some Fundamental Concepts",
				"topiURL": ""
			}, {
				"topicName": "4.3 Sine Function and Inverse Sine Function",
				"topiURL": ""
			}, {
				"topicName": "4.4 The Cosine Function and Inverse Cosine Function",
				"topiURL": ""
			}, {
				"topicName": "4.5 The Tangent Function and the Inverse Tangent Function",
				"topiURL": ""
			}, {
				"topicName": "4.6 The Cosecant Function and the Inverse Cosecant Function",
				"topiURL": ""
			}, {
				"topicName": "4.7 The Secant Function and Inverse Secant Function",
				"topiURL": ""
			}, {
				"topicName": "4.8 The Cotangent Function and the Inverse Cotangent Function",
				"topiURL": ""
			}, {
				"topicName": "4.9 Principal Value of Inverse Trigonometric Functions",
				"topiURL": ""
			}, {
				"topicName": "4.10 Properties of Inverse Trigonometric Functions",
				"topiURL": ""
			}],
			"5": [{
				"topicName": "5.1 Introduction",
				"topiURL": ""
			}, {
				"topicName": "5.2 Circle",
				"topicURL": ""
			}, {
				"topicName": "5.3 Conics",
				"topiURL": ""
			}, {
				"topicName": "5.4 Conic Sections",
				"topicURL": ""
			}, {
				"topicName": "5.5 Parametric form of Conics",
				"topiURL": ""
			}, {
				"topicName": "5.6 Tangents and Normals to Conics",
				"topiURL": ""
			}, {
				"topicName": "5.7 Real life Applications of Conics",
				"topiURL": ""
			}],
			"6": [{
				"topicName": "6.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "6.2 Geometric Introduction to Vectors",
				"topicURL": ""
			}, {
				"topicName": "6.3 Scalar Product and Vector Product",
				"topicURL": ""
			}, {
				"topicName": "6.4 Scalar triple product",
				"topicURL": ""
			}, {
				"topicName": "6.5 Vector triple product",
				"topicURL": ""
			}, {
				"topicName": "6.6 Jacobi's Identity and Lagrange's Identity",
				"topicURL": ""
			}, {
				"topicName": "6.7 Different forms of Equation of a Straight line",
				"topicURL": ""
			}, {
				"topicName": "6.8 Different forms of Equation of a plane",
				"topicURL": ""
			}, {
				"topicName": "6.9 Image of a point in a plane",
				"topicURL": ""
			}, {
				"topicName": "6.10 Meeting point of a line and a plane",
				"topicURL": ""
			}],
			"7": [{
				"topicName": "7.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "7.2 Meaning of Derivatives",
				"topicURL": ""
			}, {
				"topicName": "7.3 Mean Value Theorem",
				"topicURL": ""
			}, {
				"topicName": "7.4 Series Expansions",
				"topicURL": ""
			}, {
				"topicName": "7.5 Indeterminate Forms",
				"topicURL": ""
			}, {
				"topicName": "7.6 Applications of First Derivative",
				"topicURL": ""
			}, {
				"topicName": "7.7 Applications of Second Derivative",
				"topicURL": ""
			}, {
				"topicName": "7.8 Applications in Optimization",
				"topicURL": ""
			}, {
				"topicName": "7.9 Symmetry and Asymptotes",
				"topicURL": ""
			}, {
				"topicName": "7.10 Sketching of Curves",
				"topicURL": ""
			}],
			"8": [{
				"topicName": "8.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "8.2 Linear Approximation and Differentials",
				"topicURL": ""
			}, {
				"topicName": "8.3 Functions of Several Variables",
				"topicURL": ""
			}, {
				"topicName": "8.4 Limit and Continuity of Functions of Two Variables",
				"topicURL": ""
			}, {
				"topicName": "8.5 Partial Derivatives",
				"topicURL": ""
			}, {
				"topicName": "8.6 Linear Approximation and Differential of a Function of Several Variables",
				"topicURL": ""
			}],
			"9": [{
				"topicName": "9.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "9.2 Definite Integral as the Limit of a Sum",
				"topicURL": ""
			}, {
				"topicName": "9.3 Fundamental Theorems of Integral Calculus and their Applications",
				"topicURL": ""
			}, {
				"topicName": "9.4 Bernoulli's Formula",
				"topicURL": ""
			}, {
				"topicName": "9.5 Improper Integrals",
				"topicURL": ""
			}, {
				"topicName": "9.6 Reduction Formulae",
				"topicURL": ""
			}, {
				"topicName": "9.7 Gamma Integral",
				"topicURL": ""
			}, {
				"topicName": "9.8 Evaluation of Bounded Plane Area by Integration",
				"topicURL": ""
			}, {
				"topicName": "9.9 Volume of a Solid obtained by Revolving Area about an Axis",
				"topicURL": ""
			}],
			"10": [{
				"topicName": "10.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "10.2 Differential Equation, Order and Degree",
				"topicURL": ""
			}, {
				"topicName": "10.3 Classification of Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.4 Formation of Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.5 Solution of Ordinary Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.6 Solution of First Order and First Degree Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.7 First Order Linear Differential Equations",
				"topicURL": ""
			}, {
				"topicName": "10.8 Applications of First Order Ordinary Differential Equations",
				"topicURL": ""
			}],
			"11": [{
				"topicName": "11.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "11.2 Random Variable",
				"topicURL": ""
			}, {
				"topicName": "11.3 Types of Random Variable",
				"topicURL": ""
			}, {
				"topicName": "11.4 Continuous Distributions",
				"topicURL": ""
			}, {
				"topicName": "11.5 Mathematical Expectation",
				"topicURL": ""
			}, {
				"topicName": "11.6 Theoretical Distributions: Some Special Discrete Distributions",
				"topicURL": ""
			}],
			"12": [{
				"topicName": "12.1 Introduction",
				"topicURL": ""
			}, {
				"topicName": "12.2 Binary Operations",
				"topicURL": ""
			}, {
				"topicName": "12.3 Mathematical Logic",
				"topicURL": ""
			}]
		}
	}
];
    const str = JSON.stringify(responseData);
    //console.log(str)
    // const obj =JSON.parse(str);
    // console.log(obj)


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };




    var navItemName = [
      "Account",
      "About Us",
      "Contact Us",
      "Share the App",
      "Terms and Privacy Policy",
      "App info",
      "Sign Out",
    ];



    var subjectIcon = [
      Mat,
      Phy,
      Acc,
      Che,
      Geo,
      Zoo,
      Sta,
      Comp,
      Bot,
      Eco,
      His,
      Com,

    ];
    // let temp = "Applications of Matrices and Determinants"
    // // for (var i = 0; i < responseData.length; i++) {
    // //   var a = (responseData[i]["subject"])
    // //   setUnitNames(a.charAt(0).toUpperCase() + a.substr(1));
    // // }
    // unitNames.push(temp)


    var s = useLocalStorage("12thStd", responseData);


    console.log("hii")

  let unitNames =[]
  for(var i = 0; i<responseData.length; i++) {
      var a = (responseData[i]["subject"])
    unitNames.push(a.charAt(0).toUpperCase() + a.substr(1));
}



const GoToUnitPage = (text) => {
  var unitListNames = []
  var topicName = []
  for (let i = 0; i < responseData.length; i++) {
    if (responseData[i]["subject"] === text.toLowerCase()) {
      unitListNames.push(responseData[i])
    }
  }
  history.push("/UnitList", { subName: text, subjectDataToSend: unitListNames, subjectImageToSend: subjectIcon })
  console.log(unitListNames);
};


return (

  <div>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#00ADB5" }}
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










    <div class="button" style={{ display: "flex", justifyContent: "center" }}>
      <Typography
        className={classes.StandardTypRes}
      > Standard 12
      </Typography>
    </div>
    <div
      className={classes.SubjectRes}
    >
      Subjects
    </div>
    <div classes={classes.HrRes}>
      <hr />
    </div>
    <div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Grid className={classes.GridRes}>

          {unitNames.map((text, index,) => (

            <Button onClick={() => { GoToUnitPage(text) }}

              variant="contained"

              className={classes.ButtonRes}
            >
              <img
                className={classes.ImgRes}
                src={subjectIcon[index]}
              ></img>
              {text}
            </Button>

          ))}
        </Grid>
      </main>
    </div>
  </div>
);
}

export default App;
