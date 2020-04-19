export const TEST_ACTION = "TEST_ACTION";
export const FETCH_RESUME = "FETCH_RESUME";

export function testFunction(randomInput) {
  return { type: TEST_ACTION, randomInput };
}

export function fetchResume() {
  return (dispatch) => {};
}
