

interface OrderDetail {
    orderNumber: string;
    itemNumber: string;
    afoPlanQty: number;
}

const orderDetails: OrderDetail[] = [
     {
        orderNumber: "6004000577",
        itemNumber: "ITEM001",
        afoPlanQty: 0
    },
     {
        orderNumber: "6004000577",
        itemNumber: "ITEM003",
        afoPlanQty: 3
    },
     {
        orderNumber: "6004000577",
        itemNumber: "ITEM002",
        afoPlanQty: 0
    }
];

const canBeIncludedOrderPool = orderDetails.some(orderDetail => orderDetail.afoPlanQty > 0);

if (orderDetails.length === 0) {
    console.log("Order details not found")
} else if (canBeIncludedOrderPool) {
    console.log("Order can be included in an Order Pool");
} else {
    console.log("Order cannot be included in an Order Pool")
}