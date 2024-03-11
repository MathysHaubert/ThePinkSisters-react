import "./content.css";

type ContentProps = {
	title: string;
	text: string;
	image: string;
	type?: number;
};

export default function Content1(props: ContentProps) {
	return (
		<div className="content">
			<div className="colmun-1">
				<div className="paragraph">
					<div className="title">
						<h1>{props.title}</h1>
					</div>
					<div className="text">
						<p>{props.text}</p>
					</div>
				</div>
			</div>
			<div className="colmun-2">
				<div className="container-image">
					<img src={props.image} alt="content" className="image" />
				</div>
			</div>
		</div>
	);
}