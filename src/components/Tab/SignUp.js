import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, FormControlLabel, Checkbox, Tab, Tabs, Avatar, Input, InputLabel, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/img/logo.svg';
import axios from 'axios';
import './SignUP.css';
const RegisterForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
});

const RegisterCard = styled(Card)({
    width: '400px',
    margin: '0 auto',
});

const LogoImage = styled('img')({
    width: '50px',
    display: 'block',
    margin: '0 auto 20px',
});

const EyeButton = styled(Button)({
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
});

export default function SignUP() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [userType, setUserType] = useState('user');

    const [mechanicName, setMechanicName] = useState('');
    const [mechanicCnic, setMechanicCnic] = useState('');
    const [mechanicPhoneNumber, setMechanicPhoneNumber] = useState('');
    const [mechanicService, setMechanicService] = useState('');
    const [mechanicPassword, setMechanicPassword] = useState('');
    const [mechanicAvatar, setmechanicAvatar] = useState('');
    const [mechanicUtilityImage, setMechanicUtilityImage] = useState('');
    const [mechanicLocation, setMechanicLocation] = useState('');

    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                console.log('success');
                setAvatar(fileReader.result);
            };
        } else if (e.target.name === 'mechanicAvatar') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                console.log('success');
                setmechanicAvatar(fileReader.result);
            };
        } else if (e.target.name === 'mechanicbill') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                console.log('success');
                setMechanicUtilityImage(fileReader.result);
            };
        } else {
            setAvatar('error', e); // Set avatar to the value of the input field
        }
    };


    //const handleProfileImageChange = (e) => {
    //};

    //const uploadImg = async (e) => {
    //    //setAvatar(e.target.files[0]);
    //    //if (!avatar) {
    //    //    console.error('No file selected!', avatar);
    //    //    return;
    //    //}

    //    const formData = new FormData();
    //    formData.append('file', avatar);
    //    try {
    //        const recover = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/userregister', formData)
    //        console.log('File uploaded successfully:', recover.data);
    //        if (recover.data && recover.data.avatar && Object.keys(recover.data.avatar).length > 0) {
    //            setAvatar(recover.data.avatar);
    //        } else {
    //            console.log('Avatar data is empty.');
    //        }
    //    } catch (error) {
    //        console.error('Error uploading file:', error);
    //    };



    //}

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/userregister', {
                userName: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                avatar: avatar
            });

            if (response && response.data) {
                console.log('Registration successful:', response.data);
            }
        } catch (error) {
            console.error('Registration error:', error);
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        console.log('Avatar:', avatar);
    };

    const mechanicHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/mechanicregister', {
                CNIC: mechanicCnic,
                name: mechanicName,
                phoneNumber: mechanicPhoneNumber,
                location: mechanicLocation,
                service: mechanicService,
                password: mechanicPassword,
                avatar: mechanicAvatar,
                utilityImage: mechanicUtilityImage
            });

            if (response && response.data) {
                console.log('Registration successful:', response.data);
            }
        } catch (error) {
            console.error('Registration error:', error);
            console.log(mechanicAvatar)
        }

        console.log('Name:', mechanicName);
        console.log('Phone Number:', mechanicPhoneNumber);
        console.log('Password:', mechanicPhoneNumber);
        console.log('mechanicAvatar:', mechanicAvatar);
        console.log('mechanicAvatar:', mechanicUtilityImage);

    };



    //const handleSubmit = async (e) => {
    //    e.preventDefault();

    //    const formData = new FormData();
    //    formData.append('name', name);
    //    formData.append('email', email);
    //    formData.append('phoneNumber', phoneNumber);
    //    formData.append('password', password);

    //    const avatarInput = document.getElementById('profile-image-input');
    //    if (avatarInput.files.length > 0) {
    //        formData.append('avatar', avatarInput.files[0].name);
    //    }
    //    const file = avatarInput.files[0];
    //    const fileName = file.name;

    //    console.log('Name:', name);
    //    console.log('Email:', email);
    //    console.log('Phone Number:', phoneNumber);
    //    console.log('Password:', password);
    //    console.log('Avatar:', fileName);
    //    console.log('Avatar:', formData);

    //    try {
    //        const response = await axios({
    //            method: 'post',
    //            url: 'https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/userregister',
    //            data: formData,
    //            headers: {
    //                'Content-Type': 'multipart/form-data',
    //            },
    //        });
    //        console.log('Registration successful:', response.data);
    //    } catch (error) {
    //        console.error(error);
    //    }
    //};

    //const handleUtilityBillChange = (event) => {
    //    const billFile = event.target.files[0];
    //    setUtilityBill(billFile);
    //};
    const handleLocationChange = (e) => {
        setMechanicLocation(e.target.value);
    };


    return (
        <section>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container maxWidth={'lg'}>
                    <Grid pt={20} pb={15} container >
                        <RegisterCard>
                            <CardContent >
                                <LogoImage src={logo} alt="Logo" />
                                <Typography variant="h5" align="center" gutterBottom>
                                    Sign Up
                                </Typography>
                                <Tabs
                                    value={userType}
                                    onChange={(event, newValue) => setUserType(newValue)}
                                    variant="fullWidth"
                                    indicatorColor="primary"
                                    textColor="primary"
                                    aria-label="user type tabs"
                                >
                                    <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem' }} label="User" value="user" />
                                    <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem' }} label="Mechanic" value="mechanic" />
                                </Tabs>
                                {userType === 'user' && (
                                    <RegisterForm sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={{ position: 'relative' }}>
                                            {/*<label htmlFor="profile-image-input">
                                                <Avatar
                                                    sx={{ width: 120, height: 120 }}
                                                    src={avatar ? URL.createObjectURL(avatar) : ''}
                                                />
                                            </label>*/}
                                            <input
                                                type="file"
                                                id='profile-image-input'
                                                accept="image/jpeg"
                                                onChange={handleChange}
                                                name="avatar"
                                            />

                                            {/*<label htmlFor="profile-image-input">
                                                <Button onClick={uploadImg} disableRipple={true} sx={{ backgroundColor: 'var(--orange)' }} variant="contained" component="span">
                                                    Upload Profile Image
                                                </Button>
                                            </label>*/}
                                        </Box>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        <Grid sx={{ width: '100%' }} style={{ position: 'relative' }}>
                                            <TextField
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                fullWidth
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </EyeButton>
                                        </Grid>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I accept the terms and conditions."
                                        />
                                        <Button onClick={handleSubmit} disableRipple={true} sx={{ backgroundColor: 'var(--orange)' }} className='btn btn-orange' type="submit" variant="contained" color="primary" fullWidth>
                                            Sign Up
                                        </Button>
                                    </RegisterForm>

                                )}
                                {userType === 'mechanic' && (
                                    <RegisterForm sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit}>
                                        <Box sx={{ position: 'relative' }}>
                                            {/*<label htmlFor="mechanic-profile-image">
                                                <Avatar
                                                    sx={{ width: 120, height: 120 }}
                                                    src={profileImage ? URL.createObjectURL(profileImage) : ''}
                                                />
                                            </label>*/}

                                            <input
                                                type="file"
                                                id='profile-image-input2'
                                                accept="image/jpeg"
                                                onChange={handleChange}
                                                name="mechanicAvatar"
                                            />

                                            {/*<label htmlFor="mechanic-profile-image">
                                                <Button disableRipple={true} sx={{ backgroundColor: 'var(--orange)' }} variant="contained" component="span">
                                                    Upload Profile Image
                                                </Button>
                                            </label>*/}
                                        </Box>

                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            value={mechanicName}
                                            onChange={(e) => setMechanicName(e.target.value)}

                                        />
                                        <select value={mechanicLocation} onChange={handleLocationChange}>
                                            <option value="">--</option>
                                            <option value="Karachi South">Karachi South</option>
                                            <option value="Karachi East">Karachi East</option>
                                            <option value="Karachi West">Karachi West</option>
                                            <option value="Karachi Central">Karachi Central</option>
                                            <option value="Karachi North">Karachi North</option>
                                            <option value="Korangi">Korangi</option>
                                        </select>
                                        <TextField
                                            label="Service Name"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(e) => setMechanicService(e.target.value)}
                                        />
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                            value={mechanicPhoneNumber}
                                            onChange={(e) => setMechanicPhoneNumber(e.target.value)}
                                        />

                                        <TextField
                                            label="CNIC"
                                            variant="outlined"
                                            fullWidth
                                            value={mechanicCnic}
                                            onChange={(e) => setMechanicCnic(e.target.value)}

                                        />

                                        <Grid sx={{ width: '100%' }} style={{ position: 'relative' }}>
                                            <TextField
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                fullWidth
                                                value={mechanicPassword}
                                                onChange={(e) => setMechanicPassword(e.target.value)}
                                            />
                                            <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </EyeButton>
                                        </Grid>

                                        <input
                                            type="file"
                                            id='profile-image-input3'
                                            accept="image/jpeg"
                                            onChange={handleChange}
                                            name="mechanicbill"
                                        />
                                        {/*<InputLabel sx={{ width: '100%' }} htmlFor="utility-bill-input">
                                            <Button disableRipple={true} sx={{ backgroundColor: 'var(--orange)' }} className='btn btn-orange' variant="contained" component="span" fullWidth>
                                                Utility Bill  {utilityBill && <Typography> {utilityBill.name}</Typography>}
                                            </Button>
                                        </InputLabel>*/}
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I accept the terms and conditions."
                                        />
                                        <Button onClick={mechanicHandleSubmit} disableRipple={true} sx={{ backgroundColor: 'var(--orange)' }} className='btn btn-orange' type="submit" variant="contained" color="primary" fullWidth>
                                            Sign Up
                                        </Button>
                                    </RegisterForm>
                                )}

                            </CardContent>
                        </RegisterCard>
                    </Grid>
                </Container>
            </Box >
        </section>
    );
}
