import styled from "styled-components";

export const MainDiv = styled.div`
  margin-top: 74px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AssetBtnHolder = styled.div`
  width: 405px;
  height: 61px;
  display: grid;
  justify-self: center;
  place-items: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background: #06d554;
`;

export const AssetBtnText = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
`;

export const TitleHolder = styled.div`
  align-self: flex-start;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 0px;
`;
