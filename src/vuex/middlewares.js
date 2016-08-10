import { STORAGE_KEY } from './store'
// import createLogger from '../../../src/middlewares/logger'

const localStorageMiddleware = {
  onMutation (mutation, { articles }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  }
};

export default process.env.NODE_ENV !== 'production'
  ? [localStorageMiddleware]
  : [localStorageMiddleware]
