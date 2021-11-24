import "./LeftBar.css"
import { Chat , VideocamOutlined , GroupAddOutlined , EventAvailableOutlined , BookmarkBorderOutlined , HelpOutlineOutlined , WorkOutlineOutlined , AccountBalanceOutlined } from '@material-ui/icons'
import {Users} from '../../../Data'
import Justfriend from "../../../justfriend/Justfriend"

function LeftBar() {
    return (
        <div className="Leftbar">
          <div className="leftbarwrapper">
              <ul className="leftbarlist">
                  <li className="leftbarlistItem">
                       <Chat className="leftbarIcon"/>  
                       <span className="leftbarText">Chat</span>
                  </li>
                  <li className="leftbarlistItem">
                       <VideocamOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Videos</span>
                  </li>
                  <li className="leftbarlistItem">
                       <GroupAddOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Groups</span>
                  </li>
                  <li className="leftbarlistItem">
                       <EventAvailableOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Event</span>
                  </li>
                  <li className="leftbarlistItem">
                       <BookmarkBorderOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Bookmarks</span>
                  </li>
                  <li className="leftbarlistItem">
                       <HelpOutlineOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Questions</span>
                  </li>
                  <li className="leftbarlistItem">
                       <WorkOutlineOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Job</span>
                  </li>
                  <li className="leftbarlistItem">
                       <AccountBalanceOutlined className="leftbarIcon"/>  
                       <span className="leftbarText">Courses</span>
                  </li>

                   
              </ul>
              <button className="leftbarbtn" >
               Show More...
               </button>
               <hr className="leftbarhr"/>
               <ul className="leftbarfriendlist">
                   {Users.map((u)=>(
                    <Justfriend  key={u.id} user={u}/>
                   ))}
               </ul>
          </div>
        </div>
    )
}

export default LeftBar
