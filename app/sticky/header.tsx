import localFont from 'next/font/local'


export default function Header({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) {

    return (
        <nav style={{position: "sticky", display: "flex", color: "#000000", justifyContent: "space-between", alignItems: "center", padding: "1rem", fontWeight: "bold"}}>
            <div>
                <a href="/link1" style={{margin: "0 2rem 0 0", textDecoration: currentPage === "sobre" ? "underline" : "none"}} onClick={() => setCurrentPage("sobre")}>
                    sobre nós
                </a>
                <a href="/link2" style={{textDecoration: currentPage === "agenda" ? "underline" : "none"}} onClick={() => setCurrentPage("agenda")}>
                    agenda
                </a>
         
            </div>


            {/* <div style={{position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                <a href="/" className={myFont.className} style={{fontSize: "3rem", color: "#5B1D4E", fontWeight: "lighter", letterSpacing: "3%"}}>
                    EUDEMONIA
                </a>
            </div> */}


            <div >
                <a href="/link4" className="hover:underline" style={{textDecoration: currentPage === "faqs" ? "underline" : "none"}} onClick={() => setCurrentPage("faqs")}>
                    FAQs
                </a>
            
            </div>
        </nav>
  );
}