import type {Plant} from "@/core/domain/Plant.ts";

export const sanitizePlant = (plant: Plant): Plant => ({
  ...plant,
  name: plant.name === "Elecho" ? "Helecho" : plant.name,
});