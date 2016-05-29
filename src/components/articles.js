import template from './articles.jade'
import './articles.css'

export default {
	template: template(),
	props: ['articles'],
	methods: {
		showArticle(id) {
			this.$route.router.go({ name: 'article', params: { id: id }});
		}
	}
}