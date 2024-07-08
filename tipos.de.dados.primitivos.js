let obj1 = {name:'gabriel' , age:22}

let obj2 =  obj1 
obj2.age = 25 
console.log(obj1.age) //25 (mudou)
console.log(obj2.age) //25


let names = ['gabriel', 'ketlin', 'rafael']
let copianame = names

copianame[0] = 'josi'
 console.log(names, copianame)


 function great (){
    console.log('hello')
 }
 let great2 = great
 great2 = 'oi'
 great()