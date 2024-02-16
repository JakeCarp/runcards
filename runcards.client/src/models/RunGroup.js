export class RunGroup {
    constructor(data) {
        this.id = data._id
        this.type = data.type
        this.title = data.title
        this.cards = data.cards
        this.zoneId = data.zoneId
        this.description = data.description
    }
}