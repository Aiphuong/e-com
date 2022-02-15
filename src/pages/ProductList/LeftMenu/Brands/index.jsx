import React from 'react'

const Brands = ({ data = [] }) => {
    return (
        <div className="brand-category">
            <h3 className="title">Brands</h3>
            <div className="filter-brand">
                {data.slice(-4).map((val) => (
                    <div className="filter-brand-item" key={val.id}>
                        <input type="checkbox" value="12" />
                        <label>
                            <p>Filter by {val.name}</p>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brands
