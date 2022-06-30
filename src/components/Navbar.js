// import { NavLink } from "react-router-dom"


export function Navbar() {
    return (
        <>
            <div className="navBar">

                <div className="navBrand" >
                    {/* <NavLink to='/Home'> */}
                        <span style={{ color: "#5e9693", fontSize: "1.5rem", fontWeight: "bolder" }}>WSRC</span>
                        <span style={{ color: "#999", fontSize: "1.1rem", marginLeft: "10px", fontWeight: "bold" }}>Tennis</span>
                    {/* </NavLink> */}
                    
                </div>

                <div>
                    <input className="searchBar" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div>
                    <button style={{ position: "relative" }}>Login</button>
                </div>
            </div>
        </>
    )
}