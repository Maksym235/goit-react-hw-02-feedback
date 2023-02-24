import React from 'react';
import {
  StatistictsWrapper,
  Title,
  GoodlItem,
  NeutralItem,
  BadItem,
  TotalItem,
} from './Statistics.styled.js';

export function Statistics({ stats: { good, neutral, bad }, total }) {
  return (
    <StatistictsWrapper>
      <Title>Statistics</Title>
      <GoodlItem>Good: {good}</GoodlItem>
      <NeutralItem>Neutral: {neutral}</NeutralItem>
      <BadItem>Bad:{bad}</BadItem>
      <TotalItem>Total: {total}</TotalItem>
    </StatistictsWrapper>
  );
}
