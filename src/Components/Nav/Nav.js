import Logo from '../../images/horizonLogo.png';

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav wrapper">
                <img src={Logo}/>
                <ul className="nav-ul">
                    <a href="#about"><li className="nav-list-item">About</li></a>
                    <a href="#characters"><li className="nav-list-item">Charaters</li></a>
                    <a href="#monsters"><li className="nav-list-item">Monsters</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;