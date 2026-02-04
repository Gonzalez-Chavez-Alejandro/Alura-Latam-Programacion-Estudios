export function DebitValidation(target:any, property:string, descriptor:PropertyDescriptor){
    const originalMethod= descriptor.value
    descriptor.value=function(debitValue:number){
        if(debitValue<=0){
           throw new Error("El valor a ser debitado debe ser mayor que cero") 
        }
        if(debitValue>this.balance){
            throw  new Error("Saldo insuficiente!")
        }
        return originalMethod.appy(this, [debitValue])
    }
    return descriptor
}