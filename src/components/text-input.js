import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        outline: 'none',
        fontSize: 100
    },
    resize: {
        outline: 'none',
    },
    formTextLabel: {
    }

}));

export default function BasicTextFields(props) {
    const { title, val, placeholder } = props
    const classes = useStyles();

    return (
        <div>
            <TextField
                id="standard-basic"
                className={classes.textField}
                label={title || ''}
                onChange={(e, val) => props.onChange(e.target.value)}
                margin="normal"
                value={props.value}
                type='number'
                placeholder={placeholder}
                InputProps={{
                    classes: {
                        input: classes.resize,
                    },
                }}
                InputLabelProps={{
                    classes: {
                      root: classes.formTextLabel
                    }
                }}                
                endAdornment={val ? <InputAdornment position="end">{val}</InputAdornment> : <></>}
            />
        </div>
    );
}