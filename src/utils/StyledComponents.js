import styled from "@emotion/styled";
import { alpha, Button, InputBase, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom: 16,
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));

const FormInputField = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: 24,
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#dcdfd8ff',
        border: '1px solid',
        borderColor: '#dcdfd8ff',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',

        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            color: "#9AAF9D"
        },

    },
}));

const MainButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#2F372F",
    textTransform: "capitalize",
    '&:hover': {
        backgroundColor: "#2F372F",
    },
}));

export { StyledToolbar, FormInputField, MainButton }