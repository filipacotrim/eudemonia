import { CSSProperties, Fragment } from "react";

export default function MobileHeader({
  setCurrentPage,
  currentPage,
  linkStyle,
}: {
  setCurrentPage: (page: string) => void;
  currentPage: string;
  linkStyle: (page: string) => CSSProperties;
}) {
  const mainPages = ["sobre nós", "agenda", "FAQs"];

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
        gap: "0.75rem", 
        padding: "1rem",
        borderRadius: "0 0 25px 25px",
      }}
    >
      {mainPages.map((page, index) => (
        <Fragment key={page}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentPage === page ? (
              <img
                src="/CIRCULO.svg"
                alt=""
                aria-hidden="true"
                style={{
                  width:
                    page === "agenda" ? "5rem" : page === "FAQs" ? "4rem" : "6rem",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
              />
            ) : null}
            <button
              type="button"
              style={{
                ...linkStyle(page),
                position: "relative",
                fontSize: "20px",
              }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </div>

          {index < mainPages.length - 1 && (
            <svg  width={5} height={5} style={{ alignSelf: "center" }}>
              <circle cx={2.5} cy={2.5} r={2.5} fill="#7B3F8F"/>
            </svg>
          )}
        </Fragment>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        {["contactos", "contribuir"].map((page) => (
          <div
            key={page}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
          >
            {currentPage === page ? (
              <img
                src="/CIRCULO.svg"
                alt=""
                aria-hidden="true"
                style={{
                  width: "5rem",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
              />
            ) : null}
            <button
              type="button"
              style={{
                ...linkStyle(page),
                position: "relative",
                zIndex: 1,
                fontSize: "15px",
              }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
