// import React, { useEffect, useState } from "react";
// // import "./style.css";

import React from "react";

// const renderData = (data) => {
//     return (
//         <ul>
//             {data.map((todo, index) => {
//                 return <li key={index}>{todo.title}</li>;
//             })}
//         </ul>
//     );
// };

// function PaginationComponent() {
//     const [data, setData] = useState([]);
//     const [currentPage, setcurrentPage] = useState(1);
//     const [itemsPerPage, setitemsPerPage] = useState(5);
//     const [pageNumberLimit, setpageNumberLimit] = useState(5);
//     const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
//     const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

//     const pages = [];
//     for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//         pages.push(i);
//     }

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//             .then((response) => response.json())
//             .then((json) => setData(json));
//     }, []);

//     const handleClick = (event) => {
//         setcurrentPage(Number(event.target.id));
//     };

//     const renderPageNumbers = pages.map((number) => {
//         if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//             return (
//                 <li
//                     key={number}
//                     id={number}
//                     onClick={handleClick}
//                     className={currentPage == number ? "active" : null}
//                 >
//                     {number}
//                 </li>
//             );
//         } else {
//             return null;
//         }
//     });

//     const handleNextbtn = () => {
//         setcurrentPage(currentPage + 1);

//         if (currentPage + 1 > maxPageNumberLimit) {
//             setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//             setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//         }
//     };

//     const handlePrevbtn = () => {
//         setcurrentPage(currentPage - 1);

//         if ((currentPage - 1) % pageNumberLimit == 0) {
//             setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//             setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//         }
//     };

//     let pageIncrementBtn = null;
//     if (pages.length > maxPageNumberLimit) {
//         pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
//     }

//     let pageDecrementBtn = null;
//     if (minPageNumberLimit >= 1) {
//         pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
//     }


//     return (
//         <>
//             <h1>Todo List</h1> <br />
//             {renderData(data)}

//             <ul className="pageNumbers">
//                 <li>
//                     <button
//                         onClick={handlePrevbtn}
//                         disabled={currentPage == pages[0] ? true : false}
//                     >
//                         Prev
//                     </button>
//                 </li>
//                 {pageDecrementBtn}
//                 {renderPageNumbers}
//                 {pageIncrementBtn}
//                 <li>
//                     <button
//                         onClick={handleNextbtn}
//                         disabled={currentPage == pages[pages.length - 1] ? true : false}
//                     >
//                         Next
//                     </button>
//                 </li>
//             </ul>

//         </>
//     );
// }

// export default PaginationComponent;

function Pagination() {
    const [currentPage, setCurrentPage] = React.useState(4);
    let maxPages = 10;
    let items = Array(20).fill("Cek");
    let leftSide = currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = currentPage + 2;
    if (rightSide > maxPages) rightSide = maxPages;
    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={() => { setCurrentPage(number) }}>
                {number}
            </div>,
        );
    }
    const nextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const paginationRender = (
        <div className="flex-container">
            <div> currentPage : {currentPage} </div>

            <div className="paginate-ctn">
                <button className="round-effect" onClick={prevPage}> &lsaquo; </button>
                {items}
                <button className="round-effect" onClick={nextPage}> &rsaquo; </button>
            </div>
        </div>
    );
    return (paginationRender);
}

export default Pagination