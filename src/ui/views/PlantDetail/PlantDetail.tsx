import {useParams} from "react-router-dom";

export const PlantDetail = () => {
  const {id} = useParams<{ id: string }>();

  return <h1>Detalle de flor {id}</h1>
}