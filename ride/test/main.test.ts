import axios from 'axios';

test("Deve fazer o calculo do preço de uma corrida duante o dia", async function () {
  //given, when, then or arrange, act, assert

  //given (prepara os dados)
  const input = [
    { dist: 10, ds: '2021-10-01T00:00:00.000Z' },
  ]
  //when (executa a funcao)
  const response = await axios.post('http://localhost:3000/calc', input);
  const output = response.data;
  //assert
  expect(output.result).toBe(21);
})

test("Deve fazer o calculo do preço de uma corrida durante a noite", async function () {
  const input = [
    { dist: 10, ds: '2021-10-01T00:00:00.000Z' },
  ]
  const response = await axios.post('http://localhost:3000/calc', input);
  const output = response.data;
  expect(output.result).toBe(39);
})
