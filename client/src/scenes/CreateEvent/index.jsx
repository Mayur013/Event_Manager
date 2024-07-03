import React, { useState } from 'react';
import { Box, Button, TextField, Snackbar } from '@mui/material';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    event_name: '',
    start_time: '',
    end_time: '',
    location: '',
    description: '',
    category: '',
    banner_image: null,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEventData({ ...eventData, banner_image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in eventData) {
      formData.append(key, eventData[key]);
    }

    try {
      const response = await fetch('http://localhost/server/public/create_event.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSnackbarMessage('Event created successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);

        console.log('Event created successfully');
        // Optionally, reset form fields after successful submission
        setEventData({
          event_name: '',
          start_time: '',
          end_time: '',
          location: '',
          description: '',
          category: '',
          banner_image: null,
        });
      } else {
        setSnackbarMessage('Failed to create event');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);

        console.error('Failed to create event');
      }
    } catch (error) {
      setSnackbarMessage('Error creating event');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);

      console.error('Error creating event:', error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className='padd'>
      <form onSubmit={handleSubmit}>
        <div className="tte">
          <TextField
            name="event_name"
            color='secondary'
            label="Event Name"
            value={eventData.event_name}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="tte " >
          <TextField
            name="start_time"
            color='secondary'
            label="___________________Start Time"
            type="datetime-local"
            value={eventData.start_time}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="tte">
          <TextField
            name="end_time"
            color='secondary'
            label="___________________End Time"
            type="datetime-local"
            value={eventData.end_time}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="tte">
          <TextField
            name="location"
            color='secondary'
            label="Location"
            value={eventData.location}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="tte">
          <TextField
            name="description"
            color='secondary'
            label="Description"
            multiline
            rows={4}
            value={eventData.description}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="tte">
          <TextField
            name="category"
            color='secondary'
            label="Category"
            value={eventData.category}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="tte">
          <input
            accept="image/*"
            color='secondary'
            id="banner-image-upload"
            type="file"
            onChange={handleFileChange}
            required
          />
          <label htmlFor="banner-image-upload">
            <Button variant="contained" color="secondary" component="span">
              Upload Banner Image
            </Button>
          </label>
        </div>
        <Box mt={2}>
          <Button type="submit" variant="contained" color="secondary">
            Create Event
          </Button>
        </Box>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        severity={snackbarSeverity}
        message={snackbarMessage}
      />
    </div>
  );
};

export default CreateEvent;
