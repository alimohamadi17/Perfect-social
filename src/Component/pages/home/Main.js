import "./Main.css"
import Post from "./posts/post"
import {Posts} from '../../../Data'

function Main() {
    return (
        <div className="Main">
            <div className="mainwrapper">
            {
                Posts.map((p)=>
                
                <Post key={p.id} post={p}/> 
                
                )
            }
                
            </div>
           
        </div>
    )
}

export default Main
