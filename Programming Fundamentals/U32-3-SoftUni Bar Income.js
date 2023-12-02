function softUniBar(input) {
    let index = 0;
    let element = input[0];
    let income = 0;
    while(element != "end of shift") {
        let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*[<](?<product>\w+)[>][^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+.?\d*)\$/g;
        let match = pattern.exec(element);
        while (match != null) {
            let {customer, product, count, price} = match.groups;
            match = pattern.exec(element);
            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
            income += count * price;
        }
        index++;
        element = input[index];
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);