import React from 'react';
import { Pagination, Nav } from 'react-bootstrap'
const Paginations = ({ page, post }) => {
    console.log(page);
    console.log(post);


    const pageNumbers = [];
    let active = page.page
    for (let i = 1; i <= Math.ceil(post / page.limit); i++) {
        pageNumbers.push(<Pagination.Item key={i} active={i === active}>
            {i}
        </Pagination.Item>);
    }
    return (
        <Nav className="justify-content-center" style={{ marginBottom: "100px", position: "relative", zIndex: "-999", alignItems: "center" }}>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{pageNumbers}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </Nav>


    );
};

export default Paginations;
// {/* <div >
//                 <ul className='pagination' style={{  }}>
//                     {pageNumbers.map(number => (
//                         <li key={number} className='page-item'
//                             style={{ border: "1px solid blue", color: "white" }}>

//                             <Link to={`http://localhost:3000/engineers/?page=${number}`}>
//                                 Previous
//                             </Link>
//                             <Link className="active" to={`http://localhost:3000/engineers/?page=${number}`}>
//                                 {number}
//                             </Link>
//                             <Link to={`http://localhost:3000/engineers/?page=${number}`}>
//                                 Next
//                             </Link>

//                         </li>
//                     ))}
//                 </ul>
//                     </div> */}