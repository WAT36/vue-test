new Vue({
    //elプロパティ　HTMLのどこに適応させるか。elはelementから来ている
    el: '#app',
    //データを持たせることもできる
    data(){
        return{
            message: 'Messe',
            number: 3,
            ok: true
        };
    },
    //メソッド
    methods: {
        reverseMessage: function(){
            //this.message:このオブジェクトのmessage
            //dataはいらないことに注意
            //↓で文字列を反転できる
            this.message = this.message.split('').reverse().join('')
        },
        sayHi: function(){
            return this.message;
        }
    }
})