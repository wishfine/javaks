// 双端队列
class Deque {
    constructor() {
        this.items = [];
    }

    push_back(el)
    {
        this.items.push(el);
    }

    push_front(el)
    {
        this.items.unshift(el);
    }
    pop_front()
    {
        return this.items.shift();
    }
    pop_back()
    {
        return this.items.pop();
    }
    front (){
        return this.items[0];
    }


    isEmpty (){
        return this.items.length == 0;
    }

    size (){
        return this.items.length;
    }

    toString () {
        let resultString = '';
        for (let i of this.items) {
            resultString += i + ' ';
        }
        return resultString;
    };
}
export default Deque