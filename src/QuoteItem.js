import React from "react" 
import Editquote from "./Editquote"
const {useState}=React

const QuoteItem=(props)=>{
    const {id,name,body,removeItem,edititem}=props
    const [toogle,setToogle]=useState(false)
    const handel_remove=(id)=>{
        removeItem(id)
    }
    function handeltoogle(){
        setToogle(!toogle)
    }

    return <div>
        {toogle ? <div><Editquote name={name} 
                                    id={id} 
                                    body={body}
                                    edititem={edititem}
                                    handeltoogle={handeltoogle}
                                    />
                                    <button onClick={()=>{setToogle(!toogle)}}>cancle</button>
                     </div> : 
                                        <div>
                                            <blockquote>{name}-{body}</blockquote>
                                            <button onClick={()=>{setToogle(!toogle)}}>edit</button>
                                        <button onClick={()=>{handel_remove(id)}}>remove</button>
                                        </div> 
        }
        
            </div>
}
export default QuoteItem