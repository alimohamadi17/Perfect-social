

function justfriend({user}) {
    return (
        <li className="leftbarfriend">
        <img className="image" src={user.imagesProfile} alt=""/>
        <span className="names">{user.userName}</span>
        </li>
    )
}

export default justfriend
