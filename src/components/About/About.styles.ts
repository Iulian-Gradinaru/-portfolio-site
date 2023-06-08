import { styled } from '@mui/system';

export const Container = styled('div')(() => {
  return {
    backgroundColor: 'pink',
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
});

export const SkillsContainer = styled('div')(() => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  };
});

export const SkillItem = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    textAlign: 'center',
    maxWidth: '200px',

    img: {
      width: '100px',
      height: '100px',
    },

    p: {
      fontSize: '16px',
    },
  };
});
