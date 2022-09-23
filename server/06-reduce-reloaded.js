const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

 //****************************************************************************** */
const data = [
    {
        customerName: 'Nicolas',
        level: 'low'
    },
    {
        customerName: 'Zulema',
        level: 'medium'
    },
    {
        customerName: 'Santiago',
        level: 'hight'
    },
    {
        customerName: 'Jaime',
        level: 'low'
    }
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);
