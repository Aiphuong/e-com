import React from 'react'
import moreProducts from "../../../assets/icons/more-products.svg";
import {
    Link,
} from "react-router-dom";

const LeftMenu = (props) => {
    let { listCate, title, btn } = props;
    return (
        <aside className="item__left">
            <h3 className="heading">{title}</h3>
            <ul className="list-cate">
                {listCate?.slice(-4).map((val) => (
                    <li className="cate-item" key={val.id}>
                        <Link
                            to={`/category/${val.id}`}>
                            <p>{val.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="more-cates">
                <a href="./">
                    <p>{btn}</p>
                </a>
                <img src={moreProducts} alt="" />
            </div>
        </aside>
    )
}

export default LeftMenu