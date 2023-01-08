/* Practice Good Scoping

Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways: 


Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace.If a variable does not need to exist outside a block— it shouldn’t!


1.

Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.



2.

Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.

3.

Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.

Run your code and notice the output.Inside the if block console.log(lightWaves) logs the value Northern Lights to the console.Outside the if block, but still within the function, the same statement logs Moonlight to the console. */


const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();