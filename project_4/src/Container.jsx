import "./styles/global.css";
export function Container({ navbar, footer, children }) {
  return (
    <div className="Body">
      <nav> {navbar} </nav>
      <main> {children} </main>
      <footer> {footer} </footer>
    </div>
  );
}
