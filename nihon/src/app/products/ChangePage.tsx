"use client";

import PreviousPage from "./PreviousPage";
import PagePosition from "./PagePosition";
import NextPage from "./NextPage";

type ChangePageProps = {
    previousPage: () => void;
    actualPage: number;
    lastPage: number;
    nextPage: () => void;
}

export default function ChangePage({previousPage, actualPage, lastPage, nextPage}: ChangePageProps) {
    const range = new Array(lastPage);
    for(let i = 0 ; i < lastPage ; i++) {
        range[i] = i+1;
    }  
    return(
        <div className="flex gap-2.5">
            <PreviousPage onClickCallback={previousPage} actualPosition={actualPage}/>

            {range.map((index) => (
                <PagePosition key={index} actualPosition={actualPage} pagePosition={index}/>
            ))}

            <NextPage actualPosition={actualPage} lastPosition={lastPage} onClickCallback={nextPage}/>
        </div>
    );
}