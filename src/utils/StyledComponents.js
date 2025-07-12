import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom: 16,
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));

export { StyledToolbar }