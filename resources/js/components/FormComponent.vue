<template>
  <div class="card">
    <div class="card-header">Em que está pensando agora? 🤔</div>
    <div class="card-body">
      <form action v-on:submit.prevent="newThought()">
        <div class="form-group">
          <label for="thought">Agora estou pensando em:</label>
          <input
            type="text"
            class="form-control"
            name="thought"
            v-model="description"
            ref="description"
          />
        </div>
        <button class="btn btn-primary">Enviar pensamento ✌️</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: ""
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    newThought() {
      if (this.description == "") {
        alert("Escreva um pensamento!");
      } else {
        const params = {
          description: this.description
        };
        this.description = "";
        axios.post("/thoughts", params).then(response => {
          const thought = response.data;
          this.$emit("new", thought);
        });
      }
    }
  }
};
</script>
