/**
 * Using try-finally block  helps to wrap the code ensuring that the finally block is executed in case of completion 
 * wheather early or return the yield statments are exhausted. this helps in performing any clean code or closing operation after all sequences have closed
 */

function *needs(){
    try{
        yield 'water'
        yield 'food';
        yield 'clothings'
    }finally{
        console.log(`you  have to sleep enough too`);
        yield `sleeping`
    }
}
const needIterator = needs();
console.log(needIterator.next())
console.log(needIterator.next())
console.log(needIterator.return('FootBall'))
console.log(needIterator.next())
console.log(needIterator.next())
