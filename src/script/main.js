
// hash路由
class Router {
	constructor(){
		this.routes = {};
		this.currentUrl = '/'
	}

	route(path,callback){
		this.routes[path] = callback||function(){}
		console.log(this.routes)
	}

	updateView(){
		this.currentUrl = location.hash.slice(1)||"/";
		this.routes[this.currentUrl] && this.routes[this.currentUrl]()
		// this.currentUrl = 
	}

	init(){
		window.addEventListener('load',this.updateView.bind(this),false);
		window.addEventListener('hashchange',this.updateView.bind(this),false)

	}

}

export default Router





