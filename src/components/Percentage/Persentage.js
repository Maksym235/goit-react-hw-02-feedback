import { PercentageItem } from './Persentage.styled';
import PropTypes from 'prop-types';

export default function Persentage({ percent }) {
  return (
    <>
      {!isNaN(percent) && (
        <PercentageItem>Positive Percentage: {percent}%</PercentageItem>
      )}
    </>
  );
}

Persentage.propTypes = {
  persent: PropTypes.number.isRequired,
};
