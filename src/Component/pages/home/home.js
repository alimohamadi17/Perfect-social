import "./home.css"
import Topbar from './topbar'
import RightBar from './RightBar'
import LeftBar from './LeftBar'
import Main from './Main'
function Home() {
    return (
        <>
            <Topbar/>
            <div className="Homecontainer">
                <LeftBar/>  
                <Main/>
                <RightBar/>
                
            </div>
        </>
    )
}

export default Home
