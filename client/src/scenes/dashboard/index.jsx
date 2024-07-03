import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, CardMedia, Grid, TextField,  Button } from '@mui/material';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    city: '',
    category: '',
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost/server/public/retrieve_event.php');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
          setFilteredEvents(data);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filterEvents = () => {
    const filtered = events.filter(event => {
      const eventStartDate = new Date(event.start_time).toISOString().split('T')[0];
      const eventEndDate = new Date(event.end_time).toISOString().split('T')[0];
      const filterDate = filters.date ? new Date(filters.date).toISOString().split('T')[0] : '';
      
      const isDateMatch = !filterDate || ((eventStartDate <= filterDate) && (eventEndDate >= filterDate));
      const isCityMatch = !filters.city || event.location.toLowerCase().includes(filters.city.toLowerCase());
      const isCategoryMatch = !filters.category || event.category.toLowerCase().includes(filters.category.toLowerCase());

      return isDateMatch && isCityMatch && isCategoryMatch;
    });

    setFilteredEvents(filtered);
  };

  return (
    <Box p={3}>
      <Box mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name="date"
              color='secondary'
              label="Date"
              type="date"
              fullWidth
              value={filters.date}
              onChange={handleFilterChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="city"
              color='secondary'
              label="City"
              fullWidth
              value={filters.city}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="category"
              color='secondary'
              label="Category"
              fullWidth
              value={filters.category}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={filterEvents}>
              Apply Filters
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`data:image/jpeg;base64,${event.banner_image}`}
                alt={event.event_name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {event.event_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(event.start_time).toLocaleString()} - {new Date(event.end_time).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {event.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
