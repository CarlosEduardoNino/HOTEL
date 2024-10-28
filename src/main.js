<<<<<<< HEAD
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import App from './App.vue';
import { router } from './routes/routes.js'; // Mantén esta importación y elimina la otra
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const myapp = createApp(App);

myapp.use(Quasar, {
    plugins: {}, 
});

myapp.use(router);

myapp.mount('#app');
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./routes/routes.js"
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const myapp = createApp(App)

myapp.use(Quasar, {
    plugins: {}, 
  })
myapp.use(router)

myapp.mount('#app')
>>>>>>> 1964e4efa4d951af11000f55cfb2e99922ad4714
