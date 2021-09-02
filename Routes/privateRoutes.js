const router = require("express").Router();
const verify = require("./verifyJWT");
const Cook = require("../models/Cooks");
const menu = require("../models/menu").default;
const fs = require("fs");
const order = require("../models/order");
const Customers = require("../models/Customers");
var multiparty = require("connect-multiparty"),
  multipartyMiddleware = multiparty({ uploadDir: "./Dishes" });

router.get("/dashboard", verify, async (req, res) => {
  // res.json({
  //     welcome:{
  //         message:"welcome to HealthE"
  //     }
  // })
  const cook = await Cook.findOne({
    _id: req.user,
  });
  res.send(cook);
});
router.get("/your-items", verify, async (req, res) => {
  const cook = await Cook.findOne({
    _id: req.user,
  });
  const menuItems = await menu.find({
    cook_id: cook._id,
  });
  res.send(menuItems);
});

router.post(
  "/save-menu-item",
  [verify, multipartyMiddleware],
  async (req, res) => {
    const cook = await Cook.findOne({
      _id: req.user,
    });
    fs.rename(
      "./" + req.files.null.path,
      "./Dishes/" + req.body.dishName + ".png",
      () => {
        console.log("Dish saved");
      }
    );
    var file = req.files.file;
    const menuItem = new menu({
      dishName: req.body.dishName,
      description: req.body.description,
      price: req.body.price,
      recipe: req.body.recipe,
      cook_id: cook._id,
    });
    //const changeStream = menu.watch().on('change', data => console.log(data));
    try {
      const savedMenuItem = await menuItem.save();
      res.send({
        status: 200,
        dishName: req.body.dishName,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

router.delete("/delete-menu-item/:dishName", verify, async function (req, res) {
  const dish = await menu.findOne({
    cook_id: req.user,
    dishName: req.params.dishName,
  });
  if (!dish) {
    res.status(300).send("You are unauthorized to remove this dish");
    return;
  }

  try {
    await menu.findOneAndRemove(
      {
        dishName: req.params.dishName,
      },
      function (err, dish) {
        if (err) {
          console.log(err);
        } else {
          console.log("Removed Dish : ", dish);
        }
      }
    );
    res.send({
      status: 200,
      dishName: req.dishName,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/order", verify, async (req, res) => {
  const customer = await Customers.findOne({
    _id: req.user,
  });
  const { phone, address } = req.body;
  if (!phone || !address) {
    return res.status(422).json({ message: "All fields are required" });
  }
  const order = new order({
    customerId: customer._id,
    items: req.params.cart.items,
    paymentType: req.params.paymentType,
    status: req.params.status,
    cookId: req.params.cookId,
    phone,
    address,
  });
  return;
});

module.exports = router;
