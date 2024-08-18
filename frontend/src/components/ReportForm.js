// src/components/ReportForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { submitReport } from '../services/api';

const ReportForm = () => {
  const [datetime, setDatetime] = useState(new Date());
  const [reporter, setReporter] = useState('');
  const [targetMachine, setTargetMachine] = useState('');
  const [notes, setNotes] = useState('');
  const [authToken] = useState('your-auth-token'); // Placeholder for auth-token

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      'auth-token': authToken,
      datetime: datetime.toISOString(),
      reporter,
      target_machine: targetMachine,
      notes,
    };

    try {
      await submitReport(data);
      alert('Report submitted successfully!');
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Failed to submit report.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date & Time:</label>
        <DatePicker
          selected={datetime}
          onChange={(date) => setDatetime(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div>
        <label>Reporter:</label>
        <input
          type="text"
          value={reporter}
          onChange={(e) => setReporter(e.target.value)}
        />
      </div>
      <div>
        <label>Target Machine:</label>
        <input
          type="text"
          value={targetMachine}
          onChange={(e) => setTargetMachine(e.target.value)}
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
