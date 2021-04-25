import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toolbar from 'primevue/toolbar';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toolbar", Toolbar);

app.mount('#app');
