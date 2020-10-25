# Stacks and Queues

Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.

Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle.

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  S-ould raise exception when called on empty stack
  -Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
- This object should be aware of a default empty value assigned to front when the queue is created.
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
- Should raise exception when called on empty queue
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
- Should raise exception when called on empty queue
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency & api

### isEmpty

check it the top => null if yes return true else false

### enqeue(value)

if the queue empty then the top = node of the value

if not then make new node and make the next of it the prev node then the top = the new value

### dequeue()

if the queue is empty rise an exception

get the last element in the list and delete it by making the prev node next = null

return the deleted value

### peak()

if the queue is empty rise an exception

else

if the queue is empty rise an exception

get the last element in the list return the

![](Stack.jpg)
![](Queue.jpg)
