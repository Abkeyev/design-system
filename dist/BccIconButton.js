import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
const BccIconButton = withStyles({
    root: {},
})((props) => React.createElement(IconButton, Object.assign({ disableRipple: true, disableFocusRipple: true }, props)));
export default BccIconButton;
