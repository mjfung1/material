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


const useStyles = makeStyles({
  btn: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
  });

export default function Create() {

  const classes = useStyles();

  const [ title, setTitle ] = useState('');
  const [ details, setDetails ] = useState('');
  const [ titleError, setTitleError ] = useState(false);
  const [ detailsError, setDetailsError ] = useState(false);
  const [ category, setCategory ] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === '') setTitleError(true);
    if (details === '') setDetailsError(true);


    if (title && details) {
      console.log(title, details, category)
    }
  };
  
  return (

    <Container>

      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form 
        onSubmit={handleSubmit}
        autoComplete="off" 
        noValidate>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          className={classes.btn}
          variant="outlined"
          label="Note Title"
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
          <FormLabel>Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel label="Money" value="money" control={ <Radio />} />
            <FormControlLabel label="Todos" value="todos" control={ <Radio />} />
            <FormControlLabel label="Reminders" value="reminders" control={ <Radio />} />
            <FormControlLabel label="Work" value="work" control={ <Radio />} />
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
