import { IPlant } from "../interfaces/planta.interface"

interface ImgPlanta {
    plant: IPlant;
}

function Image({plant}: ImgPlanta) {

    return (
        <>
            <div className="col-6">
                <img src={plant.imgUrl}
                    alt={`Planta: ${plant.name}`}
                    className="img-fluid img-detail rounded" />
            </div>
        </>
    )
}

export default Image