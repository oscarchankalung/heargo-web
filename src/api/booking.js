import Api from "./api"

export function fetchServices(){
    return Api().get("/reservation/services")
}

export function fetchAvailableTime(service, date){
    return Api().get("/reservation/checktime/"+service+"/"+date)
}

export function confirmBooking(params){
    return Api().post("/reservation/submit", params)
}

export function confirmPayment(id, params){
    return Api().post("/reservation/payment/"+id, params)
}