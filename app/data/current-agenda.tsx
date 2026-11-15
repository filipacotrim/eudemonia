import Event from "./event";

export default function Agenda() {
    const data = require('../../data.json');

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingLeft: "10%", paddingRight: "10%", margin: "2rem", gap: "5rem"}}>
            {data.agenda.map((item: any, index: number) => (
                <Event item={item} key={index} />
            ))}
        </div>
    );
}