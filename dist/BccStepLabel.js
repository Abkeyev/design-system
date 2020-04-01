import StepLabel from '@material-ui/core/StepLabel';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import './BccStepLabel.css';
const stepIcon = (props) => {
    const { completed } = props;
    return completed ? (React.createElement("div", { className: "stepCircle done" })) : (React.createElement("div", { className: "stepCircle" }));
};
const BccStepLabel = withStyles({
    root: {
        '& .MuiStepLabel-label.MuiStepLabel-active': { opacity: 1 },
        '& .MuiStepLabel-label': { color: '#000D1A', fontSize: 12, opacity: 0.5 },
    },
})((props) => React.createElement(StepLabel, Object.assign({ StepIconComponent: stepIcon }, props)));
export default BccStepLabel;
