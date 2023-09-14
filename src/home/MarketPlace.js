import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PostItem from './PostItem';
import { getAllPosts } from '../api-helpers/helpers';

// const MarketPlace = () => {
//   const [posts, setPosts] = useState();
//   useEffect(() => {
//     getAllPosts()
//       .then((data) => setPosts(data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <Box
//       display="flex"
//       flexDirection={'column'}
//       padding={3}
//       justifyContent="center"
//       alignItems={'center'}
//     >
//       {' '}
//       {posts &&
//         posts.map((item, index) => (
//           <PostItem
//             id={item._id}
//             instrument={item.instrument}
//             description={item.description}
//             price={item.price}
//             transactionType={item.transactionType}
//             user_id={item.user_id}
//             created_at={new Date(`${item.created_at}`).toLocaleDateString()}
//             key={index}
//           />
//         ))}
//     </Box>
//   );
// };

// export default MarketPlace;

const MarketPlace = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      padding={3}
      justifyContent="center"
      alignItems={'center'}
    >
      {' '}
      {posts &&
        posts.map((item, index) => (
          <PostItem
            id={item._id}
            instrument={item.instrument}
            description={item.description}
            price={item.price}
            transactionType={item.transactionType}
            user_id={item.user_id}
            created_at={new Date(`${item.created_at}`).toLocaleDateString()}
            username={item.username}
            key={index}
            user={item.user}
          />
        ))}
    </Box>
  );
};

export default MarketPlace;
