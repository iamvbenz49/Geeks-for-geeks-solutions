class Solution {
    //Function to count nodes of a linked list.
    getCount(head) {
        let count = 1;
        while (head.next !== null) {
            head = head.next
            count += 1
        }
        return count
    }
}