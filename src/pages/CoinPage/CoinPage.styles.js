import styled from "styled-components";
import plusIcon from '../../images/Iconly-Bulk-Plus.svg';

export const CoinPageMain = styled.div`
    display: grid;
    justify-items: center;
    gap: 22px;
    color: rgb(255, 255, 255);
`;

export const SummaryHolder = styled.div`
    margin-left: 10%;
    margin-right: 10%;
`;

export const PageTitle = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const PageText = styled.p`
    font-size: 22px;
    line-height: 0%;
`;

export const SummaryContainer = styled.div`
    display: flex;
    gap: 60px;
    place-items: center;
`;

export const CryptoSummary = styled.div`
    height: 303px;
    width: 206px;
    display: grid;
    gap: 16px;
`;

export const CryptoTitle = styled.div`
    background: #191B1F;
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
    background: #2C2F36;
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
    background: rgb(25, 27, 31);
    border-radius: 10px;
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const MarketSummary = styled.div`
    background: rgb(25, 27, 31);
    border-radius: 10px;
    height: 303px;
    width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MarketHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 14px;
`;

export const MarketPrice = styled.div`
    display: flex;
    gap: 12px;
`;

export const Price = styled.div`
    font-size: 30px;
`;

export const ProfitHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Profit = styled.div`
    font-size: 18px;
`;

export const DataSummary = styled.div`
    background: rgb(25, 27, 31);
    border-radius: 10px;
    height: 303px;
    width: 437px;
`;

export const Symbol = styled.span`
  text-transform: uppercase;
`;


export const Data = styled.div`
    text-align: left;
`;

export const DataHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const DescriptionHolder = styled.div`
    display: grid;
    justify-items: center;
    width: 1133px;
`;

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
    background: rgb(25, 27, 31);
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
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const TextHolder = styled.div`
    text-align: center;
    line-height: 150% !important;
`;

export const Text = styled.div`
    text-align: center;
    line-height: 150% !important;
`;

export const LinkHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 13px;
`;

export const DataList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const DataItem = styled.li`
    display: block;
    background-image: url(${plusIcon});
    background-repeat: no-repeat; 
    background-position: left;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 41px;
    padding: 0px 45px;
    border-radius: 10px;
    background: #191B1F;
`;

export const Site = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 13px;
`;

export const LinkIcon = styled.img`
    width: 11px;
    height: 11px;
    position: absolute;
    left: 13px;
`;

export const CopyIcon = styled.img`
    position: absolute;
    right: 12px;
    top: 12px;
    height: 16px;
    width: 18px;
    filter: grayscale(100%);
`;

export const GraphHolder = styled.div`
    color: #FFFFFF;
`;



