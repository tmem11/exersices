const coffeeShop = {
    beans: 40,
    money: 100,
    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 5 },
        doubleShot: { beanRequirement: 15, price: 5 },
        frenchPress: { beanRequirement: 12, price: 5 },
    },


    makeDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we don't make " + drinkType)
        }
        else if (this.beans <= 0 || this.beans - this.drinkRequirements[drinkType].beanRequirement <= 0) {
            console.log("Sorry, we're all out of beans")
        }
        else {
            this.beans = this.beans - this.drinkRequirements[drinkType].beanRequirement
        }
    },
    buyBeans: function (numBeans) {
        let price = 2
        if (this.money - numBeans * price >= 0) {
            this.money = this.money - numBeans * price
            this.beans = this.beans + numBeans
        }
        else {
            console.log("you dont have money to buy !!!")
        }

    },
    buyDrink: function (drinkType) {

        if (this.drinkRequirements[drinkType]) {
            this.money = +this.drinkRequirements[drinkType].price
            this.makeDrink(drinkType)
        }
        else {
            console.log("Sorry, we don't make " + drinkType)
        }
    }



}

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(10)
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("latte");
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress")
