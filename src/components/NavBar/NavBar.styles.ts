import { styled } from '@mui/system';

export const Container = styled('nav')(() => ({
  backgroundColor: '#F1C376',
  height: '13vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 10,
  fontSize: 30,
  gap: 20,
  color: 'black',
}));

export const Paragraph = styled('p')(() => ({
  marginRight: 'auto',
  padding: 10,
  fontSize: 30,
  fontWeight: 500,
}));
