// import Util from '../util.js'
//
// class Article {
// 	constructor(title, body, id) {
// 		this.title = title.trim();
// 		this.body = body.trim();
// 		this.id = id;
// 	}
// }
//
// class ArticleStore {
// 	constructor() {
// 		let persistedArticles = JSON.parse(localStorage.getItem('articles') || '[]');
// 		// Normalize back into classes
// 		this.articles = persistedArticles.map( (article) => {
// 			let ret = new Article(article.title, article.body, article.id);
// 			return ret;
// 		});
// 		console.log('this.articles', this.articles);
// 	}
// 	getWithId(id) {
// 		return this.articles.find((article) => article.id === id);
// 	}
// 	updateStore() {
// 		localStorage.setItem('articles', JSON.stringify(this.articles));
// 	}
// 	add(title, body) {
// 		return new Promise((resolve) => {
// 			const id = Util.getUniqueStr();
// 			this.articles.push(new Article(title, body, id));
// 			this.updateStore();
// 			resolve(id);
// 		});
//
// 	}
// 	edit(id, title, body) {
// 		return new Promise((resoleve) => {
// 			let article = this.getWithId(id);
// 			article.title = title;
// 			article.body = body;
// 			this.updateStore();
// 			resoleve(article.id);
// 		});
// 	}
// 	remove(id) {
// 		return new Promise((resoleve) => {
// 			this.articles.splice(this.articles.indexOf(this.getWithId(id)), 1);
// 			this.updateStore();
// 			resoleve();
// 		});
// 	}
// }
//
// export default new ArticleStore()