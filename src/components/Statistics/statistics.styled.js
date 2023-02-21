import styled from 'styled-components';

export const StatistictsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #7e0cd6;
  border-bottom: 2px solid #3f066b;
`;

const Item = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const GoodlItem = styled(Item)`
  color: #69d270;
`;

export const NeutralItem = styled(Item)`
  color: #f28f93;
`;

export const BadItem = styled(Item)`
  color: #ff0000;
`;
export const TotalItem = styled(Item)`
  color: #7e0cd6;
`;
export const PercentageItem = styled(Item)`
  border: 2px solid black;
  padding 5px;
`;
