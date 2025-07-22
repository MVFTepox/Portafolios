import { ReactNode } from "react";
import {  Navbar } from "@/Components";

interface Props {
  children: ReactNode
}

function App( { children: Children }: Props ) {
  return (
    <div className="scroll-hidden">
      
      <Navbar />
      {Children}
      
    </div>
  );
}
 
export default App;
