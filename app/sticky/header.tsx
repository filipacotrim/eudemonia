
export default function Header({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) {

    return (
        <nav style={{position: "sticky", display: "flex", color: "#000000", justifyContent: "space-between", alignItems: "center", padding: "1rem", fontWeight: "bold"}}>
            <div>
                <a style={{margin: "0 2rem 0 0", cursor: "pointer", textDecoration: currentPage === "sobre nós" ? "underline" : "none"}} onClick={() => setCurrentPage("sobre nós")}>
                    sobre nós
                </a>
                <a style={{textDecoration: currentPage === "agenda" ? "underline" : "none", cursor: "pointer"}} onClick={() => setCurrentPage("agenda")}>
                    agenda
                </a>
         
            </div>

            <div >
                <a  className="hover:underline" style={{textDecoration: currentPage === "FAQs" ? "underline" : "none", cursor: "pointer"}} onClick={() => setCurrentPage("FAQs")}>
                    FAQs
                </a>
            
            </div>
        </nav>
  );
}