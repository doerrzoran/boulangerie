import { useEffect, useState } from "react";
import { useGetApiPastrieIdQuery, usePutChangePastrieMutation } from "../slices/gameApiSlice"
import { useNavigate, useParams } from "react-router-dom";

export default function ChangePastrie() {
    const {id} = useParams()
    const {data, error} =  useGetApiPastrieIdQuery(id)
    const navigate = useNavigate()
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [ChangePastrie] = usePutChangePastrieMutation()

    useEffect(() =>{
        if (data) {
           setName(data.name) 
           setQuantity(data.quantity) 
        }
    }, [setName, setQuantity, data])

    
    const modifyPastrie = async () => {
        console.log(name, quantity)
        try{
            const response = ChangePastrie({id, name, quantity });
            console.log(response);
            navigate('/backoffice')
        } catch (error){
            console.error('modification failed:', error);
        }
    }

    return(
        <>
            <h1>modifier une patisserie</h1>
            <form>
                

                <label htmlFor="name">nom:</label>
                <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="quantity">Quantité:</label>
                <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </form>
            <button onClick={modifyPastrie}>modifier</button>
        </>
    )
}
