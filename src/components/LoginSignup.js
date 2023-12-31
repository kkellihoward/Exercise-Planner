import styled from 'styled-components';


//entire signup login component
export const Container = styled.div`
background-color: #7f44d4;
border-radius: 5px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 61vw;
height: 500px;
max-width: 100%;
min-height: 400px;
z-index: 1;
`;

//create account side
export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 color: #7f44d4;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;

//sign in side
export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
color: #7f44d4;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

//sign up words
export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
color: #7f44d4;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

//title on colored side of modal
export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

//input boxes for username password
export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;

//textt inside of login and sign up buttons
export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid #7f44d4;
  background-color: #7f44d4;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:hover {
  background-color: #c08fff;
  border-color: white;
  cursor: pointer;
  }
  &:active{
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

//text inside of the button that slides
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

//forgot password text
export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
color: #6E3CFD;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

//text for sign up side of modal
export const Overlay = styled.div` 
background: #7f44d4;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

//over layed text on colored side of panel
export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    background: #7f44d4;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 8px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

//Left side panel 
export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

//right side panel
export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;