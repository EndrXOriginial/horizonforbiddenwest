const Nav = () => {
    return (
        <header className="header">
            <nav className="nav wrapper">
                <img src="./images/horizonLogo.png"/>
                <ul className="nav-ul">
                    <li className="nav-list-item"><a href="#about">About</a></li>
                    <li className="nav-list-item"><a href="#characters">Charaters</a></li>
                    <li className="nav-list-item"><a href="#monsters">Monsters</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;