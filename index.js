// Given an integer n, count the total number of
// 1 digits appearing
// in all non-negative integers less than or equal to n.

function numberOfOnes(n) {
    let count = 0
    for (let i = 0; i <= n; i++) {
        if (i.toString().includes('1')) {
            const iterator = i.toString()[Symbol.iterator]()
            let theChar = iterator.next()
            while (!theChar.done && theChar.value === '1') {
                theChar = iterator.next()
                count++
            }
        }
    }
    console.log(count)
}
numberOfOnes(14)
