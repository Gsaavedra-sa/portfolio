import * as HeaderStyles from './styles'

export const Header = () => {
  return (
    <HeaderStyles.HeaderContainer>
      <HeaderStyles.NameAndAvatar>
        <img src="https://github.com/gsaavedra-sa.png" alt="my image" />
        <span>Gabriel Alejandro Saavedra Saito</span>
      </HeaderStyles.NameAndAvatar>

      <HeaderStyles.Links>
        <a href="https://www.linkedin.com/in/gabriel-saito-459851148/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Gsaavedra-sa" target="_blank">Github</a>
       
      </HeaderStyles.Links>
    </HeaderStyles.HeaderContainer>
      
  )
}