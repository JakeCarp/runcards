export class Resource {
    constructor(data) {
        this.name = data.name
        this.unitNumber = data.unitNumber
        this.type = data.type
        this.minStaff = data.minStaff
        this.alwaysStaffed = data.alwaysStaffed
        this.stationId = data.stationId
        this.id = data._id
    }
}