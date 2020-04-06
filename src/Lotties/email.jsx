// UncontrolledLottie.jsx
import React from 'react';
import Styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './email.json';

const Email = Styled.div`
    @media screen and (max-width: ${(props) => props.theme.moblie}) {
        width: 40px;
    }
`

const email = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return (
        <Email>
          <Lottie options={defaultOptions}
                height={160}
                width={160}
          />
        </Email>
    )
}

export default email;