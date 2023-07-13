import styled from '@emotion/styled';
import { ReactComponent as LogoSvg } from '../../assets/icon/logo.svg';
import pictureBgCard from '../../assets/img/pictureBgCard.png';
import { ReactComponent as Frame } from '../../assets/icon/frame.svg';
export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 380px;
  max-height: 460px;
  min-width: 380px;
  min-height: 460px;
  position: relative;
  padding: 28px 36px 36px;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  align-items: center;
`;

export const StyledLogo = styled(LogoSvg)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const CardLabel = styled.div`
  min-width: 308px;
  max-width: 308px;
  min-height: 168px;
  max-height: 168px;
  background-image: url(${pictureBgCard});
  background-position: center;
  background-size: cover;
`;

export const WhiteLine = styled.div`
  position: relative;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const FrameStyled = styled(Frame)`
  width: 80px;
  height: 80px;
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
`;

// import styled from '@emotion/styled';
// import { ReactComponent as LogoSvg } from '../../assets/icon/logo.svg';
// import pictureBgCard from '../../assets/img/pictureBgCard.png';
// import { ReactComponent as Frame } from '../../assets/icon/frame.svg';

// export const UserCardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   max-width: 380px;
//   max-height: 460px;
//   min-width: 380px;
//   min-height: 460px;
//   position: relative;
//   padding: 28px 36px 36px;
//   border-radius: 20px;
//   background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
//   box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
//     rgba(0, 0, 0, 0.23);
//   align-items: center;
// `;

// export const StyledLogo = styled(LogoSvg)`
//   position: absolute;
//   left: 20px;
//   top: 20px;
// `;

// export const CardLabel = styled.div`
//   min-width: 308px;
//   max-width: 308px;
//   min-height: 168px;
//   max-height: 168px;
//   background-image: url(${pictureBgCard});
//   background-position: center;
//   background-size: cover;
// `;

// export const WhiteLine = styled.div`
//   position: relative;
//   height: 8px;
//   background: #ebd8ff;
//   box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
//     0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
//     0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;

//   ::before {
//     content: '';
//     position: absolute;
//     top: -11px;
//     left: 0;
//     right: 0;
//     height: 80px;
//     background-image: url(${pictureBgCard});
//     background-position: center;
//     background-size: cover;
//     z-index: -1;
//   }
// `;

// export const FrameStyled = styled(Frame)`
//   width: 80px;
//   height: 80px;
//   position: relative;
//   margin-top: -90px;
// `;

// export const UserCard = ({ id, user, avatar, tweets, followers }) => {
//   // ...
//   // Остальной код компонента UserCard
//   // ...
// };
