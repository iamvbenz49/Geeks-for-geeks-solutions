class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x) {
    let stack = []
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "{" || x[i] === "(" || x[i] === "[") {
            stack.push(x[i])
        } else if ((x[i] === "]" && stack[stack.length - 1] === "[") || (x[i] === "}" && stack[stack.length - 1] === "{") || (x[i] === ")" && stack[stack.length - 1] === "(")) {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}
}
