import '../css/css.css';
console.log(555)
export default {
	createImg:function(){
			let newImg = document.createElement('div');
			let body = document.body;
		newImg.setAttribute("class","bannerWrapper")

			body.appendChild(newImg)
	}
}