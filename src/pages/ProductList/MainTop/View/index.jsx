import React from "react";
import grid from "../../../../assets/icons/grid.svg";
import listView from "../../../../assets/icons/list-view.svg";

const View = () => {
    return (
        <div className="category-top">
            <div className="item__top">
                <a href="#">
                    <h4 className="navigation">Home page</h4>
                </a>

                <span>/</span>
                <h4 className="breadcrumb">Fruit and vegetables</h4>
            </div>
            <div className="item__bottom">
                <div className="item__bottom-left">
                    <h2 className="heading --category"> Fruit and vegetables </h2>
                </div>

                <div className="item__bottom-right">
                    <div className="tab__option-list">
                        <div className="tab__option-item active">
                            <img src={grid} alt="grid" />

                            <a href="#">
                                <p className="active">Grid view</p>
                            </a>
                        </div>
                        <div className="tab__option-item">
                            <img src={listView} alt="list view" />
                            <a href="#">
                                {" "}
                                <p>List view </p>
                            </a>
                        </div>
                        <div className="tab__option-item">
                            <div
                                className="text-small"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    className="text"
                                    style={{
                                        fontSize: "12px",
                                        color: " #ffff",
                                        fontFamily: "Poppins",
                                        fontWeight: 600,
                                    }}
                                >
                                    117
                                </span>
                            </div>
                            <a href="#">
                                <p>Products</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;
