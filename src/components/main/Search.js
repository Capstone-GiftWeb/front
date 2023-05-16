import { useEffect } from 'react';
import axiosInstance from '../..';
import '../style/Search.css';

const Search = (value) => {
    useEffect(() => {
        axiosInstance({
            method: "POST",
            url: "/" + value,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                value
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    });

    return (
        <div className='search-body'>

        </div>
    )
};

export default Search;