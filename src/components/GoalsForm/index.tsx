import React from 'react';
import {FormControl, FormGroup, FormHelperText, Input, InputLabel} from '@material-ui/core';
import ButtonAppBar from '../ButtonAppBar';


class GoalsForm extends React.Component<any, any> {
    state = { 'value': ''};

    submit = () => {
        alert('Pending work');
    }

    render(): any {
        return(
            <form onSubmit={this.submit}>
                <FormControl>
                    <InputLabel htmlFor="goalName">Goal</InputLabel>
                    <Input id="goalName" aria-describedby="goalName-helper" />
                    <FormHelperText id="goalName-helper">Type something specific</FormHelperText>
                </FormControl>
            </form>
        )
    }
}

export default GoalsForm;