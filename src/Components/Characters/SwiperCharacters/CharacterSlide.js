export const CharacterSlide = ({character}) => {

    return (
        <div className="character-card">
            <div className="character-card-media"><img src={character.picture} /></div>
            <div className="character-card-content">
                <h3>{character.name}</h3>
                <p>{character.description}</p>
            </div>
        </div>
    )
};