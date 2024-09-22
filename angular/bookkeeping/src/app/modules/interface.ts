export interface Customer{
    name:string,
    num:number
}
export interface Receipt{
    id:number
    customer:Customer,
    date:Date,
    paymentMethods:string,
    amount:number,
    details:string
}