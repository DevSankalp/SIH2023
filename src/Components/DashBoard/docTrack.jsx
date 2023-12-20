import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function DocTracker({ value }) {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={value} size={180} />
    </Stack>
  );
}
