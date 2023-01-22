function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
let select=["snake","water","gun"]
let random_selection =getRandomItem(select);
let user=prompt("enter your charactor");
if(user==random_selection){
  console.log("my selection is:"+random_selection+"\nDRAW!!!!");
}
else if(user=="water" && random_selection=="snake"){
  console.log("my selection is:"+random_selection+"\nYou Lose!!!!");
}
else if(user=="snake" && random_selection=="water"){
  console.log("my selection is:"+random_selection+"\nYou win!!!!");
}
else if(user=="gun" && random_selection=="snake"){
  console.log("my selection is:"+random_selection+"\nYou win!!!!");
}
else if(user=="snake" && random_selection=="gun"){
  console.log("my selection is:"+random_selection+"\nYou Lose!!!!");
}
else if(user=="water" && random_selection=="gun"){
  console.log("my selection is:"+random_selection+"\nYou win!!!!");
}
else if(user=="gun" && random_selection=="water"){
  console.log("my selection is:"+random_selection+"\nYou Lose!!!!");
}