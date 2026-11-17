"use client";
import { useState } from "react";
import CurrentPage from "./sticky/current-page";
import Header from "./sticky/header";
import Agenda from "./data/current-agenda";
import Footer from "./sticky/footer"

export default function Home() {
  const [currentPage, setCurrentPage] = useState('agenda');

  return (
    <div>
       <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       <CurrentPage currentPage={currentPage}/>
        {currentPage === 'agenda' && <Agenda />}
        {currentPage === 'sobre nós' && <div>Sobre Nós Content</div>}
        {currentPage === 'FAQs' && <div>FAQs Content</div>}
        {currentPage === 'contactos' && <div>Contactos Content</div>}
        {currentPage === 'contribuir' && <div>Contribuir Content</div>}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}