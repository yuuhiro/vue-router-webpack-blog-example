import template from './createForm.jade'
import './createForm.css'
import { addArticle, editArticle } from '../vuex/actions.js'

export default {
	template: template(),
	props: ['article', 'editing'],
	vuex: {
		actions: {
			addArticle,
			editArticle
		}
	},
	data () {
		return {
			editing: false,
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
			this.addArticle(this.articleTitle, this.articleBody)
				.then((id) => {
					this.$route.router.go({ name: 'article', params: { id: id }});
				});
		},
		edit() {
			this.editArticle(this.article, this.articleTitle, this.articleBody)
				.then(() => {
					this.$route.router.go({ name: 'article', params: { id: this.article.id }});
				});
		}
	}
}