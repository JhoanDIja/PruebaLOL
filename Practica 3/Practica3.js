  let numberOne = prompt("Primer numero");
  parseInt(numberOne);
  let numberTwo = prompt("Segundo numero");
  parseInt(numberTwo);
  if(numberTwo == 0)
  {
    document.writeln("No se puede dividir entre 0");
  }
  else
  {
    let result = numberOne/numberTwo;
    document.writeln("El resultado de esa division es" + result);
  }

