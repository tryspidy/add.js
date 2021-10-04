/* helper method */

const __addDecs = (dec1, dec2) => {
    let rem = 0
    let out = []
    for (let i = dec1.length-1; i >= 0; i--) {
        let sum = (parseInt(dec1[i]) + parseInt(dec2[i]) + rem).toString()
        if (sum.length > 1) {
            out.push(sum[sum.length - 1])
            rem = parseInt(sum[0])
        } else {
            out.push(sum)
            rem = 0
        }
    }

    return [out.reverse().join(""), rem]
}


/* pad numbers */

const padnums = (num1, num2) => {
    num1 = num1.toString()
    num2 = num2.toString()

    /* pad the decimal numbers to be equal length */
    if (num1.length > num2.length) {
        let pad = num1.length - num2.length
        for (let i = 0; i < pad; i++) {
            num2 += "0"
        }
    } else if (num2.length > num1.length) {
        pad = num2.length - num1.length
        for (let i = 0; i < pad; i++) {
            num1 += "0"
        }
    }

    return [num1, num2]
}



/* Main method */

const add = (a, b) => {

    let [num1, _dec1] = a.toString().split(".")
    let [num2, _dec2] = b.toString().split(".")
    
    /* pad the decimal numbers to be equal length */
    let [dec1, dec2] = padnums(_dec1, _dec2)
    
    let [decSum, decRem] = __addDecs(dec1, dec2)
    let numSum = parseInt(num1) + parseInt(num2) + decRem

    return `${numSum}.${decSum}`
}



/* Testing code */

console.log( 0.1 + 0.2, add(0.1, 0.2) )
console.log( 0.6237283923 + 0.237834, add(0.6237283923, 0.237834) )
