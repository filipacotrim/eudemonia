
export default function Footer({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) {

    return (
        <nav style={{position: "fixed", display: "flex", color: "#000000", justifyContent: "flex-end", alignItems: "flex-end", padding: "1rem", fontWeight: "bold", bottom: 0, right: 0}}>
            <div>
                <a style={{margin: "0 2rem 0 0", cursor: "pointer", textDecoration: currentPage === "contribuir" ? "underline" : "none"}} onClick={() => setCurrentPage("contribuir")}>
                    contribuir :)
                </a>
                <a style={{margin: "0 2rem 0 0", cursor: "pointer", textDecoration: currentPage === "contactos" ? "underline" : "none"}} onClick={() => setCurrentPage("contactos")}>
                    contactos
                </a>
        
            </div>
        </nav>
            
  );
}