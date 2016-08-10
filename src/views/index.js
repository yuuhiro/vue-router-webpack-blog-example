import template from './index.jade'
import articles from '../components/articles.js'
import store from '../vuex/store.js'


export default {
	store,
	template: template(),
	vuex: {
		getters: {
			articles: state => state.articles
		}
	},
	components: {
		'my-articles': articles
	}
}