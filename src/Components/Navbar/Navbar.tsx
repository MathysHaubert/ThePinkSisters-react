import "./navbar.css";

type NavBarProps = {
  items: {
    title: string;
    url: string;
  }[];
};
export default function Navbar(props: NavBarProps) {
  return (
    <>
      <div className="container-fluid">
        <nav className="nav-links">
          {props.items.map((item, index) => (
            <a key={index} href={item.url}>
              <strong>{item.title}</strong>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
