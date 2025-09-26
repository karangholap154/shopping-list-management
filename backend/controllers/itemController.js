// controllers/itemController.js
let items = []; // in-memory array to store items
let nextId = 1;

const getItems = (req, res) => {
  res.json(items);
};

const addItem = (req, res) => {
  const { name, quantity, category } = req.body;
  if (!name || !quantity) {
    return res.status(400).json({ message: "Name and quantity are required" });
  }
  const newItem = { id: nextId++, name, quantity, category: category || "General" };
  items.push(newItem);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  const { name, quantity, category } = req.body;
  if (name) item.name = name;
  if (quantity) item.quantity = quantity;
  if (category) item.category = category;

  res.json(item);
};

const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
};

module.exports = { getItems, addItem, updateItem, deleteItem };
