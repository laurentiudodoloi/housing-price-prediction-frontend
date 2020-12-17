import WelcomePage from "./pages/WelcomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login";

export const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'welcome',
        path: '/',
        component: WelcomePage
    },
    {
        name: 'products',
        path: '/products',
        component: ProductsPage
    },
    {
        name: 'product',
        path: '/product/:id',
        component: ProductPage
    },
    {
        name: 'checkout',
        path: '/',
        component: CheckoutPage
    },
      
]
