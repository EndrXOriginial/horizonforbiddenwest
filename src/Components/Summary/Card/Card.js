const Card = (prop) => {
    return (
        <div className="card">
            <div className="card-media"><img src={prop.bgPic} /></div>
            <div className="card-content">
                <h3>{prop.title}</h3>
                <p>{prop.content}</p>
            </div>
        </div>
    )
}

export default Card;