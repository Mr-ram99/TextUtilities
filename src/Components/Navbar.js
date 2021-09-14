import React from 'react'
import propTypes from 'prop-types'
function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <a className="navbar-brand text-warning" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>


                    </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable" : "Disable"} DarkMode</label>
                        </div>
                </div>

            </div>
        </nav>

    )
}
export default Navbar
Navbar.propTypes = {
    title: propTypes.string.isRequired,      //type of title must be string and it is required
    about: propTypes.string
}
Navbar.defaultProps = {
    title: "Set title here",
    about: "Set about here"
}