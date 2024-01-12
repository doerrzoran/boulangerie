
import {  useDeletePastrieMutation, useGetApiPastriesQuery } from "../slices/gameApiSlice"
import PastriesById from "./PastriesById";
import PastriesByWord from "./PastriesByWord";
import { Link } from "react-router-dom";
import PastriesCount from "./PastriesCount";

export default function BackOffice() {
    const { data } = useGetApiPastriesQuery();
    const [deletePastrie] = useDeletePastrieMutation();
    
    const removePastry = async (id) => {
        try {
            await deletePastrie({id});
            console.log('Deletion successful');
        } catch (error) {
            console.log('Suppression failed', error);
        }
    };
    return(
        <>
            <h2>Welcome Admin</h2>
            <PastriesCount/>
            <PastriesById/>
            <PastriesByWord/>
            <ul>
                {data && data.map((pastry) => (
                    <li key={pastry.id}>
                    {
                        'id: '+pastry.id+
                        ' name: ' + pastry.name+
                        ' quantity: '+pastry.quantity+
                        (pastry.quantityWon ? ' quantityWon: '+pastry.quantityWon : '')
                    }
                    <Link to={"/modifyPastries/"+pastry.id}>modifier</Link>
                    <button onClick={() => removePastry(pastry.id)}>supprimer</button>
                    </li>
                    ))}
            </ul>
            <div>
            <Link to="/addPastries">ajouter une patisserie</Link>
            </div>
        </>
    )
}
