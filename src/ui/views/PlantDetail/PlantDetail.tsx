import {useParams} from "react-router-dom";
import {getPlantsUseCases} from "@/app/getPlantsUseCases.ts";
import {useEffect, useState} from "react";
import type {Plant} from "@/core/domain/Plant.ts";
import style from './_style/plantDetail.module.css'
import {sanitizePlant} from "@/ui/views/utils/sanitizePlants.ts";
import {Breadcrumbs} from "@/ui/components/breadcrumbs/Breadcrumbs.tsx";

type PlantDetailParams = {
  id: string;
}

const fertilizerTranslations: Record<string, string> = {
  phosporus: 'fósforo',
  nitrogen: 'nitrógeno',
};

export const PlantDetail = () => {
  const {id} = useParams<PlantDetailParams>();
  const {getPlantById} = getPlantsUseCases()

  const [plant, setPlant] = useState<Plant>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');


  useEffect(() => {
    if (!id) return;

    const fetchPlant = async () => {
      setLoading(true);

      try {
        const plantData = await getPlantById(id);
        setPlant(sanitizePlant(plantData));
      } catch {
        setError("Error al cargar la planta.")
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Cargando...</h1>;
  if (!plant) return <h1>Planta no encontrada</h1>;


  return (
    <div className={style.mainDetail}>
      <Breadcrumbs plantName={plant.name}/>
      <div className={style.plantContainer}>
        <img src={plant!.imgUrl} alt={plant.name} className={style.image}/>
        <div className={style.infoContainer}>
          <h1 className={style.name}>{plant.name}</h1>
          <h6 className={style.binomialName}>{plant.binomialName}</h6>
          <h4 className={style.price}>€{plant.price.toFixed(2)}</h4>
          <ul>
            <li>Regar {plant.wateringsPerWeek} por semana</li>
            <li>Fertilizar con {fertilizerTranslations[plant.fertilizerType]}</li>
          </ul>
          <button className={style.button}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}