function Mayor() {
    let A = parseInt(prompt("Primer numero"));
    let B = parseInt(prompt("Segundo numero"));
    let C = parseInt(prompt("Tercer numero"));
    
    maximo = Math.max(A,B,C);
    return maximo;
}
Mayor();
document.write("El maximo es " + maximo);