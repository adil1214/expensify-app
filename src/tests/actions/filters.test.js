import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, } from './../../actions/filters'

test('should setup set text filter with provided value', () => {
  const txt = 'The text filter is this';
  const action = setTextFilter(txt);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: txt
  })
});

test('should setup set text filter without value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should set sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});

test('should set a start date', () => {
  const t = moment(98643);
  const action = setStartDate(t);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: t
  });
});

test('should set an end date', () => {
  const t = moment(1483805694);
  const action = setEndDate(t);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: t
  });
});