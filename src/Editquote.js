import React from "react" 
import QuoteForm from "./QuoteForm"

const Editquote=(props)=>{
    const {id,name,body,edititem,handeltoogle}=props

    const formSubmission=(FormData)=>{
        edititem(FormData)
    }

    return <div>
        <h3>edtqut</h3>
        <QuoteForm id={id} name={name} body={body} formSubmission={formSubmission} edititem={edititem}
        handeltoogle={handeltoogle}
        />
    </div>
}
export default Editquote