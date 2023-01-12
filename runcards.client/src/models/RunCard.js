export class RunCard {
    constructor(data) {
        this.id = data._id
        this.groupId = data.groupId
        this.title = data.title
        this.content = data.content
    }
}