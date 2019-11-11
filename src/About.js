import React from 'react';
import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

function About(props) {
  return (
    <AboutContainer>
      About Page
    </AboutContainer>
  );
}

export default About;