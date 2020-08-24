<template>
  <div id="app" class="container">
    <QuotesProgress></QuotesProgress>
    <div class="row">
      <AddQuote></AddQuote>
      <QuoteList></QuoteList>
    </div>
  </div>
</template>

<script>
import AddQuote from "./components/AddQuote";
import QuoteList from "./components/QuoteList";
import QuotesProgress from "./components/QuotesProgress";
export default {
  components: {
    AddQuote,
    QuoteList,
    QuotesProgress,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap");
* {
  font-family: "Cedarville Cursive", cursive;
}
</style>
