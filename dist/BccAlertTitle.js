import MuiAlertTitle from '@material-ui/lab/AlertTitle';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const BccAlertTitle = withStyles({
    root: {
        fontSize: '16px',
    },
})((props) => React.createElement(MuiAlertTitle, Object.assign({}, props)));
export default BccAlertTitle;
