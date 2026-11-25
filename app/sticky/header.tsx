"use client";

import MobileHeader from "./mobile-header"
import Logo from './logo'

export default function Header({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, isMobile }: { currentPage: string; setCurrentPage: (page: string) => void, isMenuOpen : boolean, setIsMenuOpen : (boolean) => void, isMobile: boolean }) {
    
    const selectPage = (page: string) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    };

    const linkStyle = (page: string) => ({
        cursor: "pointer",
        textDecorationLine: currentPage === page ? "underline" : "none",
        textDecorationColor: isMenuOpen ? "#FAA250" : ""
        
    });

    return (
        <nav
            className="relative z-10"
            style={{
                position: "sticky",
                display: "flex",
                color: "#000000",
                backgroundColor: isMenuOpen ? "#FFF18D" : "",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                fontWeight: "bold",
                top: 0,
            }}
        >
              <button
                  type="button"
                  className="sm:hidden"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-navigation"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
              <img src={"/menu.svg"} alt={'menu'} style={{height: "24px", width: "24px", top: 0}} />

            </button>
            {isMobile && !isMenuOpen &&
              <div style={{position: "absolute",width: "95%", display: "flex", justifyContent: "center"}}>
                <Logo/> 
              </div>
            }        
            <div className="hidden sm:flex">
            <button
            type="button"
            style={{ ...linkStyle("sobre nós"), marginRight: "2rem" }}
            onClick={() => selectPage("sobre nós")}
            >
            sobre nós
            </button>
            <button
            type="button"
            style={linkStyle("agenda")}
            onClick={() => selectPage("agenda")}
            >
            agenda
            </button>
      </div>
      <button
        type="button"
        className="hidden sm:block"
        style={linkStyle("FAQs")}
        onClick={() => selectPage("FAQs")}
      >
        FAQs
      </button>

      {isMenuOpen && (
        <MobileHeader linkStyle={linkStyle} currentPage={currentPage}  setCurrentPage={setCurrentPage}/>
      )}
    </nav>
  );
}