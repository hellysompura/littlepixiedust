import { Email, Instagram, X } from '@mui/icons-material'
import { AppBar, Container, Divider, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {

    const handlePolicies = (e, policy) => {
        console.log(e, policy)

         window.open(`/${policy}`, '_self')
    }

    return (
        <React.Fragment>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#6F8069",
                    boxShadow: "0px 4px 10px 7px #00000029",
                }}
            >
                <Toolbar sx={{ paddingY: 2, height: "15vh" }}>
                    <Grid container spacing={3} width={"100%"}>
                        <Grid size={2}></Grid>
                        <Grid size={6}>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <Typography variant='body1'>Quick links</Typography>
                                </Grid>

                                <Grid size={12}>
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                    >
                                        <Typography variant='body2' className='cursor-pointer'>Custom Order Request</Typography>
                                        <Typography variant='body2' className='cursor-pointer' onClick={e => handlePolicies(e, 'shipping-policy')}>Shipping Policy</Typography>
                                        <Typography variant='body2' className='cursor-pointer' onClick={e => handlePolicies(e, 'refund-policy')}>Refund Policy</Typography>
                                        <Typography variant='body2' className='cursor-pointer' onClick={e => handlePolicies(e, 'privacy-policy')}>Privacy Policy</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant='body1'>Social media links</Typography>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <IconButton>
                                    <Instagram />
                                </IconButton>
                                <IconButton>
                                    <X />
                                </IconButton>
                                <IconButton>
                                    <Email />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
