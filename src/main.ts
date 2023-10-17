import { createApp } from 'vue';
import 'normalize.css';

import AppComponents from './App.vue';
import { setupRouter } from './router';

const bootstrap = async (): Promise<void> => {
  const app = createApp(AppComponents);

  const router = setupRouter(app);
  await router.isReady();

  app.mount('#app');
};

bootstrap();
