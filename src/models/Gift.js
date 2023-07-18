export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.imgUrl = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
    }
}