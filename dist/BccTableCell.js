import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const BccTableCell = withStyles({
    root: {
        fontSize: 14,
    },
})((props) => React.createElement(TableCell, Object.assign({}, props)));
export default BccTableCell;
