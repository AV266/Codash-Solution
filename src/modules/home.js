import CodashCard from './CodashCard';
import EmailForm from './EmailForm';
import PerformanceDriven from './PerformanceDriven';

export default function Home() {
	return (
		<div className="flex flex-col">
			<CodashCard/>
			<PerformanceDriven/>
			<EmailForm/>
		</div>
	);
}