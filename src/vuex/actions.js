import Util from '../util.js'

export const setCurrentArticleId = ({ dispatch, state }, id) => {
	dispatch('SET_CURRENT_ARTICLE_ID', id)
};

export const addArticle = ({ dispatch, state }, title, body) => {
	return new Promise((resolve) => {
		const id = Util.getUniqueStr();
		dispatch('ADD_ARTICLE', title, body, id);
		resolve(id);
	});
};
export const editArticle = ({ dispatch, state }, article, title, body) => {
	return new Promise((resolve) => {
		dispatch('EDIT_ARTICLE', article, title, body);
		resolve();
	});
};
export const deteleArticle = ({ dispatch, state }, article) => {
	return new Promise((resolve) => {
		dispatch('DELETE_ARTICLE', article);
		resolve();
	});
};