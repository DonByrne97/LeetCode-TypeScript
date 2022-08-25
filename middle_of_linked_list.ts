function middleNode(head: ListNode | null): ListNode | null {
    if(!head.next) return head; // If there's no next node for the head, return the head (since it's the only node). 
    let current = head; 
    let length = 0; 
    while(current) {
        length++; 
        current = current.next; // This loop gets the length of the linked list. 
    }
    current = head; 
    for(let i = 0; i < Math.floor(length / 2); i++) {
        current = current.next; 
    }
    return current; 
};
