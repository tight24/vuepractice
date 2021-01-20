//文房具の商品名と一個当たりの価格、個数を設定
var items= [
  {
    name:'鉛筆',
    price:300,
    quantity:0
  },
  {
    name:'ノート',
    price:400,
    quantity:0
  },
  {
    name:'消しゴム',
    price:500,
    quantity:0
  }
]

var vm = new Vue({
  el:'#app',
  data: {//dataプロパティ
    items:items
  },
  filters:{
    numberWithDelimiter:function(value){
      if(!value){
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
    }
  },
  methods:{
    doBuy:function () {
      alert(this.totalPriceWithTax + '円のお買い上げ!')
      //購入後のそれぞれの文房具の個数を0にリセット
      this.items.forEach(function (item) {
        item.quantity = 0
      })
    }
  },
  computed:{
    totalPrice:function(){
      return this.items.reduce(function(sum,item){
        return sum + (item.price * item.quantity)
      },0)
    },
    totalPriceWithTax:function(){
      return Math.floor(this.totalPrice*1.08)
    },
    canBuy: function(){
      return this.totalPrice >= 1000
    },
    errorMessageStyle:function(){
      //canBuyが偽の時に赤く表示する
      return{
        border: this.canBuy ? '' :'1px solid red',
        color: this.canBuy ? '' :'red'
      }
    }
  }

})



