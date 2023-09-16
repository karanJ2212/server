import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  //   const user = request.body;

  //   const newUser = new User(user);
  //   console.log(user);

  const userData = request.body; // Extract the user data from request.body

  const newUser = new User(userData); // Use userData to create the new user
  console.log(newUser);
  console.log(userData);
  try {
    await newUser.save();
    response.status(201).json(newUser);
    console.log("success, user created in database ");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
