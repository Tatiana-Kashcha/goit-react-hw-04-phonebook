import * as s from './SectionAuth.styled';

export const SectionAuth = ({ title, children }) => (
  <s.Section>
    <s.Container>
      <s.StyledLink to="/">{'<<'} HOME</s.StyledLink>
    </s.Container>

    {title && <s.SectionTitle>{title}</s.SectionTitle>}
    {children}
  </s.Section>
);
