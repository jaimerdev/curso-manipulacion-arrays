const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Jaime',
        total: 240,
        delivered: true
    }
];

//USO DE MAP PARA LIMPIAR EL ARRAY LIMITANDOLO A QUE NOS MUESTRE SOLO EL 'total'
console.log('original', orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);

//**************************************************************************/
//USO DE MAP PARA AGREGAR ATRIBUTO 'tax' AFECTANDO EL ARRAY ORIGINAL
const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
})

console.log('original', orders);
console.log('rta2', rta2);

//**************************************************************************/
//USO DE MAP PARA AGREGAR ATRIBUTO 'tax' SIN AFECTAR EL ARRAY ORIGINAL
const rta3 = orders.map(item => {
    item.tax = .19;
    return {
        ...item,
        tax: .19
    };
})

console.log('original', orders);
console.log('rta3', rta3);