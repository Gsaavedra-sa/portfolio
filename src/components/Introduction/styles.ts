import styled from 'styled-components';


export const IntroductionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: calc(100vh - 57px);

  max-width: 800px;
  margin: 0 auto;


  img {
    max-width: 320px;
    width: 100%;
    height: auto;
  }
`;

export const IntroductionText = styled.div`
  margin-left: 2rem;

  
  h1 {
    font-size: 5rem;
  }
`;