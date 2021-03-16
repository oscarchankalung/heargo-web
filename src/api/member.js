import Api from './api';

export function fetchMember() {
  return Api().get('/member/info');
}

export function updateMemberInfo(params) {
  return Api().patch('/member/info', params);
}

export function updateMemberPassword(params) {
  return Api().patch('/changepassword', params);
}

export function fetchMemberAddresses(){
    return Api().get("/member/address")
}

export function fetchMemberDefaultAddresses(){
    return Api().get("/member/address/default")
}

export function addMemberAddress(params){
    return Api().post("/member/address", params)
}

export function deleteMemberAddress(addressId){
    console.log(addressId)
    return Api().delete("/member/address/" + addressId)
}

export function fetchBooking(){
  return Api().get("/member/reservation")
}
