const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000


  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        const rand = Math.random();
        if (rand > 0.5) {
            reject();
        }
        if (foundItem) {
            resolve(foundItem);
        }

    }, deliveryTime )
  });
}


const logItem = (item) => {
    console.log(`Just received ${item.item}, time to ${item.action()}`)
}

const paintPromise = orderSupplies('paint');
const brushPromise = orderSupplies('brush');

Promise.all([paintPromise, brushPromise])
    .then((deliveredItems) => {
        logItem(deliveredItems[0]);
        logItem(deliveredItems[1]);
    })
    .catch(()=>{
        console.log('There was a delivery problem!');
    })

// paintPromise
//     .then((paint) => {
//         logItem(paint)
//         return brushPromise;
//     }) 
//     .then((brush) => {
//         logItem(brush);
//     })
//     .catch(()=>{
//         console.log('There was a delivery problem!');
//     })