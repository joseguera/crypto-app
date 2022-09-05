import styled from "styled-components";

export const FooterHolder = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.appBackground};
`;

export const ImageLink = styled.a`
    &:hover {
        cursor: pointer;
    }
`;

export const IconImage = styled.img`
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
  height: 40px;
`;
