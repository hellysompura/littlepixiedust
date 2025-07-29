import { FormControl, Grid, InputAdornment, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FormInputField, LogInTextField, MainButton } from '../../utils/StyledComponents'
import { AlternateEmail, Lock } from '@mui/icons-material';
import { validate } from '../../utils/CommonUtils';

export default function LogIn() {
    const [formObj, setFormObj] = useState({
        email: '',
        password: ''
    });
    // to activate error after focus
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChangeValue = (e) => {
        const { name, value } = e.target

        setFormObj({
            ...formObj,
            [name]: value
        })

    }

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setTouched((prev) => ({ ...prev, [name]: true }));

        const errorMsg = validate(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }

    const handleLogin = () => {
        console.log(formObj)
    }

    return (
        <React.Fragment>
            <Paper elevation={2} className='login-container'>
                <Grid container spacing={3} width={'100%'}>
                    <Grid size={12}>
                        <Typography variant='h5' display={'flex'} justifyContent={'center'} alignItems={'center'}>Log In</Typography>
                    </Grid>
                    <Grid size={12}>
                        <InputLabel shrink htmlFor='email'>Email</InputLabel>
                        <LogInTextField
                            id='email'
                            name='email'
                            // label='Email'
                            required
                            variant='filled'
                            fullWidth
                            value={formObj.email}
                            onChange={handleChangeValue}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            slotProps={{
                                input: {
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <AlternateEmail />
                                        </InputAdornment>,
                                    disableUnderline: true,
                                }
                            }}
                        />

                    </Grid>
                    <Grid size={12}>
                        <InputLabel shrink htmlFor='password'>Password</InputLabel>
                        <LogInTextField
                            id='password'
                            name='password'
                            required
                            variant='filled'
                            fullWidth
                            value={formObj.password}
                            onChange={handleChangeValue}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            slotProps={{
                                input: {
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>,
                                    disableUnderline: true,
                                }
                            }}
                        />
                    </Grid>
                    <Grid size={12}>
                        <MainButton fullWidth onClick={handleLogin}>Log In</MainButton>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}
