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
  const [inputs, setInputs] = useState({
    instrument: '',
    description: '',
    price: '',
    transactionType: '', // Add a new state for the transaction type
    session_id: Cookies.get('session_id'),
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle the radio button change
  const handleRadioChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      transactionType: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addPost(inputs)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box display="flex" flexDirection={'column'} width="100%" height="100%">
      <Box display="flex" margin="auto">
        <Typography fontWeight={'bold'} variant="h4">
          Buy/Sell An Instrument
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display="flex"
          margin="auto"
          flexDirection={'column'}
          width="80%"
        >
          <FormLabel>Instrument</FormLabel>
          <TextField
            onChange={handleChange}
            name="instrument"
            value={inputs.instrument}
            variant="standard"
            margin="normal"
          />
          <FormLabel>Describe The Instrument</FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={inputs.description}
            variant="standard"
            margin="normal"
          />
          <FormLabel>Price</FormLabel>
          <TextField
            onChange={handleChange}
            name="price"
            value={inputs.price}
            variant="standard"
            margin="normal"
          />
          {/* Radio buttons for Buy/Sell */}
          <FormControl component="fieldset">
            <FormLabel component="legend">What Would You Like To Do</FormLabel>
            <RadioGroup
              aria-label="transactionType"
              name="transactionType"
              value={inputs.transactionType}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="Buy"
                control={<Radio color="primary" />}
                label="Buy"
              />
              <FormControlLabel
                value="Sell"
                control={<Radio color="primary" />}
                label="Sell"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            color="warning"
            sx={{ width: '50%', margin: 'auto', mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PostUpdate;
