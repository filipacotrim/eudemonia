import localFont from 'next/font/local'

const myFont = localFont({ src: '../stuff/myfont.ttf' })

export default function CurrentPage() {
    return (
            <div style={{position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                <a href="/" className={myFont.className} style={{fontSize: "3rem", color: "#5B1D4E", fontWeight: "lighter", letterSpacing: "3%"}}>
                    EUDEMONIA
                </a>
            </div>
  );
}