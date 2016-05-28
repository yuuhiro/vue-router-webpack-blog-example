import template from './article.jade'
import './article.css'
import ArticleStore from '../stores/articleStore.js'

export default {
  template: template(),
	props: ['article'],
	methods: {
		removeArticle(id) {
			ArticleStore.remove(id)
				.then(() => {
					this.$route.router.go({ path: '/'});
				});
		},
		editArticle(id) {
			this.$route.router.go({ name: 'edit', params: { id: id }});
		}
	}
}