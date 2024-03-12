// List implementation of Stack
/*  Stack is an Abstract Data Structure whose working order is FILO (First-In Last-Out) or LIFO
    this program accepts String data to be input in the stack and you are provided with only 3 types of
    operation-on-stack. By PUSH, you can append the stack with the data, by POP you can delete the last
    element of the stack or the element that you entered lastly. TOP will show you what is present on the top.
    END will halt the program.  */
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let hold
let stack:string[] = []
do{
    const input = await inquirer.prompt([
        {
            type:'list',
            name:'stackOperation',
            message:'Stack Operation >',
            choices:['PUSH','POP','TOP','END']
        }
    ])
    hold = input.stackOperation
    if (input.stackOperation == 'PUSH') {
        const push = await inquirer.prompt([
            {
                type:'string',
                name:'item',
                message:'PUSH > '
            }
        ])
        stack.push(push.item)
    } else if (input.stackOperation == 'POP') {
        if(stack.length==0){
            console.log("Stack is already empty! Cannot Pop!\n")
        } else {
            console.log(`Popped : ${stack[stack.length-1]}\n`)
            stack.pop()
        }
    } else if (input.stackOperation == 'TOP') {
        if(stack.length==0){
            console.log("Stack is empty!\n")
        } else {
            console.log(`TOP : ${stack[stack.length-1]}\n`)
        }
    }

} while (hold != 'END')
