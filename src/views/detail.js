import template from './detail.jade'
import article from '../components/article.js'
import ArticleStore from '../stores/articleStore.js'

export default {
	template: template(),
	components: {
		'my-article': article
	},
	data () {
		return {
		}
	},
	created() {
		const id = this.$route.params.id;
		this.article = ArticleStore.getWidhId(id)[0];
	}
}