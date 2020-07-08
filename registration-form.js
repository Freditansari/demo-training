new Vue({
    el: '#registration-form-merdekacloud-training',
    data: function(){
        return {
            firstName: "",
            lastName: "",
            email: {
                value:"",
                valid: true
            },
            birthDate: "",
            sex:"Pria",
            address:"",
            city:"", 
            zipCode:"", 
            phoneNumber:"+62 "
        }
    },
    mounted () {
        // axios
        //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //   .then(response => console.log(response))
      },
    methods: {
        submit: function (){
            alert("hello");
        }
    }
})