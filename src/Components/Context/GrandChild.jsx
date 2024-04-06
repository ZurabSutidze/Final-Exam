import React, { useContext } from "react";
import { Context } from "./Parent";
export default function ContextPNT() {
  const { setInput } = useContext(Context);
  return (
    <div>
      <div>Child</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}
