import React from "react" 
import QuoteItem from "./QuoteItem"

const QuoteList=(props)=>{
    const {quotes,removeItem,edititem}=props
    return <div>
        {quotes.length==0?<div>
            <h1>No quotes found</h1>
            <p>Enter your first Quote</p>
        </div>:<div>
                {quotes.map((ele)=>{
                    return <QuoteItem  key={ele.id} {...ele} removeItem={removeItem} edititem={edititem}/>
                })}
            </div>}
    </div>
}
export default QuoteList