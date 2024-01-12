import { useEffect } from "react"
import { useGetApiPastriesCountQuery } from "../slices/gameApiSlice"

export default function PastriesCount() {
    const {data} = useGetApiPastriesCountQuery()

    useEffect(() =>{
        console.log('count'+data)
    })

    return(
        <p>nombre total de patisseries:{data} </p>
    )
}
