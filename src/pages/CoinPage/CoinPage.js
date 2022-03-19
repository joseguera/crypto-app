const CoinPage = (props) => {
    const coinName = props.match.params.id;
    return <div>This is the {coinName} Page</div>
}

export default CoinPage;