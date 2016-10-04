function sum (...args){
  
    const first = args[0];
    // base 
    if(arguments.length < 1){
      return 0;
    }
    
    if(arguments.length === 1){
      return arguments[0];
    }
    
    return first + sum(...args.slice(1));
    
}

console.log(sum());
