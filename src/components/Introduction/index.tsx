import * as IntroductionStyles from './styles';

export const Introduction = () => {
  return (
    <IntroductionStyles.IntroductionContainer>
      <img src="/images/cloud-migration-final-blog.jpg" alt='introduction image' />

      <IntroductionStyles.IntroductionText>
        <h1>Hi there!</h1>
        <p>
          I'm Gabriel Saito, System Analyst at Technisys Company.
          I graduated in computer networks at the FATEC institution and graduated as a network technician at the SENAI institution.
        </p>
      </IntroductionStyles.IntroductionText>

    </IntroductionStyles.IntroductionContainer>
  )
}