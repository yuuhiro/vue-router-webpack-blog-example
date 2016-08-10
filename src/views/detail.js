import template from './detail.jade'
import article from '../components/article.js'
import store from '../vuex/store.js'
import { getCurrentArticle } from '../vuex/getters.js'
import { setCurrentArticleId } from '../vuex/actions.js'

export default {
	store,
	template: template(),
	vuex: {
		getters: {
			article: getCurrentArticle
		},
		actions: {
			setCurrentArticleId
		}
	},
	components: {
		'my-article': article
	},
	data () {
		return {
		}
	},
	created() {
		const id = this.$route.params.id;
		this.setCurrentArticleId(id);
	}
}