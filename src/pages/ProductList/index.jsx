import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Main from "./Main";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";
import mockData from '../../core/mockData/mock';

const ProductList = (props) => {
    const { id } = useParams();
    if (!id) {
    }

    const pro = mockData.data.product;
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [noOfPages, setNoOfPages] = useState(
        Math.ceil(pro.length / itemsPerPage)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleShowMore = (event, value) => {
        setItemsPerPage(itemsPerPage + 9);
        setNoOfPages(noOfPages === 1 ? noOfPages : noOfPages - 1);
        event.preventDefault();
    };

    return (
        <div className="container-fluid">
            <div className="category-list">
                <MainTop />
                <div className="mainCenter__item-wrap">
                    <LeftMenu />
                    <Main pro={pro} itemsPerPage={itemsPerPage} page={page} />
                </div>
                <MainBottom noOfPages={noOfPages} page={page} handleChange={handleChange} handleShowMore={handleShowMore} />
            </div>
        </div>
    );
};

export default ProductList;
