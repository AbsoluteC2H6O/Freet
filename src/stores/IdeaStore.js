import { decorate, observable, action, computed, reaction } from "mobx";

class IdeaStore {
  constructor() {
    this.ideas = [];
    const localIdeas = localStorage.getItem("ideas");
    if (localIdeas) {
      console.log(localIdeas);
      this.ideas = JSON.parse(localIdeas);
    }
  }

  agregarIdea = idea => {
    this.ideas.push(idea);
  };

  borrar = () => {
    this.ideas = [];
  };

  get numeroIdeas() {
    return this.ideas.length;
  }
}

decorate(IdeaStore, {
  ideas: observable,
  agregarIdea: action,
  borrar: action,
  numeroIdeas: computed
});

const ideaStore = new IdeaStore();

reaction(
  () => JSON.stringify(IdeaStore.ideas),
  ideasStr => {
    localStorage.setItem("ideas", ideasStr);
  }
);

export default ideaStore;
