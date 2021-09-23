const fs = require("fs");
// Temporary Users Data.
const ReadUsers = () => fs.readFileSync(__dirname + "/../constants/Users.json");

const CheckUserNamePassword = (Username, Password) => {
  // Load the users from file.
  const Users = JSON.parse(ReadUsers().toString());
  // Convert all the usernames into lowercase.
  Username = Username.toLowerCase();
  // Check if the user exists or not.
  if (typeof Users[Username] !== "undefined") {
    // User exists.
    // Check if password is right or wrong.
    if (Users[Username].Password === Password) {
      // Correct Username and Password.
      return Users[Username];
    } else {
      // Wrong Username and Password.
      return -1;
    }
  } else {
    // User does not exist.
    return 0;
  }
};

const RegisterNewUser = (Username, Password, Name, Email, Role) => {
  // Load the users from file.
  const Users = JSON.parse(ReadUsers().toString());
  // Convert all the usernames into lowercase.
  Username = Username.toLowerCase();
  // Create a Default user template.
  const NewUser = {
    Name,
    Password,
    Role,
    Verified: false,
    Personal: {
      Gender: null,
      Email,
      Phone: null
    },
    Socials: {
      Facebook: null,
      Instagram: null,
      Twitter: null,
      LinkedIn: null,
      GitHub: null,
      StackOverflow: null,
      WhatsApp: null,
      Telegram: null,
      Discord: null
    },
    CreatedAt: new Date()
  };
  // Check if the user exists or not.
  if (typeof Users[Username] === "undefined") {
    // User doesn't exist.
    // Add the new user to the data.
    Users[Username] = NewUser;
    // Once changing something in the Users object, make it permanent.
    fs.writeFileSync(
      __dirname + "/../constants/Users.json",
      JSON.stringify(Users)
    );
    return true;
  } else {
    // User already exists.
    return false;
  }
};

const ListAllUsers = () => JSON.parse(ReadUsers().toString());

module.exports = {
  CheckUserNamePassword,
  RegisterNewUser,
  ListAllUsers
};
