<template>
  <div class="flex flex-column h-full">
    <div class="border flex-grow-1 flex">
      <Table :color="'green'" class="flex-grow-1 scroll"></Table>
      <Table :color="'yellow'" class="flex-grow-1 scroll"></Table>
    </div>
    <div class="border flex-grow-1">
      <UserConfigurate></UserConfigurate>
    </div>
    <div class="border flex-grow-1">
      <Table :color="'red'"></Table>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'
import Table from './components/Table.vue'
import UserConfigurate from './components/UserConfigurate.vue'
export default defineComponent({
  components: { Table, UserConfigurate },
  mounted() {

  }
})
</script>

<style scoped></style>
