class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}


class List {
  constructor(){
    this.head=null
    this.tail=null
  }
  push_front(value){
    const newNode=new Node(value)
    if(this.head==null){
      this.head=newNode
      this.tail=newNode
    }else{
      newNode.next=this.head
      this.head=newNode
    }
  }
  push_bach(value){
       const newNode=new Node(value)
    if(this.head==null){
      this.head=newNode
      this.tail=newNode
    }else{
      this.tail.next=newNode
      this.tail=newNode
    }
  }
  pop_front(){
    if(this.head==null){
      return "No Node found"
    }
    let temp=this.head
    this.head=temp.next
    temp.next=null
    delete temp.next
  }
 pop_back() {
    if (this.head === null) return "No Node found";

    // যদি লিস্টে ১টা নোড থাকে
    if (this.head === this.tail) {
      const val = this.head.value;
      this.head = null;
      this.tail = null;
      return val;
    }

    // একাধিক নোড থাকলে
    let temp = this.head;
    while (temp.next !== this.tail) {
      temp = temp.next;
    }

    const val = this.tail.value;
    temp.next = null;
    this.tail = temp;

    return val;
  }
  showAll(){
    let store=""
    let temp=this.head
    while(temp!==null){
      store+=temp.value + "-->"
      temp=temp.next
    }
    return store
  }

  reverse(){
    let prev=null
    let curr=this.head
    while(curr!==null){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
  }

  peakMiddle(){
    let slow=this.head
    let fast=this.head
    while(fast!==null && fast.nex!==null ){
      slow=slow.next
      fast=fast.next.next
    }
    return slow
  }
  
}

