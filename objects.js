//TASK_FIRST
let user = {
    user_name:"Om",
    sname:"Hatte",
}
 user.user_name="Om";
 delete user.sname;

 for(let name in user){
     console.log(user[name]);
 }


 //TASK_SECOND
 let salaries = {
     john:1500,
     pete:2000,
     vighnesh:4500,
     amy:5000
 }
 let sum=0;
 for(let sal in salaries){
     sum+=salaries[sal];
 }
 console.log('sum is:',sum);

 //TASK_THRD
 let pageInfo = {
     width:500,
     height:800,
     title:"my page"
 }

 let total_sum = 0;

 for(let amount in pageInfo){
     if(typeof pageInfo[amount] == 'number'){
         total_sum += pageInfo[amount];
     }
 }

 console.log('total:',total_sum);


 //CALCULATOR_TASK_FOURTH

//  let calculator = {
//      no1:0,
//      no2:0,
//      read: () => {
//          no1 = prompt('enter first number');
//          no2 = prompt('enter second number');
//          console.log(no1,':',no2);
//      },
//      add: () => {
//          console.log(Number(no1)+Number(no2));
//      },
//      multiply: () => {
//          console.log(Number(no1)+Number(no2));
//      }
//  }

//  calculator.read();
//  calculator.add();
//  calculator.multiply();


 ////////

 //TASK_FIFTH

//  let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this;
//     }
//   };


//   ladder.up().up().down().showStep().up().showStep()

//   ladder.up()
//   ladder.up()
//   ladder.down()
//   ladder.showStep()
//   ladder.up()
//   ladder.showStep()



  ///////   CONSTRUCTOR_FUNCTION_TASK_SIXTH

 
  function calculator () {
     this.num1=0;
     this.num2=0;
     this.read = function()
     {
         this.num1 = parseInt(prompt("enter first value"));
         this.num2 = parseInt(prompt("enter second value"));
     };
     this.sum = function() {
         let addition = this.num1 + this.num2
         console.log("addition="+addition);
     };
     this.mul = function() {
        let multiply = this.num1 * this.num2
        console.log("multiplication="+multiply);

    };
}
    let calculate = new calculator();
    calculate.read();
    calculate.sum();
    calculate.mul();

 