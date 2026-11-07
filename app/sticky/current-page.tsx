import localFont from 'next/font/local'
import Logo from './logo'

const myFont = localFont({ src: '../stuff/myfont.ttf' })

export default function CurrentPage({ currentPage }: { currentPage?: string }) {
    return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "min-content",  textAlign: "center"}}>
                <div>
                    <p className={myFont.className} style={{fontSize: "1.5rem", color: "#FAA250", fontWeight: "lighter", position: "relative", right: "-50%"}}>
                        {currentPage?.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
                    </p>
                    <a href="/" style={{fontSize: "1.7rem", color: "#000000", fontWeight: "bolder", display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", margin: "-1rem 0 -1rem 0"}}>
                        {currentPage}.
                    </a>
                    <p className={myFont.className} style={{fontSize: "1.25rem", color: "#FBC900", fontWeight: "lighter", left: "-50%", position: "relative", transform: "rotate(10deg)"}}>
                        {currentPage[0]}{currentPage[1].toUpperCase() + currentPage.slice(2)?.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
                    </p>
                </div>
                <Logo/>
            </div>
  );
}