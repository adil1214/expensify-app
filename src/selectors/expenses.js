// getVisibleExpenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    const endDateMatch = typeof startDate !== 'number' || endDate >= expense.createdAt;
    let textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {              // btw there is no sort by description -_-
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;    // newest to oldest
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;          // highest to lowest price
    }
  });
};