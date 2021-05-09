import { useState, useEffect } from 'react'
import API_KEY from './logo'

const CONTEXT_KEY = "13498f0f7888b686d";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(res => res.json()).then(results => {
                setData(results)
            })
        }
        fetchData()
    }, [term])
    return { data }
}

export default useGoogleSearch
