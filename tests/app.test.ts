import request, { Response } from "supertest";

import app from "../src/app";

describe("GET/", () => {
    it("should return Hello World", async () => {
        // create a GET request to the root endpoint
        const response: Response = await request(app).get("/");

        expect(response.text).toBe("Hello World");
        expect(response.status).toBe(200);
    });
});

describe("GET /api/v1/health", () => {
    it("should return server status", async () => {
        // create GET request to health endpoint
        const response: Response = await request(app).get("/api/v1/health");

        //assert
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
        
    });
});