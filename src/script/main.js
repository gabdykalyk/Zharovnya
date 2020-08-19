new Vue({
    el: '#app',
    data: {
        message: 'hello',
        isActive: false,
        count: 1,
        price: 2300,
        firstDish: 1,
        secondDish: 1,
        thirdDish: 1,
        fourthDish: 1
    },
    methods: {
        myFilter: function () {
            this.isActive = !this.isActive;
        },
        increase: function () {
            this.count++
            this.price = 2300 * this.count
        },
        decreas: function () {
            if (this.count >= 2) {
                this.count--
                this.price = this.price - 2300
            }
        },
        increaseFirst: function () {
            this.firstDish++
        },
        decreasFirst: function () {
            this.firstDish--
        },
        increaseSecond: function () {
            this.secondDish++
        },
        decreasSecond: function () {
            this.secondDish--
        },
        increaseThird: function () {
            this.thirdDish++
        },
        decreasThird: function () {
            this.thirdDish--
        },
        increaseFourth: function () {
            this.fourthDish++
        },
        decreasFourth: function () {
            this.fourthDish--
        }
    },
    computed: {
        
    }
})