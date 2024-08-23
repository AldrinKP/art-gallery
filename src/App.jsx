import Footer from './components/Footer';
import BentoSection from './components/home-page/BentoSection';
import IntroSection from './components/home-page/IntroSection';

function App() {
	return (
		<>
			<main className="flex flex-col place-content-center max-w-[1440px] mx-auto">
				<IntroSection />
				<BentoSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
