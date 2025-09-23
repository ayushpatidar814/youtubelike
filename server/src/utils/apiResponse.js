class apiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data.message = message
        this.success = statusCode < 400
    }
}

export { apiResponse };