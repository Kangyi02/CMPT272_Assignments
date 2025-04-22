export class Person {
    reporter: string
    phoneNumber: number
    baddieName: string
    location: string
    longtitude: number
    latitude: number
    picture: string
    detail: string
    time: number
    status: boolean
    constructor(reporter: string, phoneNumber: number, baddieName: string,
        location: string, longtitude: number, latitude: number, picture: string, 
        detail: string, time: number, status: boolean) {
        this.reporter = reporter
        this.phoneNumber = phoneNumber
        this.baddieName = baddieName
        this.location = location
        this.longtitude = longtitude
        this.latitude = latitude
        this.picture = picture
        this.detail = detail
        this.time = time
        this.status = status
    }
}