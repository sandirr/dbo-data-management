import Pagination from 'react-bootstrap/Pagination';

export default function CustomPagination({page, totalPage, changePage}: {page:number, totalPage:number, changePage: (p:number) => void}) {
  return (
    <Pagination>
      <Pagination.Prev onClick={()=> changePage(page-1)} disabled={page === 1} />
      {new Array(totalPage).fill(null).map((item:null, index)=>(
        <Pagination.Item key={index} active={index+1 === page} onClick={()=> changePage(index+1)}>{index+1}</Pagination.Item>
      ))}
      <Pagination.Next onClick={()=> changePage(page+1)} disabled={page === totalPage} />
    </Pagination>
  );
}