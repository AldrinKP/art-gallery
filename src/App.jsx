import Footer from './components/Footer';
import BentoSection from './components/home-page/BentoSection';
import IntroSection from './components/home-page/IntroSection';

function App() {
	return (
		<div className="flex flex-col items-center">
			<IntroSection />
			<BentoSection />
			<Footer />
		</div>
	);
}

export default App;
