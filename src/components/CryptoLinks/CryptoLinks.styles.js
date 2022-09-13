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

export const CopyIcon = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 16px;
  width: 18px;
  filter: grayscale(100%);
  &:hover {
    cursor: pointer;
  }
`;

export const Tooltip = styled.div`
  .tooltip {
    height: 16px;
    width: 18px;
    position: relative;
    left: 86px;
  }

  .tooltip .tooltiptext {
    display: none;
    width: 120px;
    background-color: #555555;
    color: #ffffff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 40px;
    left: 19px;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    display: block;
    opacity: 1;
  }
`;
