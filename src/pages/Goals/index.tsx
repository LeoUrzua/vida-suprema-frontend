import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import GoalsForm from '../../components/GoalsForm';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const Goals: React.FC = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <h1>Goals</h1>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>

        <h1>Add a new goal</h1>

        <GoalsForm/>
    </div>
  );
};

export default Goals;
