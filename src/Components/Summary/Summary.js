import Card from "./Card/Card";


const Summary = () => {
    return (
        <section className="summary">
            <h2 className="summary-title">Welcome to the world of Horizon</h2>
            <p className="summary-under-title">In an uncharted land, explore and discover the mysteries surrounding this wild and dangerous world filled with majestic views but the wildest beasts known to humans. New Ennemies, mysteries and a whole new area to discover and explore the way you see fit!</p>
            <div className="card-wrapper">
                <Card title='Brave an expensive open world' content='Discover distant lands, new enemies, rich cultures and striking characters.' />
                <Card title='A Majestic Frontier' content='Explore the lush forests, sunken cities and towering mountains of a far-future America.' />
                <Card title='Confront New Dangers' content='Engage in strategic battles against enormous machines and mounted human enemies by using weapons, gear and traps crafted from salvaged parts.' />
                <Card title='Unravel Startling Mysteries' content="Uncover the secret behind Earth's imminent collapse and unlock a hidden chapter in the ancient past... one that will change Aloy forever." />
            </div>
        </section>
    )
}

export default Summary;