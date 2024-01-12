import { useState } from "react";
import { usePostAddPastrieMutation } from "../slices/gameApiSlice";
import { useNavigate } from "react-router-dom";

export default function AddPastrie() {
  const navigate = useNavigate()
    const [postAddPastrie] = usePostAddPastrieMutation();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const addNewPastrie = async () => {
        try {
          const response = await postAddPastrie({ name, quantity});
          console.log(response);
        } catch (error) {
          console.error('add failed:', error);
        }
        navigate('/backoffice')
      };

      return(
        <>
            <div>
                <h1>ajouter une patisserie</h1>
                <form>
                    <label htmlFor="name">name:</label>
                    <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="quantity">Quantité:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </form>
            </div>
        
        <button onClick={addNewPastrie}>ajouter</button>
        </>
      )
    
    
}
