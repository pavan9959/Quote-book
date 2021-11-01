import React from "react" 
// import {v4 as uuidv4} from "react"
const {useState}=React 

const QuoteForm=(props)=>{
    const {formSubmission,id:slno,name:author,body:quote,handeltoogle}=props //already name is declared so name=author


    const [name,setname]=useState(author ? author:"")
    const [body,setbody]=useState(quote?quote:"")
    const [id,setid]=useState(slno?slno:Number(new Date()))

    const handelSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            id:id,
            name:name,
            body:body
        }
        formSubmission(formdata) 
        if(handeltoogle){
            handeltoogle()
        }
        // reset form
        setname("")
        setbody("")
    }


    return <div>
        <h2>Add quote</h2>
        <form onSubmit={handelSubmit}>
            <label>Name</label><br/>
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /><br/>
            <label>Body</label><br/>
            <textarea value={body} onChange={(e)=>{setbody(e.target.value)}} /><br/>
            <button>Save</button>
        </form>
    </div>
}

export default QuoteForm