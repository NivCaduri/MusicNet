import axios from 'axios';

export const getAllPosts = async () => {
  const res = await axios.get('/posts');
  if (res.status !== 200) {
    return console.log('Some Error Occurred');
  }

  const data = res.data;
  return data;
};

// export const sendLoginRequest = async (signup, data) => {
//   const res = await axios
//     .post(
//       `/users/${signup ? 'signup' : 'login'}`,
//       {
//         name: data.name ? data.name : '',
//         username: data.username,
//         password: data.password,
//       },
//       { withCredentials: true }
//     )
//     .catch((err) => console.log(err));

//   if (res.status !== 200 && res.status !== 201) {
//     return console.log('Unable to Login');
//   }
//   const resData = await res.data;
//   return resData;
// };

export const sendLoginRequest = async (signup, data) => {
  try {
    const res = await axios.post(
      `/users/${signup ? 'signup' : 'login'}`,
      {
        name: data.name ? data.name : '',
        username: data.username,
        password: data.password,
        bio: data.bio ? data.bio : '',
        genre: data.genre ? data.genre : '',
        instrument: data.instrument ? data.instrument : '',
      },
      { withCredentials: true }
    );

    if (res.status === 200 || res.status === 201) {
      // Login successful, handle redirection here
      window.location.href = '/welcome'; // Redirect to the welcome page
    } else {
      console.log('Unable to Login');
    }
  } catch (err) {
    console.log(err);
  }
};

export const addPost = async (data) => {
  const res = await axios
    .post(
      '/posts',
      {
        instrument: data.instrument,
        description: data.description,
        price: data.price,
        transactionType: data.transactionType,
      },
      { withCredentials: true }
    )
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log('Error Occurred');
  }

  const resData = await res.data;
  return resData;
};
