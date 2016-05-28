import template from './edit.jade'
import createForm from '../components/createForm.js'
import ArticleStore from '../stores/articleStore.js'


export default {
  template: template(),
	components: {
		'my-create-form': createForm
	},
	data () {
		return {
		}
	},
	created() {
		const id = this.$route.params.id;
		if(id) {
			this.article = ArticleStore.getWithId(id);
		}
	}
}