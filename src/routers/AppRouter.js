import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import addExpensePage from './../components/addExpensePage'
import editExpensePage from './../components/editExpensePage'
import expenseDashboardPage from './../components/expenseDashboardPage'
import Header from './../components/Header'
import helpPage from './../components/helpPage'
import NotFoundPage from './../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={expenseDashboardPage} exact={true} />
                <Route path="/create" component={addExpensePage} />
                <Route path="/edit/:id" component={editExpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;