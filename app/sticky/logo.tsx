import localFont from 'next/font/local'

const myFont = localFont({ src: '../stuff/myfont.ttf' })


export default function Logo() {
    return (
        <a href="/" className={myFont.className} style={{fontSize: "3.5rem", color: "#5B1D4E", fontWeight: "lighter", letterSpacing: "3%"}}>
            EUDEMONIA
        </a>
    );
}