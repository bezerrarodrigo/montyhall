import Porta from "../components/Porta";
import PortaModel from "../model/portaModel";

export default function Home() {

  const [porta, setPorta] = useState(new PortaModel(1));

  return (
    <div style={{ display: "flex" }}>
      <Porta porta={porta1} />
    </div>
  )
}
