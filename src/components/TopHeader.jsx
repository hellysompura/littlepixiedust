import { AppBar, Box, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { StyledToolbar } from '../utils/StyledComponents'

import { Menu, Search, ShoppingCart } from '@mui/icons-material';
import CustomMuiLink from './CustomMuiLink';
import MainLogo from '../assets/images/logo.jpeg';

import "../styles/main.css"
import { useLocation, useNavigate } from 'react-router-dom';

export default function TopHeader() {
    const isLarge = useMediaQuery('(min-width:600px)');

    const location = useLocation();
    const navigate = useNavigate();

    const handleCategoryClick = (e) => {
        if (location.pathname === "/") {
            // Already on home, scroll directly
            const el = document.getElementById("categories-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home and scroll after it renders
            e.preventDefault(); // Prevent default <a> tag behavior
            navigate("/", {
                state: { scrollTo: "categories-section" }
            });
        }
    };

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1, height: "100%" }}>
                <AppBar
                    position="fixed"
                    sx={{
                        height: "20vh"
                    }}
                >
                    <StyledToolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ display: { lg: 'none', md: 'block' } }}
                        >
                            <Menu />
                        </IconButton>

                        <div className='main-logo-container'>
                            <img src={MainLogo} alt="main logo" />
                        </div>

                        <Box
                            display={"flex"}
                            flexGrow={1}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            flexDirection={"column"}
                            height={"80%"}
                        >
                            <Typography
                                variant={isLarge ? "h4" : "body1"}

                                sx={{ fontFamily: ["Shadows Into Light", "cursive"].join(","), fontWeight: 700, letterSpacing: '1.3px', whiteSpace: { lg: 'noWrap', xs: 'initial' } }}
                            >
                                Little Pixie Dust by Shraddha
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ display: { lg: 'flex', xs: 'none' } }}
                            >
                                <CustomMuiLink to="/">
                                    Home
                                </CustomMuiLink>
                                <CustomMuiLink to="/" onClick={handleCategoryClick}>
                                    Categories
                                </CustomMuiLink>
                                <CustomMuiLink to="/about-me">
                                    About Shraddha
                                </CustomMuiLink>
                                <CustomMuiLink to="/contact-us">
                                    Contact Us
                                </CustomMuiLink>
                            </Stack>
                        </Box>


                        <IconButton size="large" aria-label="search" color="inherit">
                            <Search />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="display more actions"
                            edge="end"
                            color="inherit"
                        >
                            <ShoppingCart />
                        </IconButton>
                    </StyledToolbar>
                </AppBar>
            </Box>
        </React.Fragment >
    )
}
