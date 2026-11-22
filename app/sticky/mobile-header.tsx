import { CSSProperties } from "react";

export default function MobileHeader({selectPage, linkStyle }: { selectPage : (page: string) => void, linkStyle: (page: string) => CSSProperties }) {
    return (
        <div
            style={{display: "flex",position: "absolute", backgroundColor: "#FFF18D", flexDirection: "column", width: "100%", left: 0, top: "60%", gap: "1rem", padding: "1rem", borderRadius: "0 0 25px 25px"}}>
                {["sobre nós", "agenda", "FAQs"].map((page) => (
                <button
                    key={page}
                    type="button"
                    style={linkStyle(page)}
                    onClick={() => selectPage(page)}
                >
                {page}
                </button>
            ))}
        </div>
    )
}