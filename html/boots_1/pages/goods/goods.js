// pages/goods/goods.js
var time_img;
Page({

  /**
   * 页面的初始数据
   */

  data: {
    aydis:"../image/a_1.png",
    src_img:['/pages/image/a_1.png','/pages/image/a_2.png','/pages/image/a_3.png'],
    aryle:0,
    flg:false,
    aryle:0,
    text_wz:"",
    cishu:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    time_img=setInterval(this.chageimg,200)
  },
  //图片滚动
  chageimg: function (e){
   if (this.data.aryle==2){
     this.data.aryle= -1
   }
   this.setData({
    aryle:this.data.aryle+1
   })
  },
//出拳事件
  chuquan: function (e){
    if(this.data.flg==false && e.target.dataset.imgid){ 
      
      // 停止定时
      clearInterval(time_img)
      const userchooseimg = e.target.dataset.imgid
      // console.log(this.data.text_wz)
      const aryle = this.data.aryle
      let text_wz ="" 
      // console.log(this.data.cishu)
      let cishu =this.data.cishu
      if(userchooseimg == aryle){
        //平局
        text_wz = '差点，加油哦!'
        // console.log(text_wz)
        
      }else if(
          (userchooseimg == 0 && aryle == 1)||
          (userchooseimg == 1 && aryle == 2)||
          (userchooseimg == 2 && aryle == 0)
      ){
        text_wz = '让你，什么了',
        cishu =++cishu 
      }else{
        text_wz = '小样，还来么'
      }
      this.setData({
        aydis:this.data.src_img[userchooseimg],
        text_wz:text_wz,
        cishu:cishu,
        flg:true,
      })
    }
    
  },
  
  //再来一次
  zailai:function(e){
    if(this.data.flg==true){
      time_img=setInterval(this.chageimg,200)
      this.setData({
        flg:false,
      })
    }
    
  },

  jinglai: function(e){
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})