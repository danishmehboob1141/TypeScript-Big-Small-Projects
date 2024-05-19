import * as promptSync from 'prompt-sync'
const input = new promptSync()

function push(item:any) {
    console.clear()
    stack.push(item)
    stackHistory.push(`\tPush : ${item}`)
}
function pop() {
    console.clear()
    console.log("\n\n\tRemoving Recent Data! Wait ...")
    for (let i=0; i<2500000000; i++) {}         // delay loop
    stackHistory.push(`\tPopped : ${stack[stack.length-1]}`)
    console.log("\n\tData Removed Successfully!")
    // console.log(`\tPopped : ${stack[stack.length-1]}`)
    stack.pop()
    for (let i=0; i<2000000000; i++) {}      // delay loop
}
function peek() {
    console.clear()
    console.log("\n\n\tRetreiving Data! Wait ...")
    for (let i=0; i<2000000000; i++) {}      // delay loop
    console.clear()
    console.log(`\n\n\tLast data entered : ${stack[stack.length-1]}`)
    for (let i=0; i<2000000000; i++) {}      // delay loop
}

let operation: any
let stackHistory: string[] = []
let stack:string[] = []
    do {
        console.clear()
        console.log()
        console.log("\tPUSH --- (u)")
        console.log("\tPOP ---- (o)")
        console.log("\tPEEK --- (e)")
        console.log("\tEND ---- (0) \n")

        operation = input(`\tStack Operation > `)
        if (operation == 0) {
            break
        }
        if (operation == 'u' || operation == 'U') {                       // push
            console.clear()
            console.log("\n\n")
            const pushItem = input(`\tAdd Data > `)
            push(pushItem)
            console.clear()
            console.log("\n\n\tAdding Data ...")
            for (let i=0; i<2000000000; i++) {}      // delay loop
            console.clear()
            console.log("\n\n\tData Added Successfully!")
            for (let i=0; i<2000000000; i++) {}      // delay loop
            console.log()
        } else if (operation == 'o' || operation == 'O') {                // pop request
            if(stack.length==0) {
                console.log("\n\n\tStack is already empty! Cannot Pop!\n")
                stackHistory.push(`\n\n\tPop Request! While the stack is empty`)
            } else {
                pop()
            }
        } else if (operation == 'e' || operation == 'E') {                // peek request
            stackHistory.push(`\tAccess Request : Top`)
            if(stack.length==0) {
                console.clear()
                console.log("\n\n\tRetreiving Data! Wait ...")
                for (let i=0; i<2000000000; i++) {}      // delay loop
                console.clear()
                console.log("\n\n\tStack is empty. Nothing to Retrieve!\n")
                for (let i=0; i<2000000000; i++) {}      // delay loop
            } else {
                peek()
            }
        }
    } while (operation != 0)
console.clear()
console.log()
console.log('\t----------- Stack History -----------')
stackHistory.forEach(event => console.log(event))
console.log(`\t-------------------------------------`)
