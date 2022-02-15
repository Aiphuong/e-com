import React from 'react'
import _ from 'lodash';
import SearchItem from '../SearchItem';

const SearchList = ({ data }) => {
    const listItem = data.map(item => <SearchItem key={item.id} data={item} />);
    const isCheck = _.isEmpty(listItem) ? true : false;

    return (
        <>
            {
                !isCheck ? (<>{listItem}</>) : (
                    <>
                        <SearchItem title={"Cart is empty"} />
                    </>
                )

            }

        </>
    );
}

export default SearchList
