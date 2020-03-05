import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import { useInputGroup } from '../../../hooks/useInputs.hook';

const useStyles = makeStyles({
  paper: {
    padding: '30px',
    marginBottom: '1em',
  },
  button: {
    margin: '1em 0',
  },
});

const injectInputs = ['to', 'after', 'before', 'skip_if', 'template'];

export const InjectForm = ({ setInjectForm }) => {
  const classes = useStyles();
  const [inputValues, handleInput, getInputValue] = useInputGroup(injectInputs);

  const onSubmit = e => {
    e.preventDefault();

    const formattedValues = Object.keys(inputValues).reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: inputValues[curr].value,
      }),
      {},
    );

    console.log(inputValues, formattedValues);
    setInjectForm(formattedValues);
  };

  return (
    <Paper className={classes.paper}>
      <Typography component="h4" variant="h5">
        Inject Form
      </Typography>
      <form>
        <Grid spacing={4} container>
          {injectInputs.map(injectInput => (
            <Grid key={injectInput} item md={injectInput === 'template' ? 12 : 6} sm={6}>
              <TextField
                name={injectInput}
                label={injectInput}
                value={getInputValue(injectInput)}
                onChange={handleInput}
                multiline={injectInput === 'template'}
                fullWidth={injectInput === 'template'}
              />
            </Grid>
          ))}
        </Grid>
      </form>
      <Button className={classes.button} onClick={onSubmit} variant="contained" color="primary">
        See preview
      </Button>
    </Paper>
  );
};
