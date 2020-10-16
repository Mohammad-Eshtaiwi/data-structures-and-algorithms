# Singly Linked List

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers

## Challenge

to implement the linked list

day 1 :

- insert():insert node to the end of the list
- includes(): check ifthe given value is found
- toString(): log the linked list as 1->2->3->null

## Approach & Efficiency & ## API

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- insert(): if it is empty then head => node else keep search until find next = null then add the new node to it (big O => 1)
- includes(): check if the given value is found, trace over the list and if found it then return true else false (big O is n)
- toString(): trace over all the nodes and add then into an array then use join method to join them (big O is n)

<!-- Description of each method publicly available to your Linked List -->
