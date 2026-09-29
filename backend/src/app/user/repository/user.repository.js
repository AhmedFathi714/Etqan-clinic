const knex = require("../../../common/db/knex");

exports.findByEmail = async (email) => {
  return knex("users").where({ email: email }).first();
};

exports.create = async (
  email,
  password_hashed,
  first_name,
  last_name,
  phone_number,
) => {
  const [user] = await knex("users")
    .insert({
      email: email,
      password_hashed: password_hashed,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
    })
    .returning(["id", "email", "first_name", "role"]);
  return user;
};
