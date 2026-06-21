const express = require("express");

const db = require("./db");

const app = express();

app.use(express.json());

//db.connect();
/*
CREATE Employee
POST /employees
*/
app.post("/storeEmployee", (req, res) => {
    const { name, email, salary } = req.body;

    const sql =
        "INSERT INTO employees(name,email,salary) VALUES(?,?,?)";

    db.query(sql, [name, email, salary], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Employee Added",
            id: result.insertId
        });
    });
});

/*
READ All Employees
GET /employees
*/
app.get("/findEmployee", (req, res) => {
    console.log("request sent")
    db.query(
        "SELECT * FROM employees",
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
});

/*
READ Employee By Id
GET /employees/:id
*/
app.get("/findEmployeeById/:id", (req, res) => {

    db.query(
        "SELECT * FROM employees WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
});

/*
UPDATE Employee
PUT /employees/:id
*/
app.put("/updateEmployee/:id", (req, res) => {

    const { name, email, salary } = req.body;

    const sql =
        "UPDATE employees SET name=?, email=?, salary=? WHERE id=?";

    db.query(
        sql,
        [name, email, salary, req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Updated"
            });
        }
    );
});

/*
DELETE Employee
DELETE /employees/:id
*/
app.delete("/deleteEmployee/:id", (req, res) => {

    db.query(
        "DELETE FROM employees WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Employee Deleted"
            });
        }
    );
});



app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});