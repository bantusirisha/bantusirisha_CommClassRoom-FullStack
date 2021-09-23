// Temporary Users Data.
const Users = require("../constants/Users.json");

const CheckUserNamePassword = (Username, Password) => {
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
    return true;
  } else {
    // User already exists.
    return false;
  }
};

const ListAllUsers = () => Users;

module.exports = {
  CheckUserNamePassword,
  RegisterNewUser,
  ListAllUsers
};
