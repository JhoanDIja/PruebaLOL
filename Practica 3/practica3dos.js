  let a = prompt("Primer numero");
  parseInt(numberOne);
  let b = prompt("Segundo numero");
  parseInt(numberTwo);
  if( a > 0)
  {
     document.writeln(a + " Es positivo");
  }
  else
  {
      document.writeln(a + " Es negativo");
  }
  if(b > 0)
  {
   document.writeln(b + " es positivo");
  }
  else
  {
      document.writeln(b + " es negativo");
  }

  if(a>0 && b>0)
{
  document.writeln("dos de dos positivos");
}
else if(a >0 && b<0)
{
    document.writeln("uno de dos positivos");
}

else if(a<0 && b<0)
{
  document.writeln("dos de dos negativos");
}

