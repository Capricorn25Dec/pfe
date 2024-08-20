import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize, Container, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function MonitoringNotes() {
  const [date, setDate] = useState(dayjs());
  const [targetMachine, setTargetMachine] = useState('');
  const [reporter, setReporter] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dayjs(date).isAfter(dayjs())) {
      alert('Date and time cannot be in the future.');
      return;
    }
    const data = {
      datetime: date.format(), // Convert date to ISO string
      target_machine: targetMachine,
      reporter: reporter,
      notes: notes
    };
    // Handle form submission, for example, sending data to a backend service.
    try {
      const response = await fetch('http://my.host:8000/monitoring/note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const result = await response.json();
      console.log('Success:', result);
      // Handle successful response
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }

  };
  
  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date and Time"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
          />
        </LocalizationProvider>
        <TextField
          label="Target Machine"
          value={targetMachine}
          onChange={(e) => setTargetMachine(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Reporter"
          value={reporter}
          onChange={(e) => setReporter(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextareaAutosize
          aria-label="Notes"
          minRows={5}
          placeholder="Notes"
          style={{ width: '100%', marginTop: '16px', padding: '8px' }}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default MonitoringNotes;
