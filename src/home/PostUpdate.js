import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails } from '../api-helpers/helpers';

const PostUpdate = () => {
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getPostDetails(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
};

export default PostUpdate;
