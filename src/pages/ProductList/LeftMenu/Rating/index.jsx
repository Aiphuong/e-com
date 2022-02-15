import React from 'react'
import rateYellow from "../../../../assets/icons/rate-yellow.svg";
import rateNone from "../../../../assets/icons/rate-none.svg";

const Rating = () => {
    return (
        <div className="rate-category" style={{ marginTop: "50px" }}>
            <h3 className="title">Rating</h3>
            <div className="filter-brand-item">
                <input type="checkbox" value="12" />
                <label>
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                </label>
            </div>
            <div className="filter-brand-item">
                <input type="checkbox" value="12" />
                <label>
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateNone} />
                </label>
            </div>
            <div className="filter-brand-item">
                <input type="checkbox" value="12" />
                <label>
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateNone} />
                    <img alt="" src={rateNone} />
                </label>
            </div>
            <div className="filter-brand-item">
                <input type="checkbox" value="12" />
                <label>
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateNone} />
                    <img alt="" src={rateNone} />
                    <img alt="" src={rateNone} />
                </label>
            </div>
            <div className="filter-brand-item">
                <input type="checkbox" value="12" />
                <label>
                    <img alt="" src={rateYellow} />
                    <img alt="" src={rateNone} />
                    <img alt="" src={rateNone} />
                    <img alt="" src={rateNone} />
                    <img alt="" src={rateNone} />
                </label>
            </div>
        </div>
    )
}

export default Rating
