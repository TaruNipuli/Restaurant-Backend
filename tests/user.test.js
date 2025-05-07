import request from "supertest";
import app from "../src/app.js";

describe("User API", () => {
  it("GET /api/v1/users should return 200 and an array of users", async () => {
    const res = await request(app).get("/api/v1/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/v1/auth/login should return 400 with missing data", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("POST /api/v1/auth/register should return 400 with missing data", async () => {
    const res = await request(app).post("/api/v1/auth/register").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});
