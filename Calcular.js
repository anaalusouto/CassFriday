export default class Calcular {
    constructor(saldo, data, porcentagem) {
        this.data = data;
        this.credito = 0;
        this.saldo = saldo;
        this.debito = 0;
        this.chequeespecial = 2640;// o salario minimo ta 1320 e o cheque especial sao dois
        this.porcentagem = porcentagem;
        this.poupanca = 0;
    }

    adicionarCredito(num) {
        num = parseFloat(num)
        var soma = num + this.saldo
        this.poupanca = soma * (this.porcentagem / 100)
        this.saldo = soma - this.poupanca
        this.credito = num
        
    }

    debitar(num) {
        num = parseFloat(num)
        var sub = this.saldo - num
        if (num > this.saldo) {
            this.chequeespecial = this.chequeespecial + sub
        }else{
            this.chequeespecial = 2640
        }
        
        this.saldo = sub
        this.debito = num

        
        
    }
}
