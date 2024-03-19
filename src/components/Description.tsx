import { IPlant } from "../interfaces/planta.interface"

interface InfoPlanta {
    plant: IPlant;
}

function Description ({plant}:InfoPlanta) {
    return(
        <div className="col-6 ">
                                <h2 className="">Nombre: {plant?.name}</h2>
                                <br />
                                <div className="info">
                                    <p><strong>Nombre científico:</strong> {plant?.binomialName}</p>
                                    <p><strong>Precio:</strong> {plant?.price}</p>
                                    <p><strong>Riegos por semana:</strong> {plant?.wateringsPerWeek}</p>
                                    <p><strong>Fertilizante recomendado:</strong> {plant?.fertilizerType === 'nitrogen' ? 'nitrogenado' : 'fosforado'}</p>
                                    <p><strong>Altura:</strong> {plant?.heightInCm}cm</p>
                                </div>
                            </div>
    )
}

export default  Description