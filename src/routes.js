import Dashboard from "./containers/Dashboard";
import Balance from './containers/Balance';
import Help from "./containers/Help";
import Invoice from "./containers/Invoice";
import Setting from "./containers/Setting";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

const routes = {
    menu: [
        {
            key: "dashboard",
            path: "/home/dashboard",
            component: Dashboard,
            exact: true,
            icon: null,
        },
        {
            key: "balance",
            path: "/home/balance",
            component: Balance,
            exact: true,
            icon: null,
        },
        {
            key: "help",
            path: "/home/help",
            component: Help,
            exact: true,
            icon: null,
        },
        {
            key: "invoice",
            path: "/home/invoice",
            component: Invoice,
            exact: true,
            icon: null,
        },
        {
            key: "setting",
            path: "/home/setting",
            component: Setting,
            exact: true,
            icon: null,
        }
    ],
    auth: [
        {
            key: "home",
            path: "/home",
            component: Home,
            exact: true,
            icon: null,
        },
        {
            key: "signin",
            path: "/sign-in",
            component: SignIn,
            exact: true,
            icon: null,
        },
        {
            key: "signup",
            path: "/sign-up",
            component: SignUp,
            exact: true,
            icon: null,
        }
    ],
}

export default routes;
