var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles, createStyles } from '@material-ui/core/styles';
const BccSwitch = withStyles((theme) => createStyles({
    root: {
        width: 36,
        height: 16,
        padding: 0,
        margin: theme.spacing(1),
        overflow: 'visible',
    },
    switchBase: {
        padding: 2,
        '&$checked': {
            transform: 'translateX(20px)',
            color: 'white',
            '& + $track': {
                backgroundColor: '#27AE60',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#27AE60',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 12,
        height: 12,
    },
    track: {
        borderRadius: 26 / 2,
        backgroundColor: '#CCCFD1',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))((_a) => {
    var { classes } = _a, props = __rest(_a, ["classes"]);
    return (React.createElement(Switch, Object.assign({ focusVisibleClassName: classes.focusVisible, disableRipple: true, classes: {
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
        } }, props)));
});
export default BccSwitch;
