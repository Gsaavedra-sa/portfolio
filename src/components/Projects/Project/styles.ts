import styled from 'styled-components';


export const ProjectContainer = styled.section`
  min-height: 100vh;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
  }

  p {
    text-align: center;
    margin-top: 1rem;
  }
`;

export const TechContainer = styled.div`
  margin-top: 5rem;
  display: flex;

  span + span {
    margin-left: 1rem;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  img {
    max-width: 40px;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 0.8px #505050);
  }

  img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

   & + & {
     margin: 1rem;
   }
`;


