/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null; 
    let intersection : ListNode = detectCycleHelper(head);
    if(!intersection) return null;
    while(head !== intersection) {
        head = head.next; 
        intersection = intersection.next; 
    }
    return head; 
};

function detectCycleHelper(head: ListNode) : ListNode {
    let slow : ListNode = head;
    let fast : ListNode = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next; 
        if(slow === fast) {
            return slow; 
        }
    }
    return null; 
}
