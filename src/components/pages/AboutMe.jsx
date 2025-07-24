import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function AboutMe() {
    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Grid container spacing={3} marginY={2} marginTop={"22vh"}>
                    <Grid size={12} display={"flex"} justifyContent={"center"}>
                        <Typography variant='h4'>Meet Shraddha</Typography>
                    </Grid>

                    <Grid size={12}>
                        <Grid container spacing={1} marginY={2}>
                            <Grid size={12}></Grid>
                            <Grid size={12}>
                                <Typography variant='h6'>
                                    HI, THERE!
                                </Typography>

                                <Typography variant='body1'>
                                    I'm Shraddha, the face behind Little Pixie Dust - The craft store I started this business July 2023.
                                    It has been the best decision!
                                </Typography>

                                <Typography variant='body1'>
                                    My overall goal is to bring a little bit of happiness into people's lives with my art. 
                                    I know my little accessories don't make much a difference in the grand scheme of things, but to me, being able to make someone smile and feel more confident for even just a few minutes is enough for me! I truly hope my little items bring joy to all those who receive them, and that we can build an encouraging/inspiring community through them.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
