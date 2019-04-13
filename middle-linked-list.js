//Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let middleNode = head => {
    let current = middle = head;
    
    while(current && current.next) {
        current = current.next.next;
        middle = middle.next;
    }
    return middle
};