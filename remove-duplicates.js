// Given a sorted linked list, delete all duplicates such that each element appear only once.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var deleteDuplicates = function(head) {
    let current = head;
    let next = null;
    if(!head) {
        return head;
    }
    while(current.next) {
        if (current.val === current.next.val) {
            next = current.next.next;
            current.next = null;
            current.next = next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};