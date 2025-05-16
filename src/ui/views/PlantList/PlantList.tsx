import {getPlantsUseCases} from "@/app/getPlantsUseCases.ts";
import {useEffect, useState} from "react";
import type {Plant} from "@/core/domain/Plant.ts";
import style from './_style/PlantList.module.css'
import {Card} from "@/ui/components/card/Card.tsx";

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
      <div className={style.main}>
        <div className={style.grid}>
          {plants.map((plant) => (
            <Card plant={plant}/>
          ))}
        </div>
      </div>
    </>
  )
}