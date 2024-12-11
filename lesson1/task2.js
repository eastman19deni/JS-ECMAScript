const counter = createCounter()
function createCounter() {
    let count = 0

    return {
        increment() {
            count++
            return count
        },

        decrement() {
            count--
            return count
        },

        getValue() {
            return count
        }
    }
}
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getValue())