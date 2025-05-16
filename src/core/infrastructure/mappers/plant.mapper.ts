import type {Plant} from "../../domain/Plant.ts";
import type {PlantDTO} from "../dtos/PlantDTO.ts";

export const toDomainPlant = (dto: PlantDTO): Plant => ({
  id: dto.id,
  name: dto.name,
  binomialName: dto.binomialName,
  price: dto.price,
  imgUrl: dto.imgUrl,
  wateringsPerWeek: dto.wateringsPerWeek,
  fertilizerType: dto.fertilizerType,
  heightInCm: dto.heightInCm,
});