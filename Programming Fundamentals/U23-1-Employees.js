function employees() {
    let input = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'];

    class employee {
        constructor(name, num){
            this.Name = name;
            this.Number = num;
        }
        echo(){
            console.log(`Name: ${this.Name} -- Personal Number: ${this.Number}`);
        }
    }
    
    for (element of input) {
        let number = element.length;
        let myEmployee = new employee(element, number);
        myEmployee.echo();
    }

}
employees();
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);

