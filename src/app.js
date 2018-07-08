import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const expenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
    </div>
);

const addExpensePage = () => (
    <div>
        This is from my add expense component.
    </div>
);

const editExpensePage = () => (
    <div>
        This is from my edit expense component.
    </div>
);

const helpPage = () => (
    <div>
        This is from my help component.
    </div>
);

const NotFoundPage = () => (
    <div>
        404, not found.
    </div>
);



const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={expenseDashboardPage} exact={true} />
            <Route path="/create" component={addExpensePage} />
            <Route path="/edit" component={editExpensePage} />
            <Route path="/help" component={helpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

let appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);