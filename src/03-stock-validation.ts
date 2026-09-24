
interface StoredItem {
    itemNumber: string,
    actualQty: number
}

interface Allocation {
    itemNumber: string,
    requestedQty: number
}

const storedItems: StoredItem[] = [
    {
        itemNumber: "100002151",
        actualQty: 5
    },
    {
        itemNumber: "100002177",
        actualQty: 10
    }
];

const allocation: Allocation = {
    itemNumber: "100002151",
    requestedQty: 3
};

const storedItem = storedItems.find(
    item => item.itemNumber === allocation.itemNumber
);

if (!storedItem) {
    console.log("Item not found");
} else if (storedItem.actualQty >= allocation.requestedQty) {
    console.log("Item available for picking");
} else {
    console.log("Insufficient stock");
}