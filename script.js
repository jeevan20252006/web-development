
    function test()
    {
        console.log("details form");
        document.getElementById("test").innerHTML = "students details";
    }
    let a=10;
    a=20;
    function add(a,b)
    {
    console.log(a+b)
    }
    function sub(a,b)
    {
    console.log(a-b)
    }
    function mul(a,b)
    {
    console.log(a*b)
    }
    add(10,20)
    sub(30,10)
    mul(20,20)

     let c=18;
     if (c>=18)
     {
        console.log("eligible for vote");
     }

     let d=10
     if(d>=18)
     {console.log("eligible for vote");

     }
     else{
        console.log("not eligible");
     }
     let x=10;
     y=30
     function swichcase(a)
    { switch(true)
     {
        case a=="add":
             console.log("addition=",x+y);
             break;
        case a=="sub":
            console.log("subtraction=",x-y);
            break;
        default:
            console.log("invalid number");

     }
    }
swichcase("add")
swichcase("sub")

for(z=5;z<=10;z++)
{
    console.log(z);
}



const mark=[90,87,65,70,90]
let e=0;
for(i=0;i<mark.length;i++)
{
    e=e+mark[i];
}
console.log(e/mark.length);

const car={
    name: "BMW",model:"2020",price:"2 crores",model:"X5"
    
}
console.log(car.name);

