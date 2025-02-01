import { useState } from "react";
import Editor from "./components/editor";
import Previewer from "./components/previewer";
import { markdownString } from "./mop-markdown";

function App() {
  const [text, setText] = useState(markdownString);

  return (
    <>
      <main style={{}}>
        <Editor
          text={text}
          inputTextArea={(inputValue) => setText(inputValue)}
        />
        <Previewer markdown={text.trim()} />
      </main>
    </>
  );
}

export default App;
