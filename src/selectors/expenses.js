import moment from 'moment';

// getVisibleExpenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);

    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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