import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base.gray_7};
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.base.gray_1};
`;
