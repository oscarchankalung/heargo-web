import Api from "./api"


export function submitContactForm(params){
    return Api().post("/contact", params)
}

export function confirmPayment(id, params){
    return Api().post("/reservation/payment/"+id, params)
}