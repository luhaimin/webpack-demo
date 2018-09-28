
// import Router from './main.js'   //hash路由
import HistoryRoutes from './historyRouter.js'
import Wish from './bbb.js'
import Cart from './cart.js'
import Addimg from '../home/containers/App.js'
import '../style/aaa.css'
console.log(Addimg.createImg())
// console.log("aaa文件");
// const a = {
//     fnc: (a) => {
//         return a+"---fnc"
//     }
// };
// console.log(a.fnc("aaaaaa"));
// //-------------------------------
// let [aa, bb, cc] = [1, 2];

// document.querySelector("#jiegou").innerHTML = aa+bb+cc;

// let set = new Set();
// let numArr = [1,2,8,2,1,5,8,6,2];

// numArr.forEach((item,index)=>{
//    set.add(item)
// })
// console.log(set);
// console.log(set)


//-----------------------------------    hash无刷新路由

/*const router = new Router();
router.init()
let App = document.getElementById('App');

router.route('/index',function(){

App.innerHTML = '首页'

})

router.route('/cart',()=>{

	App.innerHTML = Cart.template()
})

router.route('/wish',()=>{

	App.innerHTML = Wish.template()

})*/



//-----------------------------------   history 无刷新路由

let historyRoutes = new HistoryRoutes();

historyRoutes.init()

historyRoutes.route('/',function(){

App.innerHTML = '首页'

})

historyRoutes.route('/cart',()=>{

	App.innerHTML = Cart.template()
})


historyRoutes.route('/wish',()=>{

	App.innerHTML = Wish.template()

})




// window.addEventListener('popstate',function(event){
// 	console.log('history路由变化',event)
// },false)

// document.getElementById("Root").addEventListener("click",function(){
// 	window.history.pushState({},null,'/about')

// },false)









