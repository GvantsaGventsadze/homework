// console.log ("homewokr number one")

// const user = {
//    username : 'temo',  userage : 25 ,
//    username : 'lasha', userage : 21 ,
//     username : 'ana' , userage : 28 ,
// }

// for(const F in user){
//     console.log(user[F])
// }



function Randomnumber (){
    return parseInt(Math.random() * 6) +1
}

let result = Randomnumber()

while(result !==3){
     result = Randomnumber()
     console.log(result)
 
}

