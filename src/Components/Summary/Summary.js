import './Summary.css';
import Card from "./Card/Card";
import aloyForest from '../../images/aloy-forest.png';
import aloyWall from '../../images/aloy-top-of-wall.png';
import aloyShellsnaper from '../../images/aloy-shellsnaper.png';
import aloyHollywood from '../../images/aloy-hollywood.png';


const Summary = () => {
    return (
        <section className="summary">
            <svg className='static-border-summary' id="visual" viewBox="0 0 1980 150">
                <path d="M0 31L86 31L86 50L172 50L172 33L258 33L258 78L344 78L344 42L430 42L430 62L517 62L517 38L603 38L603 54L689 54L689 47L775 47L775 80L861 80L861 58L947 58L947 66L1033 66L1033 70L1119 70L1119 79L1205 79L1205 87L1291 87L1291 48L1377 48L1377 27L1463 27L1463 60L1550 60L1550 81L1636 81L1636 52L1722 52L1722 41L1808 41L1808 33L1894 33L1894 69L1980 69L1980 80L1980 151L1980 151L1894 151L1894 151L1808 151L1808 151L1722 151L1722 151L1636 151L1636 151L1550 151L1550 151L1463 151L1463 151L1377 151L1377 151L1291 151L1291 151L1205 151L1205 151L1119 151L1119 151L1033 151L1033 151L947 151L947 151L861 151L861 151L775 151L775 151L689 151L689 151L603 151L603 151L517 151L517 151L430 151L430 151L344 151L344 151L258 151L258 151L172 151L172 151L86 151L86 151L0 151Z" fill="#374c39"></path>
                <path d="M0 80L86 80L86 75L172 75L172 54L258 54L258 58L344 58L344 92L430 92L430 103L517 103L517 57L603 57L603 93L689 93L689 103L775 103L775 59L861 59L861 65L947 65L947 102L1033 102L1033 105L1119 105L1119 55L1205 55L1205 89L1291 89L1291 81L1377 81L1377 90L1463 90L1463 55L1550 55L1550 84L1636 84L1636 90L1722 90L1722 75L1808 75L1808 85L1894 85L1894 86L1980 86L1980 75L1980 151L1980 151L1894 151L1894 151L1808 151L1808 151L1722 151L1722 151L1636 151L1636 151L1550 151L1550 151L1463 151L1463 151L1377 151L1377 151L1291 151L1291 151L1205 151L1205 151L1119 151L1119 151L1033 151L1033 151L947 151L947 151L861 151L861 151L775 151L775 151L689 151L689 151L603 151L603 151L517 151L517 151L430 151L430 151L344 151L344 151L258 151L258 151L172 151L172 151L86 151L86 151L0 151Z" fill="#383423"></path>
                <path d="M0 78L86 78L86 117L172 117L172 113L258 113L258 114L344 114L344 96L430 96L430 82L517 82L517 97L603 97L603 111L689 111L689 106L775 106L775 89L861 89L861 117L947 117L947 90L1033 90L1033 99L1119 99L1119 84L1205 84L1205 78L1291 78L1291 100L1377 100L1377 91L1463 91L1463 119L1550 119L1550 83L1636 83L1636 86L1722 86L1722 78L1808 78L1808 83L1894 83L1894 79L1980 79L1980 116L1980 151L1980 151L1894 151L1894 151L1808 151L1808 151L1722 151L1722 151L1636 151L1636 151L1550 151L1550 151L1463 151L1463 151L1377 151L1377 151L1291 151L1291 151L1205 151L1205 151L1119 151L1119 151L1033 151L1033 151L947 151L947 151L861 151L861 151L775 151L775 151L689 151L689 151L603 151L603 151L517 151L517 151L430 151L430 151L344 151L344 151L258 151L258 151L172 151L172 151L86 151L86 151L0 151Z" fill="#2b1f1a"></path>
                <path d="M0 127L86 127L86 112L172 112L172 108L258 108L258 112L344 112L344 131L430 131L430 135L517 135L517 105L603 105L603 131L689 131L689 128L775 128L775 137L861 137L861 126L947 126L947 117L1033 117L1033 139L1119 139L1119 133L1205 133L1205 119L1291 119L1291 127L1377 127L1377 134L1463 134L1463 139L1550 139L1550 113L1636 113L1636 108L1722 108L1722 139L1808 139L1808 122L1894 122L1894 112L1980 112L1980 120L1980 151L1980 151L1894 151L1894 151L1808 151L1808 151L1722 151L1722 151L1636 151L1636 151L1550 151L1550 151L1463 151L1463 151L1377 151L1377 151L1291 151L1291 151L1205 151L1205 151L1119 151L1119 151L1033 151L1033 151L947 151L947 151L861 151L861 151L775 151L775 151L689 151L689 151L603 151L603 151L517 151L517 151L430 151L430 151L344 151L344 151L258 151L258 151L172 151L172 151L86 151L86 151L0 151Z" fill="#150e10"></path>
            </svg>
            <div className="summary-content-wrapper">
                <h2 className="summary-title">Welcome to the world of Horizon</h2>
                <p className="summary-under-title">In an uncharted land, explore and discover the mysteries surrounding this wild and dangerous world filled with majestic views but the wildest beasts known to humans. New Ennemies, mysteries and a whole new area to discover and explore the way you see fit!</p>
                <div className="card-wrapper">
                    <Card title='Brave an expensive open world' content='Discover distant lands, new enemies, rich cultures and striking characters.' bgPic={aloyForest}/>
                    <Card title='A Majestic Frontier' content='Explore the lush forests, sunken cities and towering mountains of a far-future America.' bgPic={aloyWall}/>
                    <Card title='Confront New Dangers' content='Engage in strategic battles against enormous machines and mounted human enemies by using weapons, gear and traps crafted from salvaged parts.' bgPic={aloyShellsnaper}/>
                    <Card title='Unravel Startling Mysteries' content="Uncover the secret behind Earth's imminent collapse and unlock a hidden chapter in the ancient past... one that will change Aloy forever." bgPic={aloyHollywood}/>
                </div>
            </div>
        </section>
    )
}

export default Summary;