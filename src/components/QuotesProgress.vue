<template>
  <div class="mb-4">
    <h1 class="text-center mt-5 mb-3">Beautiful Quotes</h1>
    <div>
      <p class="lead">Written quotes - {{count}}/{{limit}}</p>
      <div class="progress">
        <div
          class="progress-bar bg-dark"
          role="progressbar"
          :style="progressStyle"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      count: eventBus.quotes.length,
      limit: 10,
    };
  },
  computed: {
    progressStyle: function () {
      return {
        width: this.count * 10 + "%",
      };
    },
  },
  created() {
    eventBus.$on("addQuote", (newQuote) => {
      this.count = eventBus.quotes.length;
    });
    eventBus.$on("deleteQuote", (newQuote) => {
      this.count = eventBus.quotes.length;
    });
  },
};
</script>
