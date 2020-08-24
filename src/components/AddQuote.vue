<template>
  <div class="col-lg-4 mb-3">
    <div class="input-group input-group-lg mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <input
        v-model="author"
        type="text"
        name
        id
        class="form-control"
        placeholder="Name of the Author"
      />
    </div>
    <div class="input-group input-group-lg mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-pencil-alt"></i>
        </span>
      </div>
      <textarea v-model="content" class="form-control" placeholder="The Quote" rows="5"></textarea>
    </div>
    <button @click="addQuote()" class="btn btn-dark btn-block btn-lg text-white">Submit</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      author: "",
      content: "",
    };
  },
  methods: {
    addQuote() {
      if (this.author === "" || this.content === "") return;
      const id = new Date().toString();
      const newQuote = { id, author: this.author, content: this.content };
      eventBus.addQuote(newQuote);
      this.author = this.content = "";
    },
  },
};
</script>