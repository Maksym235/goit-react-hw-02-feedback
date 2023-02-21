import React from 'react';
import {
  StatistictsWrapper,
  Title,
  GoodlItem,
  NeutralItem,
  BadItem,
  TotalItem,
  PercentageItem,
} from './statistics.styled';

export function Statistics({ stats: { good, neutral, bad }, total, percent }) {
  return (
    <StatistictsWrapper>
      <Title>Statistics</Title>
      <GoodlItem>Good: {good}</GoodlItem>
      <NeutralItem>Neutral: {neutral}</NeutralItem>
      <BadItem>Bad:{bad}</BadItem>
      <TotalItem>Total: {total}</TotalItem>
      {!isNaN(percent) && (
        <PercentageItem>Positive Percentage: {percent}%</PercentageItem>
      )}
    </StatistictsWrapper>
  );
}
