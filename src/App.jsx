import Footer from './components/Footer';
import BentoSection from './components/home-page/BentoSection';
import IntroSection from './components/home-page/IntroSection';

function App() {
	return (
		<main className="flex flex-col place-content-center">
			<IntroSection />
			<BentoSection />
			<Footer />
		</main>
	);
}

export default App;
