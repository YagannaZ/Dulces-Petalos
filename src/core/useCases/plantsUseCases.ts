import type {PlantRepository} from '../domain/PlantRepository'
import type {Plant} from "../domain/Plant.ts";


export const plantUseCases = ({plantRepository}: { plantRepository: PlantRepository }) => ({
  getAllPlants: async (): Promise<Plant[]> => {
    return await plantRepository.getAllPlants()
  },

  getPlantById: async (id: string): Promise<Plant> => {
    return await plantRepository.getPlantById(id)
  },
})