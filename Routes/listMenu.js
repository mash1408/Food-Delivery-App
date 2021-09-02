const router = require("express").Router();
const Cook = require("../models/Cooks");
const menu = require("../models/menu").default;

router.get("/menu", async (req, res) => {
  const menuItems = await menu.find({});
  res.send(menuItems);
});

router.get("/menu/cook/:cookid", async (req, res) => {
  const menuItems = await menu.find({
    cook_id: req.params.cookid,
  });
  res.send(menuItems);
});
router.get("/menu/filter/price/:from-:to", async (req, res) => {
  const menuItems = await menu.find({
    price: { $gte: req.params.from, $lte: req.params.to },
  });
  res.send(menuItems);
});

router.get("/menu/filter/price/:above", async (req, res) => {
  let menuItems;
  if (req.header("price-above")) {
    menuItems = await menu.find({
      price: { $gte: req.params.above },
    });
  } else {
    menuItems = await menu.find({
      price: { $lte: req.params.above },
    });
  }

  res.send(menuItems);
});

module.exports = router;
