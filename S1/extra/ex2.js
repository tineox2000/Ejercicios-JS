const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let index = 0; index < foodSchedule.length; index++) {
    const food = foodSchedule[index];

    if (food.isVegan === false) {
        food.name = fruits.shift()      
    }  
}
console.log(foodSchedule);
/* for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];

  for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];

    if (food.isVegan === false) {
        food.name = fruit
    }
  }
  console.log (foodSchedule)
} */
