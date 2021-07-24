import * as IntroductionStyles from './styles';

export const Introduction = () => {
  return (
    <IntroductionStyles.IntroductionContainer>
      <img src="https://github.com/gsaavedra-sa.png" alt='introduction image' />

      <IntroductionStyles.IntroductionText>
        <h1>Hello there!</h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </IntroductionStyles.IntroductionText>

    </IntroductionStyles.IntroductionContainer>
  )
}