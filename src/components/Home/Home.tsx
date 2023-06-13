import {
  Container,
  Title,
  ImageOverlay,
  // BackgroundImage,
  // Img1,
  Span,
  Img2,
  Paragraph,
  ContainerText,
} from './Home.styles';

import word from '../../assets/world-map-a167947e.png';
import worldMapImage from '../../assets/world-map-a167947e.png';
import portret from '../../assets/portret.jpg';
import react from '../../assets/react.png';
// import react from '../../assets/large@2x.avif';

// export const Home: React.FC = () => {
//   return (
//     <Container>
//       <Title>Hi, my name is Iulian</Title>
//       <ImagesContainer>
//         <ImageContainer>
//           <ImageOverlay />
//           {/* <Img1 src={word} alt="word-map" /> */}
//         </ImageContainer>
//         <Img2 src={portret} alt="Portret" />
//       </ImagesContainer>
//     </Container>
//   );
// };
export const Home: React.FC = () => {
  return (
    <Container>
      <ContainerText>
        <Title>
          HI, I'M
          <br />
          <Span>JULIAN</Span>
        </Title>
        <Paragraph>
          Sunt pasionat de programare. Obiectivul meu <br />
          este de a avea o carieră de succes în acest domeniu.
        </Paragraph>
      </ContainerText>
      <ImageOverlay />
      <Img2 src={react} alt="React" />
    </Container>
  );
};
