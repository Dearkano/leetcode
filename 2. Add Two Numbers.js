var addTwoNumbers = function(l1, l2) {
    var carry = 0
    var head = {
    }
    var l = head
    while(l1||l2||carry){
        var n1 = l1?l1.val:0
        var n2 = l2?l2.val:0
        var n =carry + n1 + n2
        carry = 0
        if(n>=10){
            n-=10
            carry = 1
        }
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
        l.val = n
        l.next = {}
        if(!l1&&!l2&&!carry)l.next = null
        l = l.next
    }
    return head
};