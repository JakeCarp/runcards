export class RunGroup {
    constructor(data) {
        this.id = data.id
        this.type = data.type
        this.title = data.title
        this.cards = data.cards
        this.description = data.description
    }
}