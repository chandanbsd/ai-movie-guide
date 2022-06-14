import React, { useEffect } from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

import LogoDark from "../../images/Logo Dark.png";
import LogoLight from "../../images/Logo Light.png";

import useStyles from "./styles";
import { height } from "@mui/system";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? LogoLight : LogoDark}
          alt="AI Movie Guide Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {/* <img
                  src={LogoLight}
                  className={classes.genreImages}
                  height={30}
                  alt="logo"
                /> */}
                <ListItemText primary={label} />
              </ListItemIcon>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {/* <img
                  src={LogoLight}
                  className={classes.genreImages}
                  height={30}
                  alt="logo"
                /> */}
                <ListItemText primary={label} />
              </ListItemIcon>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
