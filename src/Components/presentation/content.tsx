import Content1 from "./content_type_1";

type ContentProps = {
		article:{
			title: string;
			text: string;
			image: string;
			type?: number;
		}[];
};

export default function Content(props: ContentProps) {
	return (
		<>
			{props.article.map((item) => {
				if (
					item.type === undefined ||
					item.type === 1
				) {
					return (
						<Content1
							title={item.title}
							text={item.text}
							image={item.image}
						/>
					);
				}
				return null;
			})}
		</>
	);
}
