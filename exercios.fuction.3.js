let Numeros = [1,2,3,4,5,6]

 let dobrados = Numeros.map(Numeros => Numeros*2)

  console.log(dobrados)


  const numerosPares = [1,2,3,4,5]
  const pares = numerosPares.filter(numerosPares => numerosPares % 2 === 0)

  console.log(pares)


  const numerosacumulador = [1,2,3,,4,5,6]

  const acumulador = numerosacumulador.reduce((acumula,numerosacumulador) => acumula + numerosacumulador,5)
  console.log(acumulador)
