import template from './createForm.jade'
import './createForm.css'
import ArticleStore from '../stores/articleStore.js'

export default {
	template: template(),
	props: ['article', 'editing'],
	data () {
		return {
			isEdit: false,
			articleTitle: '',
			articleBody: ''
		}
	},
	created() {
		if(this.editing) {
			this.articleTitle = this.article.title;
			this.articleBody = this.article.body;
		}
	},
	methods: {
		create() {
			ArticleStore.add(this.articleTitle, this.articleBody)
				.then((id) => {
					this.$route.router.go({ name: 'article', params: { id: id }});
				});
		},
		edit() {
			ArticleStore.edit(this.article.id, this.articleTitle, this.articleBody)
				.then((id) => {
					this.$route.router.go({ name: 'article', params: { id: id }});
				});
		}
	}
}