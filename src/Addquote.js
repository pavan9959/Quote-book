import React from "react" 
import QuoteForm from "./QuoteForm"

const Addquote=(props)=>{
    const {additem}=props

const formSubmission=(formData)=>{
    additem(formData)
}

    return <div>
            <h2>Add Quote</h2>
            <QuoteForm formSubmission={formSubmission}/>
    </div>
}
export default Addquote