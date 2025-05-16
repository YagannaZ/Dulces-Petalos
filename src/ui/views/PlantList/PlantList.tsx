import {getPlantsUseCases} from "@/app/getPlantsUseCases.ts";
import {useEffect, useState} from "react";
import type {Plant} from "@/core/domain/Plant.ts";
import style from './_style/PlantList.module.css'
import {Card} from "@/ui/components/card/Card.tsx";
import {PlantFilter} from "@/ui/components/filterInput/FilterInput.tsx";

export const PlantList = () => {
  const {getAllPlants} = getPlantsUseCases();
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filterText, setFilterText] = useState('');

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

  const handleFilterChange = (text: string) => {
    setFilterText(text);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={style.main}>
      <PlantFilter onFilterChange={handleFilterChange}/>
      <div className={style.grid}>
        {filteredPlants.map((plant) => (
          <Card plant={plant}/>
        ))}
      </div>
    </div>
  )
}