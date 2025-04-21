const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register event listener
emitter.on('greet', name => {
  console.log(`Hello, ${name}! Welcome to the event-driven world.`);
});

// Trigger event in a loop
const names = ['Gauri', 'Vaibhav', 'Abhishek', 'Aditya'];

names.forEach((name, i) => {
  setTimeout(() => emitter.emit('greet', name), i * 1000);
});
