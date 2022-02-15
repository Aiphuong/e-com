import React from 'react'
import _ from 'lodash';

const SearchItem = ({ data, title }) => {
    const isCheck = _.isEmpty(data) ? true : false
    return (
        <>
            {
                !isCheck ? (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
                    <img className="br-100 h3 w3 dib" alt="" src={data.image} />
                    <div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div >) : (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >

                    <div>
                        <h2>{title}</h2>
                    </div>
                </div >)
            }
        </>

    )
}

export default SearchItem

