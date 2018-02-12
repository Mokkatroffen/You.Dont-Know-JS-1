a = 2;

b = a * 2;

console.log(b);


a = 21;
c = a * 2;
alert(c);


age = prompt( "please get a car ");
console.log(age);

var amounOfMoney = 100;
amounOfMoney = amounOfMoney * 2; //cuz i want always want double pay
//Converting amount to a string and adding currency type
amounOfMoney = "Kr" + String(amounOfMoney) ;
console.log(amounOfMoney);

//Task 1:
counter=0;
money= prompt("Please tell me how much virtual money you want to waste:");
start= money;
var product = [];
var acc = [];
while(money>0){
    counter++;
   product[counter] = prompt("What phone do you want?");
   money = money - prompt("How much does this phone cost (without tax) ?");
   acc[counter] = prompt("What accessory do you want with this phone?");
   money = money - prompt ("What do you want to pay for this accessory?");

    alert("Thank you for your purchase, a new purchaes will be created uintill you have run out of money");
   }
   money = money * 1.25; //Adding 25 % tax
   alert("Thank you for spending all your hard earned cash. Please check the log for full purchaes history and overdue ammount." );
toString(product);
toString(acc);
owe=start-money;
console.log("You bought " + product + " with the following accessories " + acc + " and you owe me " + owe + " Kroner!" );

