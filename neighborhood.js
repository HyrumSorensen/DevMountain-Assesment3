let restaurantList = [];
const res1 = {
    name: "Rancheritos",
    URL: "https://rancheritosmexicanfood.com/"
}
const res2 = {
    name: "McDonalds",
    URL: "https://www.mcdonalds.com/us/en-us.html"
}
const res3 = {
    name: "China Town Restaurant",
    URL: "https://www.chinatownprovout.com/"
}
const res4 = {
    name: "Wendy's",
    URL: "https://www.wendys.com/"
}
const res5 = {
    name: "Don Joaquin's",
    URL: "https://stdonjoaquin.com/"
}
const res6 = {
    name: "Burger Supreme",
    URL: "https://www.burgerssupreme.com/"
}
const res7 = {
    name: "In-n-Out",
    URL: "https://www.in-n-out.com/"
}
const res8 = {
    name: "Chipoltle",
    URL: "https://www.chipotle.com/"
}
restaurantList.push(res1);
restaurantList.push(res2);
restaurantList.push(res3);
restaurantList.push(res4);
restaurantList.push(res5);
restaurantList.push(res6);
restaurantList.push(res7);
restaurantList.push(res8);

console.log(restaurantList[1].name);


function randomGenerator(restaurantList) {
    let randomNum = Math.floor(Math.random() * 8);
    let randomRestaurant = restaurantList[randomNum];
    const restaurant = document.createElement('a');
    restaurant.setAttribute('href', `${randomRestaurant.URL}`);
    restaurant.innerHTML = `${randomRestaurant.name}`;
    document.querySelector('footer').appendChild(restaurant);
}

document.querySelector('#gen-button').addEventListener('click', function(e){
    randomGenerator(restaurantList);
})