let input = prompt('What Would You Like To Do?')
const toDos = ['Collect Eggs', 'Clean Litter'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')
        for (i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log('***********')
    } else if (input === 'new') {
        const newToDo = prompt('What is the New To Do?');
        toDos.push(newToDo);
        console.log(`${newToDo} Added to the List!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an Index to Delete!'));
        if (!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1);
            console.log(`OK, DELETED! ${deleted[0]}`);
        } else {
            console.log('Unknown Index');
        }
    }

    input = prompt('What Would You Like To Do?')
}
console.log("OK, BYE!!!")