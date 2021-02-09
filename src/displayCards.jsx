const DisplayCards = (props) => {

    return (
        <div>
            {props.data.map((villager, i) => {
                return (
                <div key={`key is: ${i}`} className="cardContainer">
                    <div className="villagerCard" onClick={() => props.clickie ? props.handleClick(villager) : null}>
                        <img className="villagerPic" src={villager['image_uri']} alt={villager.name['name-USen']} />
                        <p className="villagerName">{villager.name['name-USen']}</p>
                    </div>
                </div>
                )
            })}
        </div>
    )
}


export default DisplayCards