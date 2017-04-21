const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000
  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime )
}

(function(){
    const garage = {};

    const logItem = (item) => {
        console.log(`Just received ${item.item}, time to ${item.action()}`)
    }
    orderSupplies('paint', (foundPaint) => {
        logItem(foundPaint);
        garage.paint = true;
        if (garage.brush) {
            logItem(garage.brush);
        }
    });


    orderSupplies('brush', (foundBrush) => {
        if (garage.paint) {
            logItem(foundBrush);
        } else {
            garage.brush = foundBrush;
        }
    });

})()
