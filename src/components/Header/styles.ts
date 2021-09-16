import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center; 


  a {
    img {
      height: 40px;
      width: 40px;
      filter: drop-shadow(rgb(153, 153, 153) 0px 0px 2px);


      &:hover {
        transform: scale(1.1);
        transition: filter 0.5s;
      }
    }
  }
  
`;

export const NameAndAvatar = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const Links = styled.div`
  display: flex;

  a + a {
    margin-left: 1rem;
  }
`;