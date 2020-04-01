import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const BccBreadcrumbs = withStyles({
    root: {},
})((props) => (React.createElement(Breadcrumbs, Object.assign({ separator: React.createElement(NavigateNextIcon, { fontSize: "small" }) }, props))));
export default BccBreadcrumbs;
