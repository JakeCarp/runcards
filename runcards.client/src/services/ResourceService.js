import { AppState } from "../AppState";
import { Resouce } from "../models/Resouce";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ResourceService{
  async getDepartmentResources(){
    console.log("resourceService");
    try {
      const res = await api.get("/api/resouce")

    //   const res = {
    //     data: [
    //     {
    //       id: 1,
    //       unitNumber : "E1",
    //       type : "Paramedic Engine",
    //       minStaff : 3,
    //       alwaysStaffed : true,
    //       stationId : 1,
    //       admin : false,
    //       agency : 'NFD Resource',
    //       station: {
    //         name: "station 1"
    //       }
    //     },
    //     {
    //       id: 1,
    //       unitNumber : "E1",
    //       type : "Paramedic Engine",
    //       minStaff : 3,
    //       alwaysStaffed : true,
    //       stationId : 1,
    //       admin : false,
    //       agency : 'NFD Resource',
    //       station: {
    //         name: "station 4"
    //       }
    //     },
    //     {
    //       id: 1,
    //       unitNumber : "E1",
    //       type : "Paramedic Engine",
    //       minStaff : 3,
    //       alwaysStaffed : true,
    //       stationId : 1,
    //       admin : false,
    //       agency : 'NFD Resource',
    //       station: {
    //         name: "station 3"
    //       }
    //     },
    //     {
    //       id: 1,
    //       unitNumber : "E1",
    //       type : "Paramedic Engine",
    //       minStaff : 3,
    //       alwaysStaffed : true,
    //       stationId : 1,
    //       admin : false,
    //       agency : 'NFD Resource',
    //       station: {
    //         name: "station 5"
    //       }
    //     },
    //     {
    //       id: 1,
    //       unitNumber : "E1",
    //       type : "Paramedic Engine",
    //       minStaff : 3,
    //       alwaysStaffed : true,
    //       stationId : 1,
    //       admin : false,
    //       agency : 'NFD Resource',
    //       station: {
    //         name: "station 2"
    //       }
    //     },
    //     {
    //       id: 1,
    //       unitNumber : "E1",
    //       type : "Paramedic Engine",
    //       minStaff : 3,
    //       alwaysStaffed : true,
    //       stationId : 1,
    //       admin : true,
    //       agency : 'NFD Resource',
    //     }
    //   ]
    // }
      res.data.forEach(r => {
        new Resouce(r);
        if(r.admin){
          AppState.resources["admin"].push(r)
        } else {
          let stationNameArr = r.station.name.split(" ")
          let stationName = stationNameArr[0] + stationNameArr[1]
          AppState.resources[stationName].push(r)
        }
      })
    } catch (error) {
      logger.error(error)
    }
  }
}


export const resourceService = new ResourceService();
