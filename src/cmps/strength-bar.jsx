export function StrengthBar({ strength = "WEAK!" }) {

    const strengthToNumColoredRecs = {
        "TOO WEAK!": { color: "red", num: 1 },
        "WEAK": { color: "orange", num: 2 },
        "MEDIUM": { color: "yellow", num: 3 },
        "STRONG": { color: "green", num: 4 },
    }

    const { color, num } = strengthToNumColoredRecs[strength] || strengthToNumColoredRecs["MEDIUM"]
    const coloredRecs = Array(4).fill("")
    for (let i = 0; i < num; i++) {
        coloredRecs[i] = color
    }

    return (
        <section className="strength-bar">
            <span className="strength">STRENGTH</span>
            <div className="rec-container">
                <span className={num === 1 ? "res red" : "res"}>{strength}</span>
                {coloredRecs.map((recClass, i) => (
                    <div key={i} className={`rec ${recClass}`}></div>
                ))}
                {[...Array(4 - num)].map((_, i) => (
                    <span key={i} className="res"></span>
                ))}
            </div>
        </section>
    )
}
