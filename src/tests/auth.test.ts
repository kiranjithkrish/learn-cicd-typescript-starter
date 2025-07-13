import { describe, expect, it, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";


describe("getAPIKey", () => {
    it("returns api key when header is present"), () => {
        const headers: IncomingHttpHeaders = {
            authorization: "ApiKey my-secret-key"
        };
        expect(getAPIKey(headers)).toBe("my-secret-key")
    }

    it("returns null if authorization header is missing", () => {
        const headers: IncomingHttpHeaders = {};
        expect(getAPIKey(headers)).toBeNull();
    })

    it("returns null if authorization header is malformed", () => {
        const headers: IncomingHttpHeaders = {
            authorization: "Bearer my-sfsdfdsf-key"
        };
        expect(getAPIKey(headers)).toBeNull();
    })
})

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});