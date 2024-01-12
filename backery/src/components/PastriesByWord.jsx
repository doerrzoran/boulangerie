import { useState } from "react"
import { useGetApiPastrieWordQuery } from "../slices/gameApiSlice"

export default function PastriesByWord() {
    const [pastrieWord, setPastrieWord] = useState()
    const [word, setWord] = useState()
    
    const {data, error} =  useGetApiPastrieWordQuery(word)
    
    const handleSearchClick = () => {
        // Call the query hook with the current value of pastrieWord
        // The query will automatically be triggered with the updated value
        // and the result will be available in the data and error variables
    }

    return(
        <>
            <input type="text"  value={pastrieWord}  onChange={(e) => setPastrieWord(e.target.value) }/>
            <button onClick={() => setWord(pastrieWord)}>chercher</button>
            {
                data ? (
                    <p>
                        {
                             data.name+
                            ', quantity: '+data.quantity+
                            ', quantityWon: '+data.quantityWon
                        }
                    </p>
                ):(
                    <p></p>
                )
            }
        </>
    )
 
}
