import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

import App from './App.vue'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('InputText', InputText)
app.mount('#app')


