import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
const BccSlider = withStyles({
    root: {
        color: '#27AE60',
        '& .MuiSlider-mark': {
            width: 8,
            height: 8,
            top: -5,
            marginLeft: -5,
            color: '#CCCFD1',
            border: '2px solid white',
            borderRadius: '50%',
        },
        '& .MuiSlider-mark.MuiSlider-markActive': {
            backgroundColor: '#27AE60',
            opacity: 1,
        },
        '& .MuiSlider-thumb': {
            width: 14,
            height: 14,
            border: '2px solid white',
            marginTop: -6,
        },
        '& .MuiSlider-rail': {
            height: 2,
            opacity: 1,
        },
        '& .MuiSlider-track': {
            height: 2,
            backgroundColor: '#1F7042',
        },
        '& .Mui-focusVisible, & .MuiSlider-thumb:hover, & .MuiSlider-active': {
            boxShadow: 'none',
        },
    },
})((props) => React.createElement(Slider, Object.assign({}, props)));
export default BccSlider;
