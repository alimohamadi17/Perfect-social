import './RightBar.css'
import {Users} from './../../../Data'
import Online from '../../../Online/Online'

function RightBar() {
    return (
        <div className="RightBar">
            <div className='rightbartop'>
                <img  className='rightimage' src="/asset/imagess.jpg" alt="images"/>
                <h1 className='righttext' >Advertising Social-Media</h1> 
            </div>

            <img className='imageMain' src="/asset/advertising.jpg" alt=""/>
            <h4>Online Friends</h4>
            <hr/>
            <ul className="rightbarlist" >
            {Users.map((u)=>(
              <Online key={u.id} user={u}/>  
            ))}
            </ul>
        </div>
    )
}

export default RightBar
