import styled from "styled-components";
import plusIcon from '../../images/Iconly-Bulk-Plus.svg';

export const Symbol = styled.span`
  text-transform: uppercase;
`;

export const SummaryHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
`;

export const Data = styled.div`
    text-align: left;
`;

export const DataHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 250px;
`;

export const DescriptionHolder = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    text-align: center;
`;

export const LinkHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
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
    justify-content: space-between;
`;

export const Site = styled.a`
    text-decoration: none;
    padding: 5px 10px;
    margin: 5px;
    background-color: rgb(25, 27, 31);
    border-radius: 10px;
    color: rgb(255, 255, 255);
`;