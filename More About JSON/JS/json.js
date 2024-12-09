console.log('\n Object is Here!');
const shop={
    name: 'ABC',
    address:{
        street: 'Uposhohor',
        Block: 'B',
        RoadNumber: 3
    },
    owner: 'Kabir',
    Phone: '0178394847344'
}

console.log(shop);
console.log('Type Of shop = ', typeof(shop));
console.log('\n');

const stringifiedObject= JSON.stringify(shop);
console.log('String is Here!');
console.log(stringifiedObject);
console.log('Type of stringifiedObject = ', typeof (stringifiedObject));






