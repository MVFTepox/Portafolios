import { ReactNode } from "react";
import { Navbar, Footer } from "@/Components";

interface Props {
  children: ReactNode
}

function App( { children: Children }: Props ) {
  return (
    <div className="scroll-hidden">
      <Navbar />
      {Children}
      <Footer />
    </div>
  );
}
 
export default App;
