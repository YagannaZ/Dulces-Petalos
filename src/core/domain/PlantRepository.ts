import type {Plant} from "./Plant.ts";

export interface PlantRepository {
  getAllPlants(): Promise<Plant[]>;

  getPlantById(id: string): Promise<Plant>;
}