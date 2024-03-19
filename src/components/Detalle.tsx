import { useSearchParams } from "react-router-dom"
import { IPlant } from "../interfaces/planta.interface"
import { useEffect, useState } from 'react'
import Image from "./Image"
import Description from "./Description"

function Detalle() {

    const plantaVacia = {id:'',name:'',binomialName:'',price:0,imgUrl:'',wateringsPerWeek:0,fertilizerType:'',heightInCm:0}
    const direccionAPI = `https://dulces-petalos.herokuapp.com/api/product/`
    const [planta, setPlanta] = useState<IPlant>(plantaVacia)
    const [qParams] = useSearchParams()
    const [errorFetch, setErrorFetch] = useState<boolean>(false)

    
    const getPlanta = async (): Promise<void> => {
        try {
            const data = await fetch(direccionAPI + qParams.get("id"))
            const json = await data.json()
            setPlanta(json)
            setErrorFetch(false)
        } catch (e) {
            setErrorFetch(true)
            console.log('algo ha ido mal')
            console.log(e)
        }
    }
    
    useEffect(() => {
        getPlanta();
    });

    return (
        <>
            {errorFetch && (
                <div className='mt-5'>
                    <h4 className='alert alert-danger' >Conexión fallida</h4>
                </div>
            )}

            {!errorFetch && (
                <div className="global">
                    <div className="container p-3 rounded">

                        <div className="row px-4 ">
                            <a className="btn btn-dark offset-md-6 col-6" href="/">Volver</a>
                        </div>

                        <div className="row p-4">
                            <Image plant={planta}/>
                            <Description plant={planta}/>
                        </div>

                    </div>
                </div>
            )}
        </>

    )
}

export default Detalle