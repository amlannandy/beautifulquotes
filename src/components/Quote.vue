<template>
  <div @click="deleteQuote(quote.id)" class="card mx-2 mb-2 p-3">
    <blockquote class="blockquote text-right">
      <p class="mb-0">{{quote.content}}</p>
      <footer class="blockquote-footer">{{quote.author}}</footer>
    </blockquote>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    quote: Object,
  },
  methods: {
    deleteQuote(id) {
      eventBus.deleteQuote(id);
    },
  },
};
</script>