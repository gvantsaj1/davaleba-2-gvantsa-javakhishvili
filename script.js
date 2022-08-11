//N1
let  user = {
    firstname:"giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
    // ამოვიღოთ სტუდენტის სტატუსი

delete user.studentstatus;
console.log(user);

//N2
studentsName = ["ana", "giorgi", "beka", "anastasia", "nika"];
for(var i=0; i<studentsName.length; i++){
    console.log(studentsName[i]);
}

//N3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let y of numbers){
    if(y > 5){
        console.log(y);
    }
}

//N4
var user1 = {
	name: "giorgi",
	age:  20,
	studentstatus: "active"
}
if(user1.age < 18 && user1.studentstatus == "active"){
    console.log("Hello");
} else if(user1.name == "Levani"){
    console.log("Hello Giorgi");
} else if(user1.studentstatus == "active" || user1.age < 25){
    console.log("Hello world");
}else{
    console.log("error");
} 

//N5
let array = [ "watermelon", "pear", 10, 45, 50, "apple","ananas" ];
for(let item of array){
    if(typeof item == "string"){
        console.log(item);
    }
}

//N6
 let array1 = [32, 10, "hello", null, "hello2", 50 ];
for(let item of array1){
    if(typeof item == "number" && item % 5 == 0){
        console.log(item);
    }
}


//7
let array2 = [[ 2, -3, 5, 10 ], [25, -24, -11, 100] , [-6, -7, 10] ];
for (let x = 0; x < array2.length; x++){
    const element = array2[x];
    for(let i = 0; i < element.length; i++){
        const positive = element[i];
        if(positive > 0){
            console.log(positive);
        }
    }
}
// for (let item of array2){
//     for(let positiveElement of item){
//         if(positiveElement > 0){
//             console.log(positiveElement);
//         }
//     }
// } dabechdavs igives

//N8
let array3 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for(let item of array3){
    if(item % 2 ==0){
        console.log(item);
    }
} //დაბეჭდავს ლუწ რიცხვებს 
for(let item of array3){
    if(item % 2 ==1){
        console.log(item);
    }
} //დაბეჭდავს კენტ რიცხვებს

//N9

let item1 = "en";
switch(item1){
    case  "ka":
    console.log("ჰელოუ1");
    break;
    case "en":
    console.log("hello");
    break;
    default;
}

