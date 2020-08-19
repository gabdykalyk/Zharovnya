new Vue({
    el: '#app',
    data: {
        message: 'hello',
        isActive: false,
        count: 1,
        price: 2300,
    },
    methods: {
        myFilter: function () {
            this.isActive = !this.isActive;
        },
        increase: function () {
            this.count++
            this.price = this.price + 2300
        },
        decreas: function () {
            if (this.count >= 2) {
                this.count--
                this.price = this.price - 2300
            }
        }
    },
    computed: {
        
    }
})