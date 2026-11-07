"use client";
import { useState } from "react";
import CurrentPage from "./sticky/current-page";
import Header from "./sticky/header";


export default function Home() {
  const [currentPage, setCurrentPage] = useState('agenda');

  return (
   
    <div >
       <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <CurrentPage currentPage={currentPage}/>
    </div>
  );
}