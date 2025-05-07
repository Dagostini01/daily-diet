import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base.gray_7};
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.base.gray_1};
`;
