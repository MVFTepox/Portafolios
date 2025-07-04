import { ReactNode } from "react";
import { Navbar, Footer } from "@/Components";

interface Props {
  children: ReactNode
}

function App( { children: Children }: Props ) {
  return (
    <>
      <Navbar />
      {Children}
      <Footer />
    </>
  );
}
 
export default App;
