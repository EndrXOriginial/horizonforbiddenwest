import Logo from '../../images/horizonLogo.svg';

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav wrapper">
                <img className="logo" src={Logo}/>
                <ul className="nav-ul">
                    <a href="#about"><li className="nav-list-item">About</li></a>
                    <a href="#characters"><li className="nav-list-item">Charaters</li></a>
                    <a href="#monsters"><li className="nav-list-item">Monsters</li></a>
                </ul>
                <svg className='hamb-menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
            </nav>
        </header>
    )
}

export default Nav;