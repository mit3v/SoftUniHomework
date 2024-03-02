const obj = {
    name: "Peter",
    outer() {
        console.log(this);
        const inner = () => console.log(this); // arrow функцията няма контекст на изпълнение и this 
        inner();
    }
}
obj.outer();