//all parameters are positive numbers
function addWithDelay(
    p1 = 13,
    p2 = 963,
    p3 = 6570,
    p4 = 5,
    p5 = 79,
    p6 = 61,
    p7 = 111,
    p8 = 92,
    p9 = 37,
    p10 = 436,
    )
 {
     const params = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
     const negative = params.some(x => x < 0);
     if (!negative) { 
       const sum = params.reduce((total, amount) => total + amount);
       return new Promise((resolve) => setTimeout(() => resolve(sum), 1000));
     }
     else {
         return Promise.reject('Error! Some parameter is a negative number!')
     }
 }

 addWithDelay()
    .then(d => console.log(d))
    .catch(e => console.error(e));


    //one parameter is a negative number
    function addWithDelay(
        p1 = 13,
        p2 = 963,
        p3 = 6570,
        p4 = -5,
        p5 = 79,
        p6 = 61,
        p7 = 111,
        p8 = 92,
        p9 = 37,
        p10 = 436,
        )
     {
         const params = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
         const negative = params.some(x => x < 0);
         if (!negative) { 
           const sum = params.reduce((total, amount) => total + amount);
           return new Promise((resolve) => setTimeout(() => resolve(sum), 1000));
         }
         else {
             return Promise.reject('Error! Some parameter is a negative number!')
         }
     }
    
     addWithDelay()
    .then(d => console.log(d))
    .catch(e => console.error(e));

    