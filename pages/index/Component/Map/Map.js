// pages/index/Component/Map/Map.js
Page({
  data: {
    latitude: 39.92,
    longitude: 116.46,
    markers: [{
      latitude: 39.92,
      longitude: 116.46,
      name: '北京天安门'
    }],
    covers: [{
      latitude: 39.92,
      longitude: 116.46,
      iconPath: '../Resource(资源)/green_tri.png', 
    }, {
      latitude: 39.92,
      longitude: 116.46,
      iconPath: '../Resource(资源)/green_tri.png',
      rotate: 180
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})