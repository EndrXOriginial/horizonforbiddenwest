import Logo from '../../images/horizonLogo.svg';

const Nav = () => {
    const dropMenu = (e) => {
        let dropdown = document.getElementById('dropdown');
        let menuButton = e.target;
        let menuLines = document.querySelectorAll('.menu-line');

        if (menuLines[0].classList.contains('x')) {
            menuLines.forEach(line => {
                line.classList.remove('x');
                line.classList.add('o');
            });
            dropdown.classList.remove('drop-the-menu-down');
        } else if (menuLines[0].classList.contains('o')) {
            menuLines.forEach(line => {
                line.classList.remove('o');
                line.classList.add('x');
            })
            dropdown.classList.add('drop-the-menu-down');
        } else {
            menuLines.forEach(line => {
                line.classList.add('x');
            });
            dropdown.classList.add('drop-the-menu-down');
        }
    }

    return (
        <header className="header">
            <div className='dropdown-menu' id='dropdown'>
                <ul className='dropdown-menu-ul'>
                    <a className='dropdown-menu-a'><li className='dropdown-menu-item'>About</li></a>
                    <a className='dropdown-menu-a'><li className='dropdown-menu-item'>Charaters</li></a>
                    <a className='dropdown-menu-a'><li className='dropdown-menu-item'>Monsters</li></a>
                </ul>
            </div>
            <nav className="nav wrapper">
                <img className="logo" src={Logo}/>
                <ul className="nav-ul">
                    <a href="#about"><li className="nav-list-item">About</li></a>
                    <a href="#characters"><li className="nav-list-item">Charaters</li></a>
                    <a href="#monsters"><li className="nav-list-item">Monsters</li></a>
                </ul>
                <svg onClick={dropMenu} className='hamb-menu' viewBox="0 0 100 100" fill='var(--white)'>
                    <line className='menu-line top' x1='10' x2='90' y1='25' y2='25'></line>
                    <line className='menu-line middle' x1='10' x2='90' y1='50' y2='50'></line>
                    <line className='menu-line bottom' x1='10' x2='90' y1='75' y2='75'></line>
                </svg>
            </nav>
        </header>
    )
}

export default Nav;