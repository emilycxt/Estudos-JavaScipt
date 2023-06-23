function caixa1 (){
    var cliente = {
        nome: "Maria Das Graças Xuxa Meneguel",
        email: "xuxa@666.com",
        telefone: "+55 11 666-6566",
        rua: "Rua dos baixinhos",
        numero: 666,
        bairro: "Pinheiros",
        cidade: "São Paulo",
        uf: "SP"
    }
    return "O (a) cliente " + cliente.nome + " Mora em " +cliente.cidade + " " + cliente.uf
    
}

console.log (caixa1 ())