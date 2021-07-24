import * as HeaderStyles from './styles'

export const Header = () => {
  return (
    <HeaderStyles.HeaderContainer>
      <HeaderStyles.NameAndAvatar>
        <img src="https://github.com/gsaavedra-sa.png" alt="my image" />
        <span>Gabriel Alejandro</span>
      </HeaderStyles.NameAndAvatar>

      <HeaderStyles.Links>
        <a href="ewq" target="_blank">LinkedIn</a>
        <a href="ewq" target="_blank">Github</a>
      </HeaderStyles.Links>
    </HeaderStyles.HeaderContainer>
      
  )
}