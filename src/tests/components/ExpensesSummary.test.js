import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test("should correct render ExpenseSummary with single expense",()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})

test("should correct render ExpenseSummary with multiple expenses",()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={23} expensesTotal={2354343} />);
    expect(wrapper).toMatchSnapshot();
})