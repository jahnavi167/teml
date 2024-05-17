const names=require('./4name')//importing the 4names
const say=require('./utili')//importing the function
// Import the module
const data = require('./alt');

// Access the exported items array
console.log(data.items); // Output: ['item1', 'item2']

// Access the exported singleperson object
console.log(data.singleperson); // Output: { name: 'jahnavi' }

require('./mindgrenadde')
say("secret")
say(names.peter)
say(names.john)
