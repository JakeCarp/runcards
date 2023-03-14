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

  async getResourceGuidelineLists(id){
    try {
      const res = await api.get("/api/resourceGuideline/" + id + "/lists")
      AppState.resourceGuidelineLists = res.data
      AppState.activeResourceGuideline = AppState.resourceGuidelines.find(r => r._id === id);
    } catch (error) {
      logger.error(error)
    }
  }

  async createGuideline(guideline){
    try {
      const res = await api.post("/api/resourceGuideline", guideline)
      AppState.resourceGuidelines.push(res.data)
      AppState.activeResourceGuideline = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async editResourceGuide(edited){
    try {
      const res = await api.put("/api/resourceGuideline/" + edited._id, edited )
      AppState.activeResourceGuideline = res.data
      let index = AppState.resourceGuidelines.findIndex(r => r._id === res.data._id)
      AppState.resourceGuidelines.splice(index, 1, res.data)
    } catch (error) {
      logger.error(error)
    }
  }


  async deleteResourceGuide(){
    try {
      let guidelineId = AppState.activeResourceGuideline._id
      await api.delete("/api/resourceGuideline/" + guidelineId)
      AppState.resourceGuidelines = AppState.resourceGuidelines.filter(r => r._id !== guidelineId)
      AppState.activeResourceGuideline = AppState.resourceGuidelines[0];
    } catch (error) {
      logger.error(error)
    }
  }
}


export const resourceGuidelineService = new ResourceGuidelineService();
