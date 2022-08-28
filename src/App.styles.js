import styled from "styled-components";

export const MainApp = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.appBackground};
  color: ${({ theme }) => theme.colors.text};
`;
