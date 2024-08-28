const Degree = require("./Degree");
const Student = require("./Student");



Student.belongsTo(Degree)
Degree.hasMany(Student)