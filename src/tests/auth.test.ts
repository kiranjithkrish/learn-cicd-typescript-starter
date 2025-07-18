import { describe, expect, it } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  it("returns api key when header is present", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  it("returns null if authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null if authorization header is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer my-sfsdfdsf-key",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});
