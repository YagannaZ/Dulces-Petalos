import type {PlantRepository} from "../domain/PlantRepository.ts";
import type {PlantDTO} from "./dtos/PlantDTO.ts";
import {toDomainPlant} from "./mappers/plant.mapper.ts";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? 'https://dulces-petalos.jakala.es';
const api = axios.create({
  baseURL: `${API_URL}/v1`,
})

export const plantRepository: PlantRepository = {
  getAllPlants: async () => {
    try {
      const {data: plants} = await api.get<PlantDTO[]>('/product');
      console.error('Lista de plantas: ', plants);

      return plants.map(toDomainPlant)
    } catch (error) {
      console.error('Error al hacer la petición:', error);
      throw error;
    }
  },
  getPlantById: async (id: string) => {
    try {
      const {data: plant} = await api.get<PlantDTO>(`/product/${id}`);
      if (!plant) {
        throw new Error('No plant found');
      }
      console.error('Detalle de planta: ', plant);

      return toDomainPlant(plant)
    } catch (error) {
      console.error('Error al hacer la petición:', error);
      throw error;
    }
  }
}
