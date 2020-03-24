import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const BccButton = withStyles({
    root: {
        backgroundColor: '#27AE60',
        borderRadius: 4,
        color: '#FFFFFF',
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#52BE80',
            boxShadow: 'none',
        },
        '&.Mui-disabled': {
            backgroundColor: '#F3F3F3',
            color: '#D0D0D0',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#1F7042',
        },
        '&.MuiButton-containedSecondary': {
            backgroundColor: 'white',
            color: '#27AE60',
        },
        '&.MuiButton-textPrimary': {
            backgroundColor: 'brown',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#fff',
            border: '1px solid #E8E8E8',
            color: '#27AE60',
            '&:hover': {
                borderColor: '#27AE60',
            },
            '&.Mui-disabled': {
                backgroundColor: '#F3F3F3',
                color: '#D0D0D0',
                border: 'none',
            },
        },
    },
})(Button);
export default BccButton;
