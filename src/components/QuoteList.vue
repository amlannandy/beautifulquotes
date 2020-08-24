<template>
  <div class="col-lg-8">
    <Quote v-for="quote in quotes" v-bind:key="quote.id" :quote="quote"></Quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
import { eventBus } from "../main";
export default {
  data() {
    return {
      quotes: eventBus.quotes,
    };
  },
  components: {
    Quote,
  },
  created() {
    eventBus.$on("addQuote", (newQuote) => {
      this.quotes = eventBus.quotes;
    });
    eventBus.$on("deleteQuote", (newQuote) => {
      this.quotes = eventBus.quotes;
    });
  },
};
</script>