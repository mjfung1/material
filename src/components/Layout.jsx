
import { Avatar, Drawer, makeStyles, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';



import { AddCircleOutlineOutlined, SubjectOutlined, GitHub, LinkedIn, WorkOutline } from '@material-ui/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import { blue, red } from '@material-ui/core/colors';

import mose from '../avatars/mose.jpeg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: "#f9f9f9",
        width: "100%",
        padding: theme.spacing(3),

      },
      drawer: {
        width: drawerWidth,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      root: {
        display: "flex",
      },
      active: {
        color: "#3dace3",
      },
      title: {
        padding: theme.spacing(2),
      },
      appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: "#3dace3",
      },
      toolbar: theme.mixins.toolbar,
      date: {
        flexGrow: 1,
      },
      avatar: {
        marginLeft: theme.spacing(2),
      },
      personalLinks: {
        margin: "0 12px",
        color: "white",
        transition: "all 0.35s ease-in-out",
        "&:hover": {
          color: "grey",
        },
      },
     
    };
    
});

function Layout({ children }) {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
      {
        text: "Fave Quotes",
        icon: <SubjectOutlined color="secondary" />,
        path: "/",
      },
      {
        text: "Add Quote",
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: "/create",
      }
    ];


    return (
      <div className={classes.root}>
        {/* app bar */}

        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar>
            <Typography className={classes.date}>
              {format(new Date(), "eeee d")}
            </Typography>

            <div className={classes.date}>
              <a
                href="https://github.com/mjfung1/material"
                target="_blank"
                rel="noreferrer"
                className={classes.personalLinks}
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-fung-5084691b5/"
                target="_blank"
                rel="noreferrer"
                className={classes.personalLinks}
              >
                <LinkedIn />
              </a>
              <a
                href="https://mjfung1.github.io/"
                target="_blank"
                rel="noreferrer"
                className={classes.personalLinks}
              >
                <WorkOutline />
              </a>
            </div>

            <Typography>Mose</Typography>
            <Avatar className={classes.avatar} src={mose} />
          </Toolbar>
        </AppBar>

        {/* side drawer */}
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <Typography variant="h4" className={classes.title}>
            the office
          </Typography>

          {/* list / links */}
          <List>
            {menuItems.map((note) => (
              <ListItem
                onClick={() => history.push(note.path)}
                button
                key={note.text}
                className={
                  location.pathname === note.path ? classes.active : null
                }
              >
                <ListItemIcon>{note.icon}</ListItemIcon>
                <ListItemText primary={note.text}/>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <div className={classes.page}>
          <div className={classes.toolbar}></div>

          {children}
        </div>
      </div>
    );
}

export default Layout;
