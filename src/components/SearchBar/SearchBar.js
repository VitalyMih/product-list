import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <form className="SearchBar_form">
                <input
                    value={props.value}
                    onChange={(event) => props.onInputHandler(event.target.value)}
                    type="text"
                    placeholder="Search..."
                />
                <label>
                    <input
                        checked={props.checked}
                        onChange={(event) => props.onCheckboxHandler(event.target.checked)}
                        type="checkbox"
                    />
                    Only show products in stock
                </label>
            </form>
        </div>
    )
}

export default SearchBar;