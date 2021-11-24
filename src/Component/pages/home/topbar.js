import './topbar.css'
import {Person, Search , Chat , Notifications  } from '@material-ui/icons'


function Topbar() {
    return (
       <>
       <div className="topbarContainer"> 
           
           <div className="topbarLeft">
               <span className="logo">Social - Media</span>
           </div>
           
           <div className="topbarCenter">
               <div className="searchBar">
                   <Search className="searchIcon"/>
                   <input placeholder="Search your Friend , post , video" className="inputBar"/>
               </div>
           </div>

           <div className="topbarRigth">
               <div className='topbarLinks' >
                   <span className='topbarLink'>Home Page</span>
                   <span className='topbarLink'>Time line</span>
               </div>
               <div className='topBarIcon'>
                   <Person  />
                   <span className="topBarIconBadge">1</span>
               </div>
               <div className='topBarIcon'>
                   <Chat/>
                   <span className="topBarIconBadge">2</span>
               </div>
               <div className='topBarIcon'>
                   <Notifications/>
                   <span className="topBarIconBadge">1</span>
               </div>
               <img src="/asset/profile/profile9.jpg" className="topBarImg" alt=""/>
           </div>
       </div>
       

       </>
    )
}

export default Topbar
