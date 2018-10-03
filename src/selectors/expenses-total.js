const reducer = (acc, currentVal) => acc + currentVal.amount;

export default (expenses) => {
  if (expenses.constructor === Array) {
    if (expenses.length > 0) {
      return expenses.reduce(reducer, 0);
    } else {
      return 0;
    }
  } else if (typeof expenses === "object" && expenses.constructor === Object) {
    return expenses.amount;
  }
};