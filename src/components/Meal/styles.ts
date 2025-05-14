import styled from "styled-components/native";
import { Meal, MealStatus } from ".";

export const Container = styled.Pressable`
  width: 100%;
  height: 55px;

  padding: 14px 16px 14px 14px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.base.gray_5};
`;

export const Diviser = styled.View`
  width: 1px;
  height: 14px;

  margin: 0 12px;

  background-color: ${({ theme }) => theme.colors.base.gray_4};
`;

export const Status = styled.View<MealStatus>`
  width: 14px;
  height: 14px;

  margin-left: 12px;
  border-radius: 14px;

  background-color: ${({ theme, isOnTheDiet }) => {
    return isOnTheDiet
      ? theme.colors.brand.green_mid
      : theme.colors.brand.red_mid;
  }};
`;
