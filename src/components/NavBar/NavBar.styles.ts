import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { CustomNavLinkProps } from './NavBar.type';

export const Container = styled('nav')(() => ({
  backgroundColor: '#F1C376',
  height: '5vh',
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

export const CustomNavLink = styled(NavLink, {
  shouldForwardProp: (propName) => propName !== 'isActive',
})<CustomNavLinkProps>((props) => {
  const { isActive } = props;

  return {
    textDecoration: 'none',
    border: '4px solid transparent',
    display: 'inline-block',
    verticalAlign: 'top',
    // lineHeight: 36,
    // textTransform: 'uppercase',
    // color: 'black',
    // letterSpacing: '0.2em',
    textAlign: 'center',
    fontSize: 30,
    // margin: '10px',
    position: 'relative',
    '&::after': {
      width: '0%',
      height: 4,
      display: 'block',
      backgroundColor: '#black',
      content: ' ',
      position: 'absolute',
      top: 34,
      left: '50%',
      transition:
        'left 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    ...(isActive && {
      '&::after': {
        width: '100%',
        top: 34,
        left: '0',
      },
    }),
  };
});
