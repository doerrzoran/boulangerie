import { Link } from "react-router-dom"
import { useGetPastriesQuery } from "../slices/gameApiSlice"


export default function Home() {
    const{
        data,
        isLoading,
        isSuccess,
        isError,
        error
    
    } = useGetPastriesQuery()

    // console.log(data)

    return(
        <>
            <div>
                <div className="container">
                    <h1>Tentez de remporter une ou plusieurs patisseries<br />avec notre jeu de yams</h1>
                </div>
                <Link to="/play" >jouer</Link>
            </div>
            { 
                isLoading ? <p>En chargement</p> : <div>
                    {
                        data.map((pastry, i) => 
                        <article key={i}>
                            <p><img src={pastry.image} alt="" /></p>
                            <p>
                                {       
                                    pastry.name+': '+pastry.quantity
                                }
                            </p>
                            
                        </article>
                        )
                    }
                </div> 
            }
            
        </>
    )
   
}
