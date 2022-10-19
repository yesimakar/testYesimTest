import VuexpRouter from 'vuexp-router';
import routes from './routerLoader';

const options = {
  mode: 'history',
  useFrameWrapper: true,
  routes,
};

const router = new VuexpRouter(options);
export default router;

