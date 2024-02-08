import "jest-localstorage-mock";
import { login } from "./login.js";

const VALID_CREDENTIALS = {
  email: "test",
  password: "validPassword",
};

const INVALID_CREDENTIALS = {
  email: "invalidEmail",
  password: "123",
};

const USER_DATA = {
  email: "test@test.no",
  name: "testuser",
  avatar: "",
  accessToken: "validAccessToken",
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
  // status: 401,
  // statusText: "Unauthorized",
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
    console.log("length of token", storedToken.length);
  });

  it("throws an error when the login request fails", async () => {
    global.fetch = mockFetchFailure;

    await expect(login("invalidUser", "invalidPassword")).rejects.toThrow(
      mockFetchFailure.statusText,
    );
    console.log("Status Text:", mockFetchFailure.statusText);
  });

  it("throws an error for invalid email format", async () => {
    global.fetch = mockFetchFailure;

    await expect(
      login(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password),
    ).rejects.toThrow(mockFetchFailure.statusText);

    console.log("Status Text:", mockFetchFailure.statusText);
  });
});
