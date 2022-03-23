import styled from 'styled-components';

const Image = styled.img`
    width: 150px;
`

const Graph = (props) => {
  return (
    <>
      <Image
        src="https://d1e00ek4ebabms.cloudfront.net/production/83159443-2aa6-4798-8237-38b9bae23726.png"
        alt="crypto graph"
      />
    </>
  );
};

export default Graph;
