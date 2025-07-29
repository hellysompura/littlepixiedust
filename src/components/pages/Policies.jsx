import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Policies() {
    const { policyType } = useParams();

    useEffect(() => {
        console.log(policyType)
    }, []);

    return (
        <React.Fragment>
            <Container maxWidth='md'>
                <Grid container spacing={3} marginY={2} marginTop={"22vh"}>
                    {policyType === 'shipping-policy' &&
                        <React.Fragment>
                            <Grid size={12}>
                                <Typography variant='h4' display={"flex"} justifyContent={"center"}>Shipping Policy</Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography variant='body1'>
                                    Please allow 1-5 business days (not including weekends) for your order to be processed and shipped.
                                </Typography>
                                <Typography variant='body1'>
                                    This business is a one-woman show, and I get your orders out as quickly as I can!
                                </Typography>
                                <Typography variant='body1'>
                                    If you need your order by a specific date (or sooner than the current processing time) please let me know and I will do my best to get it to you sooner. We also ship worldwide!
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    }

                    {policyType === 'refund-policy' &&
                        <React.Fragment>
                            <Grid size={12}>
                                <Typography variant='h4' display={"flex"} justifyContent={"center"}>Refund Policy</Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography variant='body1'>
                                    At this time we do not accept refunds, cancelations, or exchanges. This business is owned and operated by only me,Shraddha , so it is not possible for me to offer any of these. Please be fully aware of this when making a purchase.
                                </Typography>
                                <Typography variant='body1'>
                                    We also do not price match previously placed orders to reflect any current sale, discount, or change in price.
                                </Typography>
                                <Typography variant='body1'>
                                    If you have a problem with your order, please feel free to contact us, as we will try to get it resolved as soon as possible. Thank you!
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    }
                </Grid>
            </Container>
        </React.Fragment>
    )
}
