import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/presentation/content";

const navItems = [
	{ title: "Qui nous sommes", url: "/" },
	{ title: "Notre communauté", url: "/community" },
	{ title: "Les évenements", url: "/events" },
];
const devBlog = [
	{
		title: "Non et cupidatat magna exercitation eiusmod officia.",
		text: "Enim adipisicing ad excepteur laboris reprehenderit laboris dolor nostrud et. Culpa consectetur mollit qui ad commodo anim anim. Non duis veniam nostrud magna ullamco ullamco culpa irure exercitation magna enim incididunt. Ea ipsum proident pariatur esse eiusmod elit nulla consectetur enim qui laboris nisi est sint. Voluptate nostrud consectetur non enim. Adipisicing consectetur do fugiat et. Duis magna velit duis incididunt dolore dolore qui anim id laboris eu voluptate non consectetur.",
		image: "https://picsum.photos/600/600",
	},
	{
		title: "Incididunt esse magna sunt in et sint dolor voluptate.",
		text: "Duis ad aute aliqua exercitation proident veniam et nisi ea ex consequat commodo nulla et. Duis ipsum officia cillum ut nostrud. Labore eu laborum laboris in velit proident consectetur irure pariatur culpa. Laboris ullamco quis qui commodo eiusmod laboris. Mollit velit occaecat sit laborum laboris non sit. Culpa laboris labore laborum deserunt. Irure in commodo sint nisi cillum ullamco in officia excepteur tempor Lorem exercitation.",
		image: "https://picsum.photos/500/500",
	},
];

function App() {
	return (
		<div className="App">
			<Navbar items={navItems} />
			<Content article={devBlog} />
		</div>
	);
}

export default App;
