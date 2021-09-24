export default class Porta {
  // atributo privado
  #numero
  #estaPremiada
  #estaSelecionada
  #estaAberta

  constructor(numero, estaPremiada = false, estaSelecionada = false, estaAberta = false) {
    this.#numero = numero
    this.#estaPremiada = estaPremiada
    this.#estaSelecionada = estaSelecionada
    this.#estaAberta = estaAberta
  }

  get numero() {
    return this.#numero
  }

  get premiada() {
    return this.#estaPremiada
  }

  get selecionada() {
    return this.#estaSelecionada
  }

  get aberta() {
    return this.#estaAberta
  }

  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new Porta(this.numero, this.premiada, selecionada, this.aberta)
  }

  abrir() {
    const aberta = true;
    return new Porta(this.numero, this.premiada, this.selecionada, aberta)
  }

  desSelecionar() {
    const selecionada = false;
    return new Porta(this.numero, this.premiada, selecionada, this.aberta)
  }


}