import Jumbo from "./components/jumbo/index";
import JumboData from "./fixtures/jumbo.json";
export default function App() {
  return (
    <Jumbo.Container>
      {JumboData.map((item) => (
        <Jumbo key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
          <p>{item.image}</p>
        </Jumbo>
      ))}
    </Jumbo.Container>
  );
}
