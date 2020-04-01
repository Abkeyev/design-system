import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import BccStepConnector from '@bit/bcc.components.bcc-step-connector';
import React from 'react';
const BccStepper = withStyles({
    root: {},
})((props) => (React.createElement(Stepper, Object.assign({ alternativeLabel: true, connector: React.createElement(BccStepConnector, null) }, props))));
export default BccStepper;
