// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormLabel,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Checkbox,
// } from '@mui/material';
import { sendLoginRequest } from '../api-helpers/helpers';

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     if (isSignup) {
//       sendLoginRequest(true, inputs)
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
//     } else {
//       sendLoginRequest(false, inputs)
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
//     }
//   };
//   const [inputs, setInputs] = useState({
//     name: '',
//     username: '',
//     password: '',
//     bio: '',
//     genre: '',
//     instrument: '',
//   });
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   return (
//     <Box
//       width="40%"
//       margin="auto"
//       marginTop={10}
//       borderRadius={10}
//       boxShadow={'5px 5px 10px #ccc'}
//     >
//       <form onSubmit={handleSubmit}>
//         <Box
//           display="flex"
//           flexDirection={'column'}
//           width="60%"
//           padding={5}
//           margin="auto"
//         >
//           <Typography padding={1} variant="h4" textAlign="center">
//             {isSignup ? 'Signup' : 'Login'}
//           </Typography>
//           {isSignup && (
//             <>
//               <FormLabel>Name</FormLabel>
//               <TextField
//                 onChange={handleChange}
//                 value={inputs.name}
//                 name="name"
//                 required
//                 margin="normal"
//               />
//             </>
//           )}
//           <FormLabel>Username</FormLabel>
//           <TextField
//             onChange={handleChange}
//             value={inputs.username}
//             name="username"
//             required
//             margin="normal"
//           />
//           <FormLabel>Password</FormLabel>
//           <TextField
//             onChange={handleChange}
//             value={inputs.password}
//             name="password"
//             type="password"
//             required
//             margin="normal"
//           />
//           {isSignup && (
//             <>
//               <FormLabel>Bio</FormLabel>
//               <TextField
//                 onChange={handleChange}
//                 value={inputs.bio}
//                 name="bio"
//                 margin="normal"
//               />
//             </>
//           )}
//           {isSignup && (
//             <>
//               <FormLabel>Genre</FormLabel>
//               <TextField
//                 onChange={handleChange}
//                 value={inputs.genre}
//                 name="genre"
//                 margin="normal"
//               />
//             </>
//           )}
//           {isSignup && (
//             <>
//               <FormLabel>Instrument</FormLabel>
//               <TextField
//                 onChange={handleChange}
//                 value={inputs.instrument}
//                 name="instrument"
//                 margin="normal"
//               />
//             </>
//           )}
//           <Button
//             sx={{ mt: 2, borderRadius: 10 }}
//             type="submit"
//             variant="contained"
//           >
//             {isSignup ? 'Signup' : 'Login'}
//           </Button>
//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             type="submit"
//             variant="outlined"
//           >
//             Change to {isSignup ? 'Login' : 'Signup'}
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
// import { sendLoginRequest } from './helpers';
// import Cookie from 'js-cookie';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendLoginRequest(true, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      sendLoginRequest(false, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    // // Set the cookie based on the "remember me" checkbox
    // if (rememberMe) {
    //   // Remember me is checked, set the cookie to expire after 10 days
    //   Cookie.set('userCredentials', inputs, { expires: 10 });
    // } else {
    //   // Remember me is not checked, set the cookie to expire after 30 minutes
    //   Cookie.set('userCredentials', inputs, { expires: 1 / 48 });
    // }
  };

  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    password: '',
    bio: '',
    genre: '',
    instrument: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      width="40%"
      margin="auto"
      marginTop={10}
      borderRadius={10}
      boxShadow={'5px 5px 10px #ccc'}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={'column'}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={1} variant="h4" textAlign="center">
            {isSignup ? 'Signup' : 'Login'}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                required
                margin="normal"
              />
            </>
          )}
          <FormLabel>Username</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.username}
            name="username"
            required
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type="password"
            required
            margin="normal"
          />
          {isSignup && (
            <>
              <FormLabel>Bio</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.bio}
                name="bio"
                required
                margin="normal"
              />
            </>
          )}
          {isSignup && (
            <>
              <FormLabel>Genre</FormLabel>
              <select
                onChange={handleChange}
                value={inputs.genre}
                name="genre"
                required
                margin="normal"
                style={{ width: '100%' }} // This will set the width to 100%
              >
                <option value="">Select Genre</option>
                <option value="Rock/Pop">Rock</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Indie">Indie</option>
                <option value="Jazz">Jazz</option>
                <option value="Mizrahit">Mizrahit</option>
                <option value="R&B">R&B</option>
                <option value="Classic">Classic</option>
                <option value="Other">Other</option>
              </select>
            </>
          )}

          {isSignup && (
            <>
              <FormLabel>Instrument</FormLabel>
              <select
                onChange={handleChange}
                value={inputs.instrument}
                name="instrument"
                required
                margin="normal"
                style={{ width: '100%' }} // This will set the width to 100%
              >
                <option value="">Select Instrument</option>
                <option value="Guitar">Guitar</option>
                <option value="Piano">Piano</option>
                <option value="Drums">Drums</option>
                <option value="Bass">Bass</option>
                <option value="Singer">Singer</option>
                <option value="DJ">DJ</option>
                <option value="Flute">Flute</option>
                <option value="Trumpet">Trumpet</option>
                <option value="Saxophone">Saxophone</option>
                <option value="Violin">Violin</option>
                <option value="Cello">Violin</option>
                <option value="Other">Other</option>
              </select>
            </>
          )}

          {!isSignup && (
            <>
              {/* "Remember me" checkbox with label */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                }
                label="Remember me"
              />
            </>
          )}

          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
          >
            {isSignup ? 'Signup' : 'Login'}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="outlined"
          >
            Change to {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
