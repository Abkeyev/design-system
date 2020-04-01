import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => createStyles({
    text: {
        fontWeight: 300,
        display: 'inline-block',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 18,
        lineHeight: '24px',
        color: '#000D1A',
    },
    p1: {
        fontSize: 18,
        lineHeight: '24px',
    },
    p2: {
        fontSize: 16,
        lineHeight: '20px',
    },
    p2l: {
        fontSize: 18,
        lineHeight: '24px',
    },
    p3: {
        fontSize: 14,
        lineHeight: '24px',
    },
    p4: {
        fontSize: 12,
        lineHeight: '16px',
    },
    title: {
        display: 'inline-block',
        fontWeight: 500,
        lineHeight: '52px',
    },
    h1: {
        fontSize: 48,
    },
    h2: {
        fontSize: 40,
        lineHeight: '40px',
    },
    h3: {
        fontSize: 28,
        lineHeight: '28px',
    },
    h4: {
        fontSize: 22,
        lineHeight: '24px',
    },
    h5: {
        fontSize: 20,
        lineHeight: '24px',
    },
    h6: {
        fontSize: 18,
        lineHeight: '20px',
    },
    block: {
        display: 'block',
    },
    normal: {
        fontWeight: 300,
    },
    medium: {
        fontWeight: 400,
    },
    bold: {
        fontWeight: 500,
    },
}));
const BccTypography = (props) => {
    const classes = useStyles();
    return (React.createElement("span", { className: `${props.type === 'h1'
            ? classes.title + ' ' + classes.h1
            : props.type === 'h2'
                ? classes.title + ' ' + classes.h2
                : props.type === 'h3'
                    ? classes.title + ' ' + classes.h3
                    : props.type === 'h4'
                        ? classes.title + ' ' + classes.h4
                        : props.type === 'h5'
                            ? classes.title + ' ' + classes.h5
                            : props.type === 'h6'
                                ? classes.title + ' ' + classes.h6
                                : props.type === 'p1'
                                    ? classes.text + ' ' + classes.p1
                                    : props.type === 'p2'
                                        ? classes.text + ' ' + classes.p2
                                        : props.type === 'p2l'
                                            ? classes.text + ' ' + classes.p2l
                                            : props.type === 'p3'
                                                ? classes.text + ' ' + classes.p3
                                                : props.type === 'p4'
                                                    ? classes.text + ' ' + classes.p4
                                                    : ''} ${props.weight === 'bold'
            ? classes.bold
            : props.weight === 'medium'
                ? classes.medium
                : props.weight === 'normal'
                    ? classes.normal
                    : ''} ${props.block ? classes.block : ''} ${props.className ? props.className : ''} ` }, props.children));
};
export default BccTypography;
