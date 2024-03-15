import { useState } from 'react'
import './Home.css'
import { IPlant } from './interfaces/planta.interface'
import React from 'react'

function Home() {
    const [errorFetch, setErrorFetch] = useState<boolean>(false)
    const [plantas, setPlantas] = useState<IPlant[]>([])

    const fetchProductos = async (): Promise<void> => {
        try {
            const data = await fetch('https://dulces-petalos.herokuapp.com/api/product')
            const json: IPlant[] = await data.json()
            setErrorFetch(false)
            setPlantas(json)
        } catch (e) {
            setErrorFetch(true)
            console.log('algo ha ido mal')
        }
    }

    React.useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <>
            <div className='container' style={{ backgroundColor: 'gray' }}>
                <h2 className='text-light'>Listado de productos</h2>

                {/* {errorFetch && (
                    <div className='alert alert-danger' role='alert' >
                        Conexión fallida
                    </div>
                )} */}
                {/* {errorFetch! && ( */}
                    <div className='row'>
                        {plantas.map((p) => (
                            <div className='col-3' key={p.name}>
                                <div className='card' style={{ width: '18rem' }}>
                                    <img src={p.imgUrl} alt={'Nombre de planta: '+p.name} className='card-img-top bordered'/>
                                    <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.binomialName}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                {/* )} */}
            </div>
        </>
    )
}

export default Home
