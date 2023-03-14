import { AppState } from "../AppState";
import { Resouce } from "../models/Resouce";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ResourceGuidelineListService{

  async createGuidelineList(guideline){
    try {
      const res = await api.post("/api/resourceGuidelineList", guideline)
      AppState.resourceGuidelineLists.push(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  // async editResourceGuide(edited){
  //   try {
  //     const res = await api.put("/api/resourceGuideline/" + edited._id, edited )
  //     AppState.activeResourceGuideline = res.data
  //     let index = AppState.resourceGuidelines.findIndex(r => r._id === res.data._id)
  //     AppState.resourceGuidelines.splice(index, 1, res.data)
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }


  async deleteGuidelineList(id){
    try {
      await api.delete("/api/resourceGuidelineList/" + id)
      AppState.resourceGuidelineLists = AppState.resourceGuidelineLists.filter(r => r._id !== id)
    } catch (error) {
      logger.error(error)
    }
  }
}


export const resourceGuidelineListService = new ResourceGuidelineListService();
