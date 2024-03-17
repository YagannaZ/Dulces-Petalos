import { IPlant } from './interfaces/planta.interface';

interface PlantCardProps {
    plant: IPlant;
}

function PlantCard({ plant }: PlantCardProps) {
    return (
        
            <div className='card w-100 h-100'>
                <img
                    src={plant.imgUrl}
                    alt={'Nombre de planta: ' + plant.name}
                    className='card-img-top bordered p-1'
                    style={{ height: '65%' }}
                />
                <div className='card-body bg-transparent'>
                    <h5 className='card-title'>{plant.name}</h5>
                    <p className='card-text'>{plant.binomialName}</p>
                    <p className='card-text'>{plant.price}</p>
                </div>
            </div>
        
    );
}

export default PlantCard;
