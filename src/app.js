import 'spectre.css/dist/spectre.css'
import VueRouter from 'vue-router'
import routerMap from './router.js'
import Navigator from './components/navigator.js'
import filters from './filter.js'

Vue.use(VueRouter);
Vue.component('navigator', Navigator);

Object.keys(filters).forEach(function(k) {
	Vue.filter(k, filters[k]);
});

const router = new VueRouter({
  history: true
});
routerMap(router);

const app = Vue.extend({
});

// http://stackoverflow.com/a/16877231
// URLを直接指定した時の対応
router.beforeEach(function (transition) {
  // URLからhashを取得して'#!'が存在するかチェック
  const hash = location.hash;
  const match = hash.match(/#!(.*)$/);

  if(match) {
    // 存在していたら'#!'を取り除いたURLに遷移
    console.log(match[1]);
    transition.redirect(match[1]);
  }else {
    transition.next()
  }
});

router.start(app, '#app');