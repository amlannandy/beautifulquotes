import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  data: {
    quotes: [],
  },
  methods: {
    addQuote(newQuote) {
      if (this.quotes.length >= 10) {
        alert("Reached max capacity of 10 quotes");
        return;
      }
      this.quotes = [newQuote, ...this.quotes];
      this.$emit("addQuote", newQuote);
    },
    deleteQuote(id) {
      this.quotes = this.quotes.filter((quote) => quote.id !== id);
      this.$emit("deleteQuote", id);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
