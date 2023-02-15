export class Resource {
    constructor(data) {
        this.unitNumber = data.unitNumber
        this.type = data.type
        this.minStaff = data.minStaff
        this.alwaysStaffed = data.alwaysStaffed
        this.stationId = data.stationId
        this.admin = data.admin
        this.id = data._id,
        this.station = data.station
    }
}
