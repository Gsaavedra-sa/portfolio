import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;  
`;

export const NameAndAvatar = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
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