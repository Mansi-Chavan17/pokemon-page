import {useState} from 'react';

function usePagination(data, itemsPerPage){
    const [currentPage, setCurrentPage]=useState(0)

    const startIndex=currentPage*itemsPerPage
    const endIndex=startIndex+itemsPerPage
    const paginatedData=data.slice(startIndex, endIndex)

    const prevPage=()=>{
        if (currentPage>0){
            setCurrentPage((prev)=>prev-1)
        }
    }

    const nextPage=()=>{
        if(currentPage<Math.ceil(data.lenth/itemsPerPage)-1){
            setCurrentPage((prev)=>prev+1)
        }
    }

    return{paginatedData,currentPage,nextPage,prevPage}
}
export default usePagination