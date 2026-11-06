"use client";
import { useState } from "react";
import CurrentPage from "./sticky/current-page";
import Header from "./sticky/header";


export default function Home() {
  const [currentPage, setCurrentPage] = useState('agenda');

  //xsconst health = await getHealth();
//Q: A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.
//A: 
  return (
   
    <div >
       <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <CurrentPage/>
    </div>
  );
}