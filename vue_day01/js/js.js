var app = new Vue({
	el:'#app',
	data:{
		pian:"",
		username:"",
		time:"",
		libray:[
			{
				message:1,username:'b',time:'2020年11月11日'
			},
			{
				message:2,username:'b',time:'2020年11月11日'
			}
		],
	},
	computed:{
		cishu:function(){
			return this.libray.length
		}
	},
	methods:{
		tijiao:function(){
			var libray=this.libray
			var myDate = new Date(); 
			var time = myDate.toLocaleDateString()
			libray.push({
				message:this.pian,username:this.username,time:time,
			})
			this.pian=""
			this.username=""
		},
		sanzhu:function(){
			console.log(this.libray.filter(item => item.message!=2))
		}
	},
})