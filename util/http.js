import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-course-aa66b-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}