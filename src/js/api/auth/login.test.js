import "jest-localstorage-mock";
import { login } from "./login.js";

const VALID_CREDENTIALS = {
  email: "test@test.no",
  password: "validPassword",
};

const INVALID_CREDENTIALS = {
  email: "invalidEmail",
  password: "123",
};

const USER_DATA = {
  email: "test@test.no",
  name: "testuser",
  avatar: "avatarUrl",
  accessToken: "validAccessToken",
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
  statusText: "Unauthorized",
});

describe("login - Storing Token with Valid Credentials", () => {
  beforeEach(() => {
    // Reset localStorage before each test
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("stores a token in localStorage when provided with valid credentials", async () => {
    global.fetch = mockFetchSuccess;

    await login(VALID_CREDENTIALS.email, VALID_CREDENTIALS.password);

    // Check if the token is stored in localStorage
    const storedToken = localStorage.getItem("token");
    expect(storedToken).toBeTruthy();
    expect(storedToken.length).toBeGreaterThan(0);
    console.log("Stored Token:", storedToken);
    console.log("Length of token", storedToken.length);
  });

  it("does not find a token in localStorage when provided with invalid credentials", async () => {
    global.fetch = mockFetchFailure;

    await expect(
      login(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password),
    ).rejects.toThrow("Unauthorized");

    // Check if there is no token stored in localStorage
    const storedToken = localStorage.getItem("token");
    expect(storedToken).toBeNull();
    console.log("Stored Token:", storedToken);
    console.log("StatusText when it does not find a token:", "Unauthorized");
  });

  it("throws an error when the login request fails", async () => {
    global.fetch = mockFetchFailure;

    // await expect(
    //   login(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password),
    // ).rejects.toThrow(mockFetchFailure.statusText);

    // expect(async () => {
    //   await login(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password);
    // }).toThrow(mockFetchFailure.statusText);

    await expect(
      login(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password),
    ).rejects.toThrow("Unauthorized");

    let errorMessage = "Unauthorized";
    expect(typeof errorMessage).toBe("string");
    expect(errorMessage.length).toBeGreaterThan(0);
    console.log("Type of errorMessage:", typeof errorMessage);
    console.log("Length of errorMessage:", errorMessage.length);
    console.log(
      "Error Message/statusText when login request fails:",
      errorMessage,
    );
  });
});
