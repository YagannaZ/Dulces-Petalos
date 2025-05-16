import {getPlantsUseCases} from "@/app/getPlantsUseCases.ts";
import {useEffect, useState} from "react";
import type {Plant} from "@/core/domain/Plant.ts";

export const PlantList = () => {
  const {getAllPlants} = getPlantsUseCases();
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plants = await getAllPlants();
        console.log('Plantas: ', plants);
        setPlants(plants);
      } catch (error) {
        console.log("Error al obtener plantas: ", error);
      }
    }

    fetchPlants();
  }, []);

  return (
    <>
      <h1>Lista de plantas</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.name}>{plant.name}</li>
        ))}
      </ul>
    </>
  )
}