import { useState } from "react";
import { useGetApiPastrieIdQuery } from "../slices/gameApiSlice";

export default function PastriesById() {
    const [pastrieId, setPastrieId] = useState()
    
    const {data, error} =  useGetApiPastrieIdQuery(pastrieId)
    

    return(
        <>
            <input type="number"  value={pastrieId}  onChange={(e) => setPastrieId(e.target.value) }/>
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
