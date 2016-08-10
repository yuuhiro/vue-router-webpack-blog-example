import Vuex from 'vuex'
import middlewares from './middlewares'

Vue.use(Vuex);

export const STORAGE_KEY = 'articles';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  localStorage.clear()
}

const state = {
  currentArticleID: null,
  articles: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
};

const mutations = {
	ADD_ARTICLE (state, title, body, id) {
		state.articles.push({
			title: title,
			body: body,
			id: id
		})
	},
	DELETE_ARTICLE (state, article) {
		state.articles.$remove(article)
	},
	EDIT_ARTICLE (state, article, title, body) {
		article.title = title;
		article.body = body;
	},
	SET_CURRENT_ARTICLE_ID(state, id) {
		state.currentArticleID = id;
	}
};

export default new Vuex.Store({
	state,
	mutations,
	middlewares,
	strict: true
})
