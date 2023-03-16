import React, { useState } from 'react';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { 
  Button, 
  Container, 
  Typography, 
  makeStyles,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel, 
  FormLabel,
  FormControl
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  btn: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    
  },
  button: {
    backgroundColor: "#3dace3",
    color: "white",
    transition: "all 0.35s ease-in-out",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  container: {
    maxWidth: "900px",
  },
  radioHover: {
    marginLeft: '1px',
    transition: "all 0.35s ease-in-out",
    "&:hover": {
      color: "#3dace3",
    },
  },
});

export default function Create({ database, addNote }) {

  const classes = useStyles();
  const history = useHistory();

  const [ title, setTitle ] = useState('');
  const [ details, setDetails ] = useState('');
  const [ titleError, setTitleError ] = useState(false);
  const [ detailsError, setDetailsError ] = useState(false);
  const [ person, setPerson ] = useState('todos');
  const createdAt = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === '') setTitleError(true);
    if (details === '') setDetailsError(true);


    // if (title && details) {
      
    //   fetch('http://localhost:8000/notes', {
    //     method: 'POST',
    //     headers: {"Content-type": "application/json"},
    //     // json-server automatically adds id. No need to worry
    //     // in body - have to JSON.stringify bc server cannot read js
    //     body: JSON.stringify({ title, details, person, createdAt })
    //   }).then(() => history.push('/'))
    // }
      let id = database.length + ',' + person;
      let data = { id, title, details, person, createdAt }
      addNote( data );
      history.push('/');
  };
  
  return (
    <Container className={classes.container}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Quote
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.btn}
          variant="outlined"
          label="Quote Title"
          error={titleError}
          fullWidth
          required
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.btn}
          variant="outlined"
          label="Details"
          error={detailsError}
          multiline
          rows={4}
          fullWidth
          required
        />

        <FormControl className={classes.btn}>
          <FormLabel>Name</FormLabel>
          <RadioGroup
            row
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          >
            <FormControlLabel
              label="Prison Mike"
              className={classes.radioHover}
              value="prisonMike"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Michael Scarn"
              className={classes.radioHover}
              value="michaelScarn"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Dwight Schrute"
              className={classes.radioHover}
              value="dwightSchrute"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Michael Scott"
              className={classes.radioHover}
              value="michaelScott"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Stanley Hudson"
              className={classes.radioHover}
              value="stanleyHudson"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Kevin Malone"
              className={classes.radioHover}
              value="kevinMalone"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Pam Beesly"
              className={classes.radioHover}
              value="pamBeesly"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Toby Flenderson"
              className={classes.radioHover}
              value="tobyFlenderson"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Angela Martin"
              className={classes.radioHover}
              value="angelaMartin"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Kelly Kapoor"
              className={classes.radioHover}
              value="kellyKapoor"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Oscar Martinez"
              className={classes.radioHover}
              value="oscarMartinez"
              control={<Radio className={classes.radioHover} />}
            />
            <FormControlLabel
              label="Gabe"
              className={classes.radioHover}
              value="gabeLewis"
              control={<Radio className={classes.radioHover} />}
            />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          className={classes.button}
          type="submit"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
