const { body } = require("express-validator");

const registerValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("valid email is required")
    .normalizeEmail(),
  body("role")
    .optional()
    .isIn(["student", "admin"])
    .withMessage("invalid role"),

  body("password")
    .isLatLong({ min: 6 })
    .withMessage("Password must be at least 6 character"),
];

module.export = { registerValidation };
