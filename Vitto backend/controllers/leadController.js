const pool = require("../config/db");

exports.createLead = async (req, res) => {
  const {
    email,
    phone,
    institution_name,
    institution_type,
    city,
    loan_book_size,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO leads 
      (email, phone, institution_name, institution_type, city, loan_book_size)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [email, phone, institution_name, institution_type, city, loan_book_size]
    );

    res.json(result.rows[0]);
  } catch (err) {
  console.error("FULL ERROR:", err);
  res.status(500).json({ message: "Error creating lead" });
}
};

exports.getLead = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("SELECT * FROM leads WHERE id=$1", [id]);

  res.json(result.rows[0]);
};