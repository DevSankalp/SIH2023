import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

function DocTracker({ value }) {
  return (
    <Box sx={{ width: "93%" }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  );
}

export default DocTracker;
