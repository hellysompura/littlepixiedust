import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ContactUs() {
    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Grid container spacing={3} marginY={2}>
                    <Grid size={12} display={"flex"} justifyContent={"center"}>
                        <Typography variant='h4'>Contact</Typography>
                    </Grid>

                    <Grid size={12}>
                        <Grid container spacing={1} marginY={2}>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}></Grid>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
