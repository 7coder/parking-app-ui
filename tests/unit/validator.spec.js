import { isPlateValid } from "@/helpers/plateValidator";

describe("Plate validation", () => {
  describe("for DE region", () => {
    [
      "M M 1",
      "M M 11",
      "M M 111",
      "M M 1111",
      "M MM 1",
      "M MM 11",
      "M MM 111",
      "M MM 1111",
      "MM M 1",
      "MM M 11",
      "MM M 111",
      "MM M 1111",
      "MM MM 1",
      "MM MM 11",
      "MM MM 111",
      "MM MM 1111",
      "MMM M 1",
      "MMM M 11",
      "MMM M 111",
      "MMM M 1111",
      "MMM MM 1",
      "MMM MM 11",
      "MMM MM 111",
      "MMM MM 1111"
    ].forEach((plate) => {
      it(`should return true when plate has incorrect format: ${plate}`, () => {
        expect(isPlateValid("DE", plate)).toBeTruthy();
      });
    });

    it("should return false when plate has incorrect format: M M 11111", () => {
      expect(isPlateValid("DE", "M M 11111")).toBeFalsy();
    });

    it("should return false when plate has incorrect format: M 11111", () => {
      expect(isPlateValid("DE", "M 11111")).toBeFalsy();
    });

    it("should return false when plate has incorrect format: MM11111", () => {
      expect(isPlateValid("DE", "MM11111")).toBeFalsy();
    });
  });

  describe("for FR region", () => {
    it("should return true when plate has incorrect format: AB-123-AB", () => {
      expect(isPlateValid("FR", "AB-123-AB")).toBeTruthy();
    });

    it("should return false when plate has incorrect format: AA-1-AA", () => {
      expect(isPlateValid("FR", "AA-1-AA")).toBeFalsy();
    });
  });

  describe("for CH region", () => {
    it("should return true when plate has incorrect format: SG 123456", () => {
      expect(isPlateValid("CH", "SG 123456")).toBeTruthy();
    });

    it("should return false when plate has incorrect format: SG1", () => {
      expect(isPlateValid("CH", "SG1")).toBeFalsy();
    });
    it("should return false when plate has incorrect format: SG 1", () => {
      expect(isPlateValid("CH", "SG 1")).toBeFalsy();
    });
  });

  describe("for AT region", () => {
    it("should return true when plate has incorrect format: FF 123ABC", () => {
      expect(isPlateValid("AT", "FF 123ABC")).toBeTruthy();
    });

    it("should return false when plate has incorrect format: FF 123123", () => {
      expect(isPlateValid("AT", "FF AB")).toBeFalsy();
    });
    it("should return false when plate has incorrect format: FF F 1111", () => {
      expect(isPlateValid("AT", "FF F 1111")).toBeFalsy();
    });
  });
});
