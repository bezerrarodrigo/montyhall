export default class PortaModel {
  // atributo privado
  #numero: number
  #estaPremiada: boolean
  #estaSelecionada: boolean
  #estaAberta: boolean

  constructor(numero: number, estaPremiada = false, estaSelecionada = false, estaAberta = false) {
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
    return new PortaModel(this.numero, this.premiada, selecionada, this.aberta)
  }

  abrir() {
    const aberta = true;
    return new PortaModel(this.numero, this.premiada, this.selecionada, aberta)
  }

  desSelecionar() {
    const selecionada = false;
    return new PortaModel(this.numero, this.premiada, selecionada, this.aberta)
  }


}