import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { StyledBox, StyledTypography } from './Contact.styles';

export const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const values = Object.fromEntries(formData.entries());
    console.log(values);

    const form = event.target as HTMLFormElement;
    form.reset();
  };
  return (
    <StyledBox>
      <StyledTypography variant="h2">Contact</StyledTypography>
      <Typography variant="body1">
        Informații de contact sau un formular de contact.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nume" name="nume" fullWidth margin="normal" />
        <TextField label="Email" name="email" fullWidth margin="normal" />
        <TextField
          label="Mesaj"
          name="mesaj"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" type="submit">
          Trimite
        </Button>
      </form>
    </StyledBox>
  );
};

export default Contact;
