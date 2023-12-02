export default class Calcular{
    constructor(saldo, data){
        this.saldo = parseFloat(saldo)
        this.data = data
        this.credito = 0


    }


    adicionar_credito(valor){
        valor = parseFloat(valor)
        this.credito += valor
        return "crédito adicionado de "+  this.credito + " na data de: " + this.data
    }
}