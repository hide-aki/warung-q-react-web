import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { orange } from "@material-ui/core/colors";
import AppbarSignUp from "../components/AppbarSignUp";
import HomeGrid1 from "../components/HomeGrid1";
import HomeGrid2 from "../components/HomeGrid2";
import HomeGrid3 from "../components/HomeGrid3";

const baseColor = orange[500];

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function Home(props) {
  useEffect(() => {
    document.title = "Warung-Q";
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarSignUp color={baseColor} />
      <Box my={1.5}>
        <HomeGrid1 color={baseColor} />
        <HomeGrid2 color={baseColor} />
        <HomeGrid3 color={baseColor} />
      </Box>
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: baseColor, color: "white" }}
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}