import { Dispatch,SetStateAction } from "react";

type Props = {
    nextPage:Boolean,
    page:number
    setPage:Dispatch<SetStateAction<number>>
}

export default function handlePageChange({nextPage,setPage,page}:Props){

        if(nextPage===true){
            setPage(page+1);
        }
        else{
            setPage(page-1);
        }
        
    }