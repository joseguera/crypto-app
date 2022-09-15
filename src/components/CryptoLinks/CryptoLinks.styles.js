import styled from "styled-components";

export const LinkHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 13px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 275px;
  height: 41px;
  padding: 0px 45px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Site = styled.a`
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  max-width: 150px;
  white-space: nowrap
`;

export const LinkIcon = styled.img`
  width: 11px;
  height: 11px;
  position: absolute;
  left: 13px;
  bottom: 15px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;