const express = require("express");
const {
  addEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/empController");

const router = express.Router();

router.post("/add-employee", addEmployee);

router.get("/", getEmployees);
router.delete("/:id", deleteEmployee);
router.put("/:id", updateEmployee);

module.exports = router;
