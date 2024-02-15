import "jest-localstorage-mock";
import { logout } from "./logout.js";

require("dotenv/config");

const USER_DATA = {
  email: process.env.USER_EMAIL,
  name: process.env.USER_NAME,
  avatar: process.env.USER_AVATAR,
  accessToken: "validAccessToken",
};

describe("logout", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("clears the token from browser storage", () => {
    // Mock the login state
    localStorage.setItem("token", USER_DATA.accessToken);
    localStorage.setItem("profile", JSON.stringify(USER_DATA));

    //Before logout: Log the values in local storage
    console.log("Token before logout:", localStorage.getItem("token"));
    console.log("Profile before logout:", localStorage.getItem("profile"));

    logout();

    // Expect localStorage to be empty after calling logout
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("profile")).toBeNull();

    //After logout: Log the values in local storage
    console.log("Token after logout:", localStorage.getItem("token"));
    console.log("Profile after logout:", localStorage.getItem("profile"));
  });
});
