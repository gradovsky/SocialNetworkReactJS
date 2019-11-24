import React, {useState} from 'react';
import s from '../Pagination/Pagination.module.css';
import cn from 'classnames';
import Button from "react-bootstrap/Button";


const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div >
            <div className={s.paginator}>
                {portionNumber > 1 &&
                <Button variant="dark" size="sm" onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</Button>}

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(page => {
                        return <Button variant="outline-dark" size="sm" className={cn({
                            [s.selectedPage]: currentPage === page
                        }, s.pageNumber)}
                                     key={page}
                                     onClick={(e) => {
                                         onPageChanged(page)
                                     }}>{page}</Button >
                    })}
                {portionCount > portionNumber &&
                <Button variant="dark" size="sm" onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</Button>}
            </div>
        </div>



    );
};

export default Pagination;