import styled from 'styled-components';


export const ProjectContainer = styled.section`
  min-height: 100vh;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    width: 100%;
    max-width: 40rem;
    height: auto;
  }
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

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
    width: 50px;
    height: auto;
    filter: drop-shadow(rgb(153, 153, 153) 0px 0px 10px);
  }

  img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

   & + & {
     margin: 1rem;
   }
`;


