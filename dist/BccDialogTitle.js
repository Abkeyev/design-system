import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
const BccDialogTitle = withStyles({
    root: {},
})((props) => React.createElement(DialogTitle, Object.assign({ disableTypography: true }, props)));
export default BccDialogTitle;
