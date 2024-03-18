import { useState, ChangeEvent } from 'react'
import './Home.css'
import { IPlant } from './interfaces/planta.interface'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import Item from './Item'

function Home() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errorFetch, setErrorFetch] = useState<boolean>(false)
    const [plantas, setPlantas] = useState<IPlant[]>([])
    const [filtro, setFiltro] = useState<string>('')
    //VARIABLE GLOBAL - .ENV?
    const direccionAPI = 'https://dulces-petalos.herokuapp.com/api/product'

    const fetchPlantas = async (): Promise<void> => {
        try {
            const data = await fetch(direccionAPI)
            const json: IPlant[] = await data.json()
            setErrorFetch(false)
            setPlantas(json)
        } catch (e) {
            setErrorFetch(true)
            console.log('algo ha ido mal')
        }
    }

    React.useEffect(() => {
        fetchPlantas();
    }, []);

    const filtrar = (e: ChangeEvent<HTMLInputElement>) => {
        setFiltro(e.target.value)

        const plantasFiltradas = plantas.filter((planta) =>
            planta.name.toLowerCase().includes(filtro.toLowerCase()) ||
            planta.binomialName.toLowerCase().includes(filtro.toLowerCase()))

        setPlantas(plantasFiltradas)
    }

    //DUDA SOBRE OPTIMIZACION
    // const plantasFiltradas = plantas.filter((planta) =>
    //     planta.name.toLowerCase().includes(filtro.toLowerCase()) ||
    //     planta.binomialName.toLowerCase().includes(filtro.toLowerCase()))

    const navigate = useNavigate()

    return (
        <>
            <div className='global'>
                <div className="container p-3 rounded" >
                    <div className='row px-4'>
                        <h1 className='text-dark col-4 display-3'>Productos</h1>
                        <Search onChange={filtrar} />
                    </div>

                    {/* Si hay un error en la llamada de la información */}
                    {errorFetch && (
                        <div className='mt-5'>
                            <h4 className='alert alert-danger' >Conexión fallida</h4>
                        </div>
                    )}

                    {/* Si la llamada es correcta */}
                    {!errorFetch && (
                        <div className='p-4'>
                            <div className='row'>
                                {plantas.map((p) => (
                                    <div className='col-3 mt-5 d-flex align-items-stretch'
                                        key={p.name}
                                        onClick={() => navigate(`/detalle?id=${p.id}`)} >
                                        <Item plant={p} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export default Home
