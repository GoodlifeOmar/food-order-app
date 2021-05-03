const express = require('express')
const path = require('path')
const app = express();
const bodyparser = require("body-parser");
const orders = [];
const PORT = process.env.PORT || 5000

app.use(express.json())
app.get('/', (req, res) => res.send('Hello world'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//creating a New order
app.post("/new_order", (req, res) => {
  const order = req.body;

  if (order.food_name && order.customer_name && order.food_qty) {
    orders.push({
      ...order,

      id: `${orders.length + 1}`,

      date: Date.now().toString()
    });

    res.status(200).json({
      message: "Order created successfully"
    });
  } else {
    res.status(401).json({
      message: "Invalid Order creation"
    });
  }
});

//getting All orders

app.get("/get_orders", (req, res) => {
  res.status(200).send(orders);
});
//app.post('/api/new_order', (req, res) => 
//{
  //console.log(req.body)
  //res.send(req.body)
//})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



