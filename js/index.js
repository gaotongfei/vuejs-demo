var demo = new Vue({
  el: '#demo',

  data: {
    posts: ['This is a demo post', 'another demo post'],
    isread: false,
    unread: true,
    message: null
  },

  created: function(){
    this.checkIsRead()
  },

  methods: {
    checkIsRead: function(){
      if (this.isread == false){
        this.message = "not read"
      }
      else{
      	this.message = "readed"
      }
    }
  }

})
