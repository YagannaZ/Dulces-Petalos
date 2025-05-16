import {plantUseCases} from "../core/useCases/plantsUseCases.ts";
import {plantRepository} from "../core/infrastructure/plantRepository.ts";

export const getPlantsUseCases = () => plantUseCases({plantRepository})