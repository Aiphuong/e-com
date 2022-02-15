import React from 'react'

const CustomerCard = (props) => {
    let { data } = props;
    return (
        <div className="customer__item-wrap">
            <div className="customer__item">
                <div className="customer-box">
                    <p className="text">
                        {data.title}
                    </p>
                    <p className="name">{data.author}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard