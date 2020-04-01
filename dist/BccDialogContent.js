import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
const BccDialogContent = withStyles({
    root: {},
    dividers: {
        borderColor: 'white',
    },
})((props) => React.createElement(DialogContent, Object.assign({}, props)));
export default BccDialogContent;
