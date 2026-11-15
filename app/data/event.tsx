export default function Event({ item }: { item: any }) {

    return (
        <div style={{display: "flow-root", width: "100%", background: "rgba(250, 162, 80, 0.2)", padding: "1.5rem"}}>
            <img src={item.image} alt={item.title} style={{float: "right", width: "50%", maxWidth: "32rem", maxHeight: "30rem", objectFit: "contain", margin: "0 0 1rem 1rem"}} />
            <div style={{width: "45%"}}>
                <div> 
                    <h3 style={{fontWeight: "bold", fontSize: "30px", marginBottom: "-0.5rem"}}>{item.title}</h3>
                    <p style={{fontStyle: "regular", fontSize: "15px", marginBottom: "1rem"}}>{item.date}</p>  
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "1rem", alignSelf: "flex-end", justifyContent: "flex-end"}}>
                    <p style={{fontStyle: "oblique", fontWeight: "bold", fontSize: "15px", color: "#5B1D4E"}}>{item.genre}</p>
                </div>
            </div>
            <div className="description" style={{position: "relative", width: "100%"}}>
                <p style={{fontSize: "15px"}}>{item.description}</p>
            </div>
        </div>
    );
}
