import CodashCard from './CodashCard';
import EmailForm from './EmailForm';
import Footer from './Footer';
import PerformanceDriven from './PerformanceDriven';

export default function Home() {
	return (
		<div className="flex flex-col">
			<CodashCard/>
			<PerformanceDriven/>
			<EmailForm/>
			<Footer/>
		</div>
	);
}