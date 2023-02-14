export class Resouce {
  constructor(data) {
      this.id = data._id
      this.unitNumber = data.unitNumber
      this.type = data.type
      this.minStaff = data.minStaff
      this.alwaysStaffed = data.alwaysStaffed
      this.stationId = data.stationId
      this.admin = data.admin
      this.agency = data.agency
      this.station = data.station
  }
}
