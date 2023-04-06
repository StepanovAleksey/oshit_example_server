<template>
    <div class="flex align-items-center justify-content-center h-full controls">
        <Button label="Расчитать" severity="success" />
        <Dropdown v-model="select1" :options="cities" optionLabel="name" placeholder="Select a City"
            class="w-full md:w-14rem" />
        <Dropdown v-model="select2" :options="cities" optionLabel="name" placeholder="Select a City"
            class="w-full md:w-14rem" />
        <InputText v-model="inputText" :disabled="true"></InputText>

        {{ dataStore.rows.length }}
    </div>
</template>
  
<script  lang="ts">
import { useDataStore } from '@/stores/data';
import { mapState, mapStores } from 'pinia';
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        ...mapStores(useDataStore)
    },
    setup() {
        return {
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        }
    },
    data() {
        return {
            select1: null,
            select2: null,
            inputText: 'Класс ЭЧе'
        }
    },
    mounted() {
        this.dataStore.getData();
    }
})
</script>
  
<style scoped>
.controls *+* {
    margin-right: 0.5rem
}
</style>
  