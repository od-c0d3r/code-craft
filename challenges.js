// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3

// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let counter = 1;
  if (head === null) return 0;
  if (head && head.next === null) return counter;

  function couterPlus(head){
    if (head.next === null) return counter;
    counter += 1;
    head = head.next;
    return couterPlus(head)
  }
  
  couterPlus(head)
  return counter;
}

function count(head, data) {
  let counter = 0;
  console.log(head);
  if (head === null) return counter;
  
  function couterPlus(head){
    if (head.data === data) counter += 1;
    if (head.next === null) return counter;
    head = head.next;
    return couterPlus(head)
  }
  
  couterPlus(head)
  return counter;
}