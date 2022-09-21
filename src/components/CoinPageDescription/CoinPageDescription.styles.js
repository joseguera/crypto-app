import styled from "styled-components";

export const Description = styled.div`
  justify-self: start;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const DescriptionTitle = styled.p`
  font-size: 22px;
  line-height: 0%;
`;

export const DescriptionBody = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  display: grid;
  place-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const DescriptionText = styled.div`
  display: grid;
  place-items: center;
  padding: 4px 19px 34px;
`;

export const StackIcon = styled.img`
  width: 19px;
  height: 19px;
  margin-top: 15px;
  margin-bottom: 15px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;

export const TextHolder = styled.div`
  text-align: center;
  line-height: 150% !important;
`;

export const Text = styled.div`
  text-align: center;
  line-height: 150% !important;
`;