import { SectionWrapper, SectionStyle, Title } from './section.styled';
export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionStyle>
        <Title>{title}</Title>
        {children}
      </SectionStyle>
    </SectionWrapper>
  );
}
