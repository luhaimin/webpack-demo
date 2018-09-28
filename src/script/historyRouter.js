// history路由

class HistoryRouter {
	constructor(){
		this.routeObj = {};
		this.currentUrl = '/';
		console.log('初始化')
	}

	route(path,callback){
		this.routeObj[path] = callback||function (){};
		console.log(this.routeObj)
	}

	updateView(url){
		this.currentUrl = url;
		this.routeObj[this.currentUrl]&&this.routeObj[this.currentUrl]()
	}

	bindLink(){
		const allLink = document.querySelectorAll('a[data-href]');

		allLink.forEach((val,i)=>{

			val.addEventListener('click',(e)=>{
				e.preventDefault();
				let url = e.target.getAttribute('href');
				window.history.pushState({},null,url)
				this.updateView(url);

			},false)

		})
	}


	init(){
		this.bindLink();
		window.addEventListener('popstate',e=>{
			this.updateView(window.location.pathname)
		},false)


//第一次加载
		window.addEventListener('load',()=>{
			this.updateView("/")
		},false)
	}
}

export default HistoryRouter
