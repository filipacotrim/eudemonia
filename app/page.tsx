"use client";
import { useState, useEffect } from "react";
import CurrentPage from "./sticky/current-page";
import Header from "./sticky/header";
import Agenda from "./data/current-agenda";
import Footer from "./sticky/footer"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
      const breakpoint = window.matchMedia("(min-width: 40rem)");

      // Set initial value on mount
      setIsMobile(!breakpoint.matches);

      const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
        setIsMobile(!event.matches);
        if (event.matches) setIsMenuOpen(false);
      };

      breakpoint.addEventListener("change", closeMenuOnDesktop);
      return () => breakpoint.removeEventListener("change", closeMenuOnDesktop);
    }, []);

  const [currentPage, setCurrentPage] = useState('agenda');

  return (
    <div>
       <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
       <CurrentPage currentPage={currentPage}/>
        {currentPage === 'agenda' && <Agenda />}
        {currentPage === 'sobre nós' && <div>Sobre Nós Content</div>}
        {currentPage === 'FAQs' && <div>FAQs Content</div>}
        {currentPage === 'contactos' && <div>Contactos Content</div>}
        {currentPage === 'contribuir' && <div>Contribuir Content</div>}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} isMobile={isMobile} />
    </div>
  );
}