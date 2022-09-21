import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function createSession() {
  return (
    <div>
      <h1>START A NEW SESSION</h1>
      <Stack spacing={4}>
        <TextField
          required
          id="outlined-required"
          label="Where are you? Please enter zip code."
        />

        <TextField
          required
          id="outlined-required"
          label="How far do you want to travel?"
        />
        <TextField required id="outlined-required" label="Food Category?" />
        <TextField
          required
          id="outlined-required"
          label="Who's eating today? Please enter emails."
        />
      </Stack>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

//SEND TO FIRST FN
