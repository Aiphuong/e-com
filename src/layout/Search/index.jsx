import React, { useState } from 'react'
import arrowDown from "../../assets/images/arrow-down.svg";
import searchIcon from "../../assets/images/search.svg";
import SearchList from './SearchList';

const Search = ({ details }) => {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const data = details.filter(
        item => {
            return (
                item
                    .title
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };


    return (
        <div className="header__item --search">
            <form className="search-form">
                <div
                    className="search-input"
                    style={{
                        fontWeight: "700",
                        fontSize: "15px",
                        lineHeight: "22.5px",
                        fontWeight: "bold",
                        color: "#151515",
                    }}
                >
                    <div className="search-label">
                        <span>All categories</span>
                    </div>
                    <a href="./">
                        <img src={arrowDown} alt="" className="icon --down" />
                    </a>
                    <input type="search" onChange={handleChange} placeholder="Search products,categories..." />
                    <div className="icon --search">
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
                {searchShow ? <SearchList data={data} /> : null}
            </form>
        </div>
    )
}

export default Search