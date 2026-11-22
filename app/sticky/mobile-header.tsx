import { CSSProperties } from "react";

export default function MobileHeader({
  setCurrentPage,
  currentPage,
  linkStyle,
}: {
  setCurrentPage: (page: string) => void;
  currentPage: string,
  linkStyle: (page: string) => CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        backgroundColor: "#FFF18D",
        flexDirection: "column",
        width: "100%",
        left: 0,
        top: "60%",
        gap: "1rem",
        padding: "1rem",
        borderRadius: "0 0 25px 25px",
      }}
    >
      {["sobre nós", "agenda", "FAQs"].map((page) => (
        <div
          key={page}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentPage === page ?
            <img
            src="/CIRCULO.svg"
            alt=""
            aria-hidden="true"
            style={{
              width:  page == "agenda" ? "5rem" : page == "FAQs" ? "4rem" : "6rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        : null }
          <button
            type="button"
            style={{
              ...linkStyle(page),
              position: "relative",
              zIndex: 1,
            }}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        </div>
      ))}
    </div>
  );
}
