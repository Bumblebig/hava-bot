import { useState } from "react"
export default function Menu() {
    const [view, setView] = useState(false);
    function modal() {
        setView(prev => !prev)
        alert("Not implemented");
    }
    return (
        <section className="menu">
            <p onClick={modal}>Menu</p>
        </section>
    )
}
