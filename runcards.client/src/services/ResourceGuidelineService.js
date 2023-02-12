import { AppState } from "../AppState";
import { Resouce } from "../models/Resouce";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ResourceGuidelineService{
  async getResourceGuidelines(){
    try {
      const res = await api.get("/api/resourceGuideline")
      AppState.resourceGuidelines = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createGuideline(guideline){
    try {
      const res = await api.post("/api/resourceGuideline", guideline)
      AppState.resourceGuidelines.push(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}


export const resourceGuidelineService = new ResourceGuidelineService();
