import { SectionWrapper, SectionStyle, Title } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionStyle>
        {title && <Title>{title}</Title>}
        {children}
      </SectionStyle>
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
