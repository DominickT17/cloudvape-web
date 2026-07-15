import AgeGate from './components/AgeGate.jsx';
import Catalog from './components/Catalog.jsx';
import Comparison from './components/Comparison.jsx';
import Delivery from './components/Delivery.jsx';
import FAQ from './components/FAQ.jsx';
import Flavors from './components/Flavors.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import HowToOrder from './components/HowToOrder.jsx';
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx';
import SectionDivider from './components/SectionDivider.jsx';
import TrustBar from './components/TrustBar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

function App() {
  return (
    <div className="min-h-screen bg-ink text-white antialiased">
      <AgeGate />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <SectionDivider tone="cyan" />
        <Products />
        <SectionDivider tone="magenta" />
        <Comparison />
        <SectionDivider tone="cyan" />
        <Flavors />
        <SectionDivider tone="magenta" />
        <Delivery />
        <SectionDivider tone="cyan" />
        <Catalog />
        <SectionDivider tone="magenta" />
        <HowToOrder />
        <SectionDivider tone="cyan" />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
