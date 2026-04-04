import "./inicio.css"

function Inicio() {
    return(
        <div className="container-inicio">
            <div className="navbar-inicio">
                <ul className="components-navbar">
                    <li>Feed</li>
                    <button>+</button>
                    <li>Explore</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className="main-screen">
                <div className="publication-context">
                    <div className="publication"></div>
                </div>
                <div className="suggestion-context"></div>
            </div>

        </div>
    )
}

export default Inicio;