// Immediately Invoked Functoin Expression (IIFE) 

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log((`DB CONNECTED TWO ${name}`));
} )("aman")
