import { decorate, observable, action, computed, reaction } from "mobx";

class ResultadoStore {
  constructor() {
    this.resultados = [];
    const localResultados = localStorage.getItem("resultados");
    if (localResultados) {
      console.log(localResultados);
      this.resultados = JSON.parse(localResultados);
    }
  }

  agregarResultado = resultado => {
    this.resultados.push(resultado);
  };

  borrar = () => {
    this.resultados = [];
  };

  get numeroResultados() {
    return this.resultados.length;
  }
}

decorate(ResultadoStore, {
  resultados: observable,
  agregarResultado: action,
  borrar: action,
  numeroResultados: computed
});

const resultadoStore= new ResultadoStore();

reaction(
  () => JSON.stringify(ResultadoStore.resultados),
  resultadosStr => {
    localStorage.setItem("resultados", resultadosStr);
  }
);

export default resultadoStore;
