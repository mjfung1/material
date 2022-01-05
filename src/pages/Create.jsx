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
    display: 'block'
  }
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

    <Container>

      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Quote
      </Typography>
      <form 
        onSubmit={handleSubmit}
        autoComplete="off" 
        noValidate>
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
          <RadioGroup value={person} onChange={(e) => setPerson(e.target.value)}>
            <FormControlLabel label="Prison Mike" value="prisonMike" control={ <Radio />} />
            <FormControlLabel label="Michael Scarn" value="michaelScarn" control={ <Radio />} />
            <FormControlLabel label="Dwight Schrute" value="dwightSchrute" control={ <Radio />} />
            <FormControlLabel label="Michael Scott" value="michaelScott" control={ <Radio />} />
            <FormControlLabel label="Stanley Hudson" value="stanleyHudson" control={ <Radio />} />
            <FormControlLabel label="Kevin Malone" value="kevinMalone" control={ <Radio />} />
            <FormControlLabel label="Pam Beesly" value="pamBeesly" control={ <Radio />} />
            <FormControlLabel label="Toby Flenderson" value="tobyFlenderson" control={ <Radio />} />
            <FormControlLabel label="Angela Martin" value="angelaMartin" control={ <Radio />} />
            <FormControlLabel label="Kelly Kapoor" value="kellyKapoor" control={ <Radio />} />
            <FormControlLabel label="Oscar Martinez" value="oscarMartinez" control={ <Radio />} />
            <FormControlLabel label="Gabe" value="gabeLewis" control={ <Radio />} />
          </RadioGroup>
        </FormControl>
        

        <Button 
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
        >
        Submit
      </Button>
        
      </form>


    </Container>

  )
}
