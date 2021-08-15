import Dashboard from "./containers/Dashboard";
import Balance from './containers/Balance';
import Help from "./containers/Help";
import Invoice from "./containers/Invoice";
import Setting from "./containers/Setting";

const routes = {
    menu: [
        {
            key: "dashboard",
            path: "/dashboard",
            component: Dashboard,
            exact: true,
            icon: null,
        },
        {
            key: "balance",
            path: "/balance",
            component: Balance,
            exact: true,
            icon: null,
        },
        {
            key: "help",
            path: "/help",
            component: Help,
            exact: true,
            icon: null,
        },
        {
            key: "invoice",
            path: "/invoice",
            component: Invoice,
            exact: true,
            icon: null,
        },
        {
            key: "setting",
            path: "/setting",
            component: Setting,
            exact: true,
            icon: null,
        }
    ],
}

export default routes;
