import template from './index.jade'
import articles from '../components/articles.js'
import ArticleStore from '../stores/articleStore.js'


export default {
	template: template(),
	components: {
		'my-articles': articles
	},
	data () {
		return {
		}
	},
	created() {
		this.articles = ArticleStore.articles;
	}
}