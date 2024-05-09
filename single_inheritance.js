//  class parent{
//     constructor(){
//         this.name="BMW"
//     }
//     driver(){
//         console.log("he can drive")

//     }
//  }

//  class child extends parent{
//     constructor(){
// super()
// this.price=12000000

//     }
//     smoke(){
//         console.log("he is smoking");
//     }
//  }


//  ch=new child()
//  console.log(ch.name,ch.price);


// multi level


class Grandpa{
    farmer(){
        console.log("he is farmer");

    }
}


class parent extends Grandpa{
    driver(){
        console.log("he can drive");

    }
}



class child extends parent{
    smoke(){
        console.log("he is smoker");
    }
}

p=new parent()
p.driver()
p.farmer()


c=new child()
c.smoke()
c.farmer()


// hierarchy


// class Father {
//     farmer()
//     {
//         console.log("he is a farmer");
//     }

//         driver()
//         {
//         console.log("he can drive");

//     }
    
//     smoke()
//     {
//                 console.log("he is smoker");
//             }
//     drunk()
//     {
//                 console.log("he is a drunk person");
//             }

// }
  

// class child1 extends Father(){
//     age(){
//         console.log("30");
//     }


// }



// class child2 extends Father(){
//     age(){
//         console.log("30");
//     }
    

// }


// class child3 extends Father(){
//     age()
//     {
//         console.log("30");
//     }
    

// }



// ch= new child1()
// ch.age()
// ch.drunk()