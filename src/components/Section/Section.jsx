import * as s from './Section.styled';

export const Section = ({ title, children }) => (
  <s.Section>
    <s.Container>
      <s.StyledLink to="/">{'<<'} HOME</s.StyledLink>
    </s.Container>

    {title && <s.SectionTitle>{title}</s.SectionTitle>}
    {children}
  </s.Section>
);
