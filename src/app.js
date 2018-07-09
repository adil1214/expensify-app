import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const expenseDashboardPage = () => (
    <div>
        This is from my <strong>dashboard</strong> component.
    </div>
);

const addExpensePage = () => (
    <div>
        This is from my <strong>add expense</strong> component.
    </div>
);

const editExpensePage = () => (
    <div>
        This is from my <strong>edit expense</strong> component.
    </div>
);

const helpPage = () => (
    <div>
        This is from my <strong>help</strong> component.
    </div>
);

const NotFoundPage = () => (
    <div>
        404, not found. <br/>
        <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1><br/>
        <NavLink activeClassName="is-active" to="/" exact>Dashboard</NavLink><br/>
        <NavLink activeClassName="is-active" to="/create">create expense</NavLink><br/>
        <NavLink activeClassName="is-active" to="/edit">edit expense</NavLink><br/>
        <NavLink activeClassName="is-active" to="/help">welp</NavLink><br/>
        <p>___________________________________</p>
    </header>
);



const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={expenseDashboardPage} exact={true} />
                <Route path="/create" component={addExpensePage} />
                <Route path="/edit" component={editExpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

let appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);