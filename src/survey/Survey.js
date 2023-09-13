import React, { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { getSurveyDetails } from '../api-helpers/helpers';

const Survey = () => {
  const [selectedBand, setSelectedBand] = useState('');
<<<<<<< HEAD
  const [results, setResults] = useState({});
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    // Fetch survey data from the server using the getSurveyDetails function
    getSurveyDetails()
      .then((data) => {
        setSurvey(data);
      })
      .catch((err) => console.error(err));
  }, []);
=======
  const [results, setResults] = useState({
    'The Beatles': 0,
    'Led Zeppelin': 0,
    'Queen': 0,
    'Pink Floyd': 0,
  });
>>>>>>> 6c6a0a03f9026e86cdf6c6569b5b5e9f711d1c22

  const handleBandChange = (event) => {
    setSelectedBand(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedBand !== '') {
      setResults((prevResults) => ({
        ...prevResults,
        [selectedBand]: (prevResults[selectedBand] || 0) + 1,
      }));
    }
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Best Band Survey
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Vote for the Best Band in the World 🎵
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: '16px',
                backgroundColor: '#F8F8F8',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Select a band:
              </Typography>
              <RadioGroup
                name="band"
                value={selectedBand}
                onChange={handleBandChange}
              >
                {survey.map((item) => (
                  <FormControlLabel
                    key={item.band}
                    value={item.band}
                    control={<Radio sx={{ color: '#FF6B6B' }} />}
<<<<<<< HEAD
                    label={item.band}
=======
                    label={bandName}
>>>>>>> 6c6a0a03f9026e86cdf6c6569b5b5e9f711d1c22
                  />
                ))}
              </RadioGroup>

<<<<<<< HEAD
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  mt: 2,
                  backgroundColor: '#FF6B6B',
                  color: 'white',
                  '&:hover': { backgroundColor: '#FF5757' },
                }}
              >
=======
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, backgroundColor: '#FF6B6B', color: 'white', '&:hover': { backgroundColor: '#FF5757' } }}>
>>>>>>> 6c6a0a03f9026e86cdf6c6569b5b5e9f711d1c22
                Vote
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </form>

      <Box mt={3} sx={{ margin: '0 auto', maxWidth: '80%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Survey Results
        </Typography>
        <Card
          variant="outlined"
          sx={{ border: '1px solid #ccc', backgroundColor: '#F8F8F8' }}
        >
          <CardContent>
            <ul
              style={{
                listStyleType: 'none',
                fontSize: '1.5rem',
                margin: 0,
                padding: 0,
              }}
            >
              {Object.entries(results).map(([band, count]) => (
                <li key={band}>
                  {band}: {count}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Survey;
