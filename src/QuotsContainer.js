import React,{useState,useEffect} from "react" 
import QuotList from "./QuoteList"
import Addquote from "./Addquote"

const QuotesContainer=(props)=>{
    const [quotes,setQuotes]=useState([])

    const removeItem=(id)=>{
       const newlist= quotes.filter((ele)=>{
            if(ele.id!=id){return ele}
        })
        setQuotes(newlist)
    }

    const edititem=(quote)=>{
        const result=quotes.map((ele)=>{
            if(ele.id===quote){return {...ele,...quote}}
            else{return {...ele}}
        })
    }

    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem("quotes"))||[]
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem("quotes",JSON.stringify(quotes)) 
    },[quotes])

    const additem=(recivedQuote)=>{
        const result=[recivedQuote,...quotes]
        setQuotes(result)
    }

    return <div>
            <p>quotes container</p>
            <QuotList quotes={quotes} removeItem={removeItem} edititem={edititem} />
            <Addquote additem={additem} />
    </div>
}
export default QuotesContainer