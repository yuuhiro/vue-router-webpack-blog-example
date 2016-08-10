import template from './edit.jade'
import createForm from '../components/createForm.js'
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
		'my-create-form': createForm
	},
	created() {
		const id = this.$route.params.id;
		if(id) {
			this.setCurrentArticleId(id);
		}
	}
}