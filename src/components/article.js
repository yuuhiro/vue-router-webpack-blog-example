import template from './article.jade'
import './article.css'
import { deteleArticle } from '../vuex/actions.js'

export default {
	template: template(),
	props: ['article'],
	vuex: {
		// getters: {
		// 	currentArticleID: state => state.currentArticleID
		// },
		actions: {
			deteleArticle
		}
	},
	methods: {
		removeArticle() {
			this.deteleArticle(this.article)
				.then(() => {
					this.$route.router.go({ path: '/'});
				});
		},
		editArticle(id) {
			this.$route.router.go({ name: 'edit', params: { id: id }});
		}
	}
}