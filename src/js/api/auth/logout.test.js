import "jest-localstorage-mock";
import { logout } from "./logout.js";

describe("logout", () => {
  it("clears the token from browser storage", () => {
    // Mock the login state
    localStorage.setItem("token", "validAccessToken");
    localStorage.setItem(
      "profile",
      JSON.stringify({
        email: "test@test.no",
        name: "testuser",
        avatar: "avatarUrl",
        accessToken: "validAccessToken",
      }),
    );

    //Before logout: Log the values for inspection
    console.log("Token before logout:", localStorage.getItem("token"));
    console.log("Profile before logout:", localStorage.getItem("profile"));

    logout();

    // Expect localStorage to be empty after calling logout
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("profile")).toBeNull();

    //After logout: Log the values for inspection
    console.log("Token after logout:", localStorage.getItem("token"));
    console.log("Profile after logout:", localStorage.getItem("profile"));
  });

  // After each test case: Clears local storage
  afterEach(() => {
    localStorage.clear();
  });
});
