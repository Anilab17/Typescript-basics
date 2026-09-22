// interface Bankidentity{
//     name:string;
//     creditscore:number;
// }

// interface employeeidentity{
//     id:number;
//     email:string;
// }

// type employeedata = Bankidentity & employeeidentity;

// const signcontract = (employee:employeedata):void=>{
//    console.log(
//     `Signing contract for ${employee.name} with credit score ${employee.creditscore} and employee ID ${employee.id} and email ${employee.email}`
//    )
// }

// signcontract({
//     name:"Anilkumar",
//     creditscore:750,
//     id:13,
//     email:"anilkumar@gmail.com"
// })



// error unauthorized, user doesn't exist, wrong credentials, internal server error.
// Using enums
// enum LoginError  {
//     Unauthorized= "Unauthorized",
//     NoUser="User doesn't exist",
//     wrongCredentials="wrong credentials",
//     InternalServerError="Internal server error"
// }

// const printError =(error:LoginError)=>{
//     // console.log(error)
//     if(error === LoginError.Unauthorized){
//         console.log("User not found")
//     }else if(error === LoginError.NoUser){
//         console.log("User doesn't exist")
//     }else if(error === LoginError.wrongCredentials){
//         console.log("Wrong credentials details")
//     }else if(error === LoginError.InternalServerError){
//         console.log("Internal error")
//     }
//     console.log(error)
// }

// printError(LoginError.wrongCredentials)


// Generics
// class storageContainer<T>{
//     private contents: T[];

//     constructor(){
//         this.contents = [];
//     }

//     addItem(item:T):void{
//      this.contents.push(item);
//     }

//     getItem(idx:number): T | undefined{
//         return this.contents[idx];
//     }
// }

// const usernames = new storageContainer<string>();
// usernames.addItem("Anilkumar");
// usernames.addItem("Madivalar");
// console.log(usernames.getItem(0))


// const friendscount = new storageContainer<number>();
// friendscount.addItem(23);
// friendscount.addItem(67);
// console.log(friendscount.getItem(0))



// Read-only variables

interface Employee{
   readonly employeeId: number;
    startdate: Date;

    name: string;
    department:string;
}

const employee:Employee={
    employeeId:11,
    startdate:new Date(),
    name: "anilkumar",
    department:"developer"
}
// employee.employeeId = 34234
employee.name = "anilkumar"
console.log(employee)
