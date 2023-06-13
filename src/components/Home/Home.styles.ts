// import { styled } from '@mui/system';
// import worldMapImage from '../../assets/world-map-a167947e.png';

// export const Container = styled('div')({
//   backgroundImage: `url(${worldMapImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '100%',
//   paddingBottom: 0,
//   position: 'relative', // Add this property to enable positioning for the overlay
//   overflow: 'hidden',
// });

// export const ContainerText = styled('div')(() => ({
//   width: '80%',
//   margin: '100px auto 0', // Poziționează containerul la o distanță de 100px deasupra, centrându-l pe orizontală
// }));

// export const Title = styled('h1')(() => ({
//   marginLeft: '20px',
//   margin: '14px',
//   padding: '10px',
// }));

// export const Span = styled('span')(() => ({
//   color: '#858585',
// }));

// export const Paragraph = styled('p')(() => ({
//   marginLeft: '20px',
// }));

// export const ImageOverlay = styled('div')(() => ({
//   content: '""',
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   height: '100%',
//   width: '72%',
//   backgroundColor: '#000000a6', // Setați aici culoarea și transparența dorită
//   transform: 'skew(-30deg) translateX(35%)',
//   zIndex: 1,
//   maxWidth: '100vw',
// }));

// export const Img2 = styled('img')(() => ({
//   width: 488,
//   height: 518,
//   position: 'relative',
//   left: '30%',
// }));

import { styled } from '@mui/system';
import worldMapImage from '../../assets/world-map-a167947e.png';

export const Container = styled('div')({
  backgroundImage: `url(${worldMapImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: 0,
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
});

export const ContainerText = styled('div')(() => ({
  width: '80%',
  margin: '0 20px', // Adaugă margine de 20px în partea stângă și dreaptă
}));

export const Title = styled('h1')(() => ({
  marginLeft: '20px',
  margin: '14px',
  padding: '10px',
}));

export const Span = styled('span')(() => ({
  color: '#858585',
}));

export const Paragraph = styled('p')(() => ({
  marginLeft: '20px',
}));

export const ImageOverlay = styled('div')(() => ({
  content: '""',
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '72%',
  backgroundColor: '#000000a6',
  transform: 'skew(-30deg) translateX(35%)',
  zIndex: 1,
  maxWidth: '100vw',
}));

export const Img2 = styled('img')(() => ({
  width: 488,
  height: 518,
  position: 'relative',
  left: '30%',
}));
