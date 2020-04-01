import React from 'react';
import { withStyles, makeStyles, createStyles, } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => createStyles({
    green: {
        color: 'white!important',
        backgroundColor: '#27AE60!important',
    },
}));
const BccAvatar = withStyles({
    root: {
        backgroundColor: 'white',
        color: '#4D565F',
    },
})((props) => {
    const classes = useStyles();
    return React.createElement(Avatar, Object.assign({ className: props.green ? classes.green : '' }, props));
});
export default BccAvatar;
