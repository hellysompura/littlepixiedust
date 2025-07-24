import { Container, FormControl, Grid, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FormInputField, MainButton } from '../../utils/StyledComponents'

export default function ContactUs() {
    const [formObj, setFormObj] = useState({
        name: "",
        email: "",
        contactNumber: "",
        description: ""
    });

    const handleChangeValue = (e) => {
        const { name, value } = e.target

        setFormObj({
            ...formObj,
            [name]: value
        })
    }

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Grid container spacing={3} marginY={2} marginTop={"22vh"}>
                    <Grid size={12} display={"flex"} justifyContent={"center"}>
                        <Typography variant='h4'>Contact</Typography>
                    </Grid>

                    <Grid size={12}>
                        <Grid container spacing={1} marginY={2}>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel shrink htmlFor="name">
                                        Name
                                    </InputLabel>
                                    <FormInputField id='name' name='name' value={formObj.name} onChange={handleChangeValue} />
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel shrink htmlFor="email">
                                        Email
                                    </InputLabel>
                                    <FormInputField id='email' name='email' value={formObj.email} onChange={handleChangeValue} />
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel shrink htmlFor="contactNumber">
                                        Phone Number
                                    </InputLabel>
                                    <FormInputField id='contactNumber' name='contactNumber' value={formObj.contactNumber} onChange={handleChangeValue} />
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel shrink htmlFor="description">
                                        Message
                                    </InputLabel>
                                    <FormInputField id='description' name='description' value={formObj.description} onChange={handleChangeValue} multiline rows={4} />
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                                <MainButton>Send</MainButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
