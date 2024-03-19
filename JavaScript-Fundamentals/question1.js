function outerFunction (age){
    let name = "Manik";
    function innerFunction (){
        console.log(name, age);
    }
    return innerFunction;
}

let mInfo = outerFunction(20);
mInfo()

//Demonstration :
/* 
 - outerFunction takes a parameter age and declares a variable name within its scope.
 - Inside outerFunction, an innerFunction is defined which has access to both name and age.
 - outerFunction returns the innerFunction.
 - When outerFunction is called with outerFunction(20), it returns innerFunction and assigns it to the variable mInfo.
 - Later, mInfo() is called. Even though outerFunction has already finished executing, 
   mInfo still maintains access to the variables name and age due to lexical scoping. So, it logs "Manik 20" to the console, 
   demonstrating lexical scoping in action.
   */