import styled from "styled-components";

export const CryptoSummaryHolder = styled.div`
  height: 303px;
  width: 206px;
  display: grid;
  gap: 16px;
`;

export const CryptoTitle = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  height: 236px;
  width: 206px;
  display: grid;
  place-items: center;
`;

export const CryptoContent = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
`;

export const CryptoIcon = styled.div`
  background: ${({ theme }) => theme.colors.buttonFill};
  border-radius: 10px;
  width: 83px;
  height: 83px;
  display: grid;
  place-items: center;
`;

export const CryptoImg = styled.img`
  height: 35px;
  width: 35px;
`;

export const CryptoName = styled.span`
  width: 150px;
  text-align: center;
  overflow-wrap: break-word;
  overflow: hidden;
`;

export const CryptoText = styled.p`
  font-size: 20px;
  line-height: 100%;
`;

export const CryptoSite = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CryptoLink = styled.a`
  font-size: 13px;
`;

export const Symbol = styled.span`
  text-transform: uppercase;
`;

export const LinkCryptoIcon = styled.img`
  width: 11px;
  height: 11px;
  position: absolute;
  left: 13px;
  bottom: 20px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;

