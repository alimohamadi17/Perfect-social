import './Online.css'

function Online({user}) {
    return (
                <li className="rightbarlistitem" >
                    <div className="rightbarcontainerimage" >
                    <img className="rightbarlistimage" src={user.imagesProfile} alt=""/>
                     <span className="rightbaronline" ></span>   
                    </div>
                    <span className="rightbaronlineNmae" >{user.userName}</span>
                </li>
    )
}

export default Online
