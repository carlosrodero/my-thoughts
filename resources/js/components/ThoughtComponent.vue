<template>
  <div class="card mt-4">
    <div
      class="card-header"
    >Pensado em {{ thought.created_at }} - Última atualização {{ thought.updated_at }}</div>
    <div class="card-body">
      <input v-if="editMode" type="text" class="form-control" v-model="thought.description" />
      <p v-else>{{ thought.description }}</p>
    </div>
    <div class="card-footer">
      <button v-if="editMode" class="btn btn-success" v-on:click="onClickUpdate()">Salvar</button>
      <button v-else class="btn btn-default" v-on:click="onClickEdit()">Editar</button>
      <button class="btn btn-danger" v-on:click="onClickDelete()">Deletar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thought"],
  data() {
    return {
      editMode: false
    };
  },

  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    onClickDelete() {
      axios.delete(`/thoughts/${this.thought.id}`).then(() => {
        this.$emit("delete");
      });
    },
    onClickEdit() {
      this.editMode = true;
    },
    onClickUpdate() {
      const params = {
        description: this.thought.description
      };
      axios.put(`/thoughts/${this.thought.id}`, params).then(response => {
        this.editMode = false;
        const thought = response.data;
        this.$emit("update", thought);
      });
    }
  }
};
</script>
