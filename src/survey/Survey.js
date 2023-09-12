import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Box,
} from '@mui/material';

const Survey = () => {
  const [selectedBand, setSelectedBand] = useState('');
  const [otherBand, setOtherBand] = useState('');
  const [results, setResults] = useState({
    'The Beatles': 0,
    'Led Zeppelin': 0,
    Queen: 0,
    'Pink Floyd': 0,
    Other: 0,
  });

  const handleBandChange = (event) => {
    setSelectedBand(event.target.value);
  };

  const handleOtherBandChange = (event) => {
    setOtherBand(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedBand === 'Other') {
      if (otherBand.trim() !== '') {
        setResults((prevResults) => ({
          ...prevResults,
          [otherBand]: (prevResults[otherBand] || 0) + 1,
        }));
        setOtherBand('');
      }
    } else {
      setResults((prevResults) => ({
        ...prevResults,
        [selectedBand]: (prevResults[selectedBand] || 0) + 1,
      }));
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Best Band Survey
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Vote for the Best Band in the World
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select a band:</FormLabel>
          <RadioGroup
            name="band"
            value={selectedBand}
            onChange={handleBandChange}
          >
            <FormControlLabel
              value="The Beatles"
              control={<Radio />}
              label="The Beatles"
            />
            <FormControlLabel
              value="Led Zeppelin"
              control={<Radio />}
              label="Led Zeppelin"
            />
            <FormControlLabel value="Queen" control={<Radio />} label="Queen" />
            <FormControlLabel
              value="Pink Floyd"
              control={<Radio />}
              label="Pink Floyd"
            />
            <FormControlLabel
              value="Other"
              control={<Radio />}
              label="Other (Please specify):"
            />
          </RadioGroup>
          {selectedBand === 'Other' && (
            <TextField
              label="Other Band"
              variant="outlined"
              fullWidth
              value={otherBand}
              onChange={handleOtherBandChange}
            />
          )}
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Vote
        </Button>
      </form>
      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Survey Results
        </Typography>
        <ul>
          {Object.entries(results).map(([band, count]) => (
            <li key={band}>
              {band}: {count}
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Survey;
