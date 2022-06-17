import searchLoopIcon from '../../images/Iconly-Broken-Search.svg';
import { SearchBarStyle, LoopIcon, InputType } from './SearchBar.styles'

const SearchBar = (props) => {
    return (
        <>
            <SearchBarStyle>
                <LoopIcon src={searchLoopIcon} alt="Search" />
                <InputType placeholder="Search..." />
            </SearchBarStyle>
        </>
    )
}

export default SearchBar;