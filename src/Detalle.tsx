import { useSearchParams } from "react-router-dom"
import { IPlant } from "./interfaces/planta.interface"
import { useEffect, useState } from 'react'

function Detalle() {

    const direccionAPI = `https://dulces-petalos.herokuapp.com/api/product/`
    const [qParams] = useSearchParams()
    const [planta, setPlanta] = useState<IPlant>()
    const [errorFetch, setErrorFetch] = useState<boolean>(false)

    const getPlanta = async (): Promise<void> => {
        try {
            const data = await fetch(direccionAPI + qParams.get("id"))
            const json: IPlant = await data.json()
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
    }, []);

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
                            {/* <div className="offset-md-6 col-6"> */}
                            <a className="btn btn-dark offset-md-6 col-6" href="/">Volver</a>
                            {/* </div> */}
                        </div>

                        <div className="row p-4">
                            <div className="col-6">
                                <img src={planta?.imgUrl}
                                    alt={`Planta: ${planta?.name}`}
                                    className="img-fluid img-detail" />
                            </div>
                            <div className="col-6 ">
                                <h2>Nombre: {planta?.name}</h2>
                                <br />
                                <div className="info">
                                    <p><strong>Nombre científico:</strong> {planta?.binomialName}</p>
                                    <p><strong>Precio:</strong> {planta?.price}</p>
                                    <p><strong>Riegos por semana:</strong> {planta?.wateringsPerWeek}</p>
                                    <p><strong>Fertilizante recomendado:</strong> {planta?.fertilizerType === 'nitrogen' ? 'nitrogenado' : 'fosforado'}</p>
                                    <p><strong>Altura:</strong> {planta?.heightInCm}cm</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>

    )
}

export default Detalle