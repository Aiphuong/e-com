import React from 'react'
const Categories = (props) => {
    let { data } = props;
    return (
        <>
            <div className="filter-category">
                <h3 className="title">Categories</h3>
                <div className="category-list">
                    {data?.slice(-4).map((val) => (<div key={val.id} className="category-content">
                        <a href="./">
                            <p>{val.name}</p>
                        </a>
                        <div className="text-small">
                            <p className="text">{val.product.length}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default Categories
