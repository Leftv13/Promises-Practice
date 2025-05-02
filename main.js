//This func will manage the % of success of the order items
function orderManagement(i) 

    { return new Promise((resolve, reject) => {
        //return new promise with the resolve & reject arguments
        
    const orderSuscces = () =>{return Math.random( ) < 0.8;}
    //  % success of the order
    const randomOrderTime = Math.floor(Math.random() * 2000) + 1000;
    // Random order time between 3 and 4 secs

    setTimeout(() =>{
        if(orderSuscces()){
            //If the order succeded then clg resolve
            resolve(`Your ${i} is ready!`)

        }else{
            //else clg reject
            reject(`We screwed your ${i}! Try ordering again :(`)
        }
    },randomOrderTime)
})}

    //This func will try get all the items trough the order management func, if rejected it will log the reject 
    async function orderItems() {
            try {
                const drink = await orderManagement("Drink");  //first try this
                console.log(drink);
        
                const food = await orderManagement("Food"); //wait till the other one finishes and then try this
                console.log(food);
        
                const dessert = await orderManagement("Dessert"); // same here 
                console.log(dessert); 

                console.log("Your order is ready! We hope you like it :)"); //After all of that then clg this
            } catch (error) {
                console.log(error);
                //If the cook fks the order then we stop the function
            }
    }
                    orderItems();
            // Call of the function.