import { AppBar, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledToolbar } from '../utils/StyledComponents'

import { Menu, Search, ShoppingCart } from '@mui/icons-material';
import CustomMuiLink from './CustomMuiLink';
import { Link as RouterLink } from 'react-router-dom';

export default function TopHeader() {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
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

                        <Box
                            display={"flex"}
                            flexGrow={1}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            flexDirection={"column"}
                            height={"-webkit-fill-available"}
                        >
                            <Typography
                                variant="h4"
                                noWrap

                                sx={{ fontFamily: ["Shadows Into Light", "cursive"].join(","), fontWeight: 700, letterSpacing: '1.3px' }}
                            >
                                Little Pixie Dust by Shraddha
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                            >
                                <CustomMuiLink to="/">
                                    Home
                                </CustomMuiLink>
                                <CustomMuiLink to="/">
                                    Shop with me
                                </CustomMuiLink>
                                <CustomMuiLink to="/">
                                    About me
                                </CustomMuiLink>
                                <CustomMuiLink to="/">
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
        </React.Fragment>
    )
}
