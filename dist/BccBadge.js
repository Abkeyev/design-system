import Badge from '@material-ui/core/Badge';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const BccBadge = withStyles({
    badge: {
        color: 'white',
    },
})((props) => React.createElement(Badge, Object.assign({}, props)));
export default BccBadge;
