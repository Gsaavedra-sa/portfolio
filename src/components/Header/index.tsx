import * as HeaderStyles from './styles'

export const Header = () => {
  return (
    <HeaderStyles.HeaderContainer>
      <HeaderStyles.NameAndAvatar>
        <img src="https://github.com/gsaavedra-sa.png" alt="my image" />
        <span>Gabriel Alejandro Saavedra Saito</span>
      </HeaderStyles.NameAndAvatar>

      <HeaderStyles.Links>
      <a href="https://www.youtube.com/channel/UCjjb8hs2c4PvktiG8UcSJdA/videos" target="_blank">
          <img src="/images/icons8-reproduzir-youtube.svg" alt="github logo"  />
        </a>
        <a href="https://github.com/Gsaavedra-sa" target="_blank">
          <img src="/images/github-icon-1.svg" alt="github logo"  />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-saito-459851148/" target="_blank">
          <img src="/images/linkedin-icon-2.svg" alt="linkedin logo"  />
        </a>
       
      </HeaderStyles.Links>
    </HeaderStyles.HeaderContainer>
      
  )
}