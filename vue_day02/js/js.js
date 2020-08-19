var app = new Vue({
	el: '#app',
	data: {
		pian: "",
		username: "",
		message:"",
		time: "",
		disabled:false,
		libray: [{
			message: "1",
			username: "美食",
			time: '2020-5-10'
		}],
	},
	//计算数量
	computed: {
		cishu: function() {
			return this.libray.length
		}
	},
	watch: {
		pian: function(set) {
			
			// var arr=this.libray
			// arr.forEach(function(val) {
			// 	
			// 	var app=val.message
			// 	if(set==app){
			// 		this.disabled = true
			// 		console.log(12)
			// 	}else{
			// 		this.disabled=false
			// 	}
			// })
			var flg = false
			// 判断用户输入的编号是否已存在booksArr中
			// some filter forEach 遍历数组的方法
			flg = this.libray.some((item)=>{
				return item.message == set   
			})
			// 已存在 flg == true
			if(flg) {
				// 提交按钮不可用
				this.disabled = true
			}else {
				// 提交按钮不可用
				this.disabled = false
			}
		}
	},
	methods: {
		tijiao: function() {
			var libray = this.libray
			var myDate = new Date();
			if (this.pian !== "" && this.username !== "") {
				var nian = myDate.getFullYear();
				var yue = myDate.getMonth() + 1;
				var ri = myDate.getDate();
				if (yue < 10) {
					yue = '0' + yue
				}
				if (ri < 10) {
					ri = '0' + ri
					console.log(ri)
				}
				var i = nian + "-" + yue + "-" + ri
				time = i
				libray.push({
					message: this.pian,
					username: this.username,
					time: time,
				})
				this.pian = ""
				this.username = ""
			} else {
				alert("请输入内容!!!")
			}
		},
		sanzhu: function(message) {
			//定义新数组
			var arr = [];
			//删除=过滤掉当前的message赋予新数组arr
			arr = this.libray.filter(item => item.message !== message)
			//将新数组赋予libray数组
			this.libray = arr
		},
		xiugai:function(message,username){
			
			this.pian=message
			this.username=username
			console.log(username)
		}
	},
})
