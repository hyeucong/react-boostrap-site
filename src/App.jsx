import './App.css'
import Navbar from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ListProduct from './components/Shop/ListProduct';
import ArticlePage from './components/Pages/Article';
import AboutPage from './components/Pages/About';
import ProductDetail from './components/Shop/DetailProduct';
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext';
import CheckOutPage from './components/Pages/Checkout';
import PaymentSuccess from './components/Pages/Payment';

function App() {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<ArticlePage />} />
                <Route path="/shop" element={<ListProduct />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/checkout" element={<CheckOutPage />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
            <Footer />
        </CartProvider>
    )
}

export default App
