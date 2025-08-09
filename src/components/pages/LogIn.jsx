import { Box, FormControl, Grid, InputAdornment, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CommonTypography, FormInputField, LinkButton, LogInTextField, MainButton } from '../../utils/StyledComponents'
import { AlternateEmail, Lock, Person, PhoneAndroid } from '@mui/icons-material';
import { validate } from '../../utils/CommonUtils';
import { UserLogin, UserSignUp } from '../../services/auth.services';

export default function LogIn() {
    const [formObj, setFormObj] = useState({
        email: '',
        password: ''
    });
    const [signUpObj, setSignUpObj] = useState({
        name: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: ''
    });

    // toggle between login signup
    const [isLoginOpen, setIsLoginOpen] = useState(true)
    // to activate error after focus
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChangeValue = (e) => {
        const { name, value } = e.target

        if (isLoginOpen) {
            setFormObj({
                ...formObj,
                [name]: value
            })
        } else {
            setSignUpObj({
                ...signUpObj,
                [name]: value
            })
        }

    }

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setTouched((prev) => ({ ...prev, [name]: true }));

        const errorMsg = validate(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(formObj)

        const newErrors = {
            email: validate('email', formObj.email),
            password: validate('password', formObj.password)
        }

        setErrors(newErrors)
        setTouched({ email: true, password: true })

        const isValid = !newErrors.email && !newErrors.password
        if (isValid) {
            UserLogin(formObj).then(LoginRes => {
                console.log('Form submitted:', LoginRes)
                alert('Login success')
                setFormObj({
                    email: '',
                    password: ''
                })
                window.location.href = "/"
            }).catch(err => console.error(err))
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log(signUpObj)

        const newErrors = {
            email: validate('email', signUpObj.email),
            password: validate('password', signUpObj.password)
        }

        setErrors(newErrors)
        setTouched({ email: true, password: true })

        const isValid = !newErrors.email && !newErrors.password
        if (isValid) {
            UserSignUp(signUpObj).then(SignUpRes => {
                console.log('Form submitted:', SignUpRes)
                alert('Sign Up success')

                setSignUpObj({
                    name: '',
                    email: '',
                    mobileNo: '',
                    password: '',
                    confirmPassword: ''
                })

                window.location.href = "/"
            }).catch(err => console.error(err))
        }
    }

    return (
        <React.Fragment>
            <Paper elevation={2} className='login-container'>
                {isLoginOpen ? (
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
                        <Grid size={12}>
                            <Typography variant='button' style={CommonTypography}>New user?</Typography><LinkButton onClick={() => setIsLoginOpen(false)}>Sign Up</LinkButton>
                        </Grid>
                    </Grid>
                ) : (
                    <Box sx={{
                        height: "100%",
                        overflowY: "auto"
                    }}>
                        <Grid container spacing={3} width={'100%'}>
                            <Grid size={12}>
                                <Typography variant='h5' display={'flex'} justifyContent={'center'} alignItems={'center'}>Sign Up</Typography>
                            </Grid>
                            <Grid size={12}>
                                <InputLabel shrink htmlFor='name'>Name</InputLabel>
                                <LogInTextField
                                    id='name'
                                    name='name'
                                    type='text'
                                    required
                                    variant='filled'
                                    fullWidth
                                    value={signUpObj.name}
                                    onChange={handleChangeValue}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                    slotProps={{
                                        input: {
                                            startAdornment:
                                                <InputAdornment position="start">
                                                    <Person />
                                                </InputAdornment>,
                                            disableUnderline: true,
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid size={12}>
                                <InputLabel shrink htmlFor='mobileNo'>Mobile Number</InputLabel>
                                <LogInTextField
                                    id='mobileNo'
                                    name='mobileNo'
                                    type='tel'
                                    required
                                    variant='filled'
                                    fullWidth
                                    value={signUpObj.mobileNo}
                                    onChange={handleChangeValue}
                                    onBlur={handleBlur}
                                    error={touched.mobileNo && Boolean(errors.mobileNo)}
                                    helperText={touched.mobileNo && errors.mobileNo}
                                    slotProps={{
                                        input: {
                                            startAdornment:
                                                <InputAdornment position="start">
                                                    <PhoneAndroid />
                                                </InputAdornment>,
                                            disableUnderline: true,
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid size={12}>
                                <InputLabel shrink htmlFor='email'>Email</InputLabel>
                                <LogInTextField
                                    id='email'
                                    name='email'
                                    type='email'
                                    required
                                    variant='filled'
                                    fullWidth
                                    value={signUpObj.email}
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
                                    type='password'
                                    fullWidth
                                    value={signUpObj.password}
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
                                <InputLabel shrink htmlFor='confirmPassword'>Confirm Password</InputLabel>
                                <LogInTextField
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    required
                                    variant='filled'
                                    fullWidth
                                    type='password'
                                    value={signUpObj.confirmPassword}
                                    onChange={handleChangeValue}
                                    onBlur={handleBlur}
                                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
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
                                <MainButton fullWidth onClick={handleSignUp}>Sign Up</MainButton>
                            </Grid>
                            <Grid size={12}>
                                <Typography variant='button' style={CommonTypography}>Already signed up?</Typography> <LinkButton onClick={() => setIsLoginOpen(true)}>Log In</LinkButton>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Paper>
        </React.Fragment>
    )
}
