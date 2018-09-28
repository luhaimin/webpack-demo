class Cart {

constructor(){
console.log('环境变量',process.env.NODE_ENV,process.env.ID_CONFIG)
}
	template(){

		return "<h2>购物车</h2>"
	}
}


export default new Cart()