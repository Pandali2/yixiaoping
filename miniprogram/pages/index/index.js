Page({
  goToPage1: function(){
  wx.navigateTo({
    url: '/pages/student/student',
  })
},
  goToPage2: function() {
  wx.navigateTo({
    url: 'pages/parents/parents',
  })
},
  goToPage3: function() {
  wx.navigateTo({
    url: '/pages/teacher/teacher',
  })
},
  goToPage4: function() {
  wx.navigateTo({
    url: '/pages/travel/travel',
  })
}
})