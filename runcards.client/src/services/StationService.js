import { AppState } from "../AppState"
import { Station } from "../models/Station"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class StationService {
    async getStations() {
        try {
            const res = await api.get("/api/station")
            const objmap = res.data.map(s => new Station(s))
                if (!Array.isArray(objmap)) {
                  console.error('Input is not an array');
                  return [];
                }
              
                const wordMap = {};
                const wordsOnly = [];
              
                objmap.forEach((obj) => {
                  if (typeof obj !== 'object' || !obj.name || typeof obj.name !== 'string') {
                    console.error('Array contains non-object elements or objects without "name" property');
                    return;
                  }
              
                  const [word, num] = obj.name.split(' ');
                  if (!isNaN(parseInt(num)) && num !== '') {
                    if (!wordMap[word]) {
                      wordMap[word] = [];
                    }
                    wordMap[word].push({ ...obj, name: num });
                  } else {
                    wordsOnly.push(obj);
                  }
                });
              
                // Sort numbers within word groups
                for (const word in wordMap) {
                  wordMap[word].sort((a, b) => a.name - b.name);
                }
              
                // Construct the sorted array
                const result = [];
              
                Object.keys(wordMap)
                  .sort()
                  .forEach((word) => {
                    wordMap[word].forEach((obj) => {
                      obj.name = `${word} ${obj.name}`;
                      result.push(obj);
                    });
                  });
              
                // Sort strings without numbers alphabetically
                wordsOnly.sort((a, b) => a.name.localeCompare(b.name));
              
                // Concatenate sorted words without numbers to the result
                result.push(...wordsOnly);
              
                AppState.stations = result;
              
        } catch (error) {
            logger.error(error)
        }
    }

    async createStation(body) {
        try {
            const res = await api.post("/api/station", body)
            AppState.stations.push(new Station(res.data))
        } catch (error) {
            logger.error(error)
        }
    }
    
    async updateStation(body) {
        try {
            const res = await api.put("/api/station/" + body.id, body)
            let updated = new Station(res.data)
            console.log(updated)
            let index = AppState.stations.findIndex(s => s.id === updated.id)
            AppState.stations.splice(index, 1, updated)
            console.log(AppState.stations)
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteStation(id) {
        try {
            await api.delete("/api/station/" + id)
            AppState.stations = AppState.stations.filter(s => s.id !== id)
        } catch (error) {
            logger.error(error)
        }
    }
}

export const stationService = new StationService()
