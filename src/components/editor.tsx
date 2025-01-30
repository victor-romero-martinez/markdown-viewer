import CodeIcon from "./icons/code-icon";
import ToggleIcon from "./icons/toggle-icon";
import Wrapper from "./wrapper";

interface Props {
  text: string;
  inputTextArea: (arg: string) => void;
}

export default function Editor({ text, inputTextArea }: Props) {
  return (
    <>
      <Wrapper
        icon={<CodeIcon />}
        label="Editor"
        toggleIcon={<ToggleIcon direction="right" />}
      >
        <textarea
          name="editor"
          id="editor"
          title="Code editor"
          value={text}
          onChange={(e) => inputTextArea(e.target.value)}
        ></textarea>
      </Wrapper>
    </>
  );
}
