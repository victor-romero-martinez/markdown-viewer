import { marked } from "marked";
import MarkdownIcon from "./icons/markdown-icon";
import ToggleIcon from "./icons/toggle-icon";
import Wrapper from "./wrapper";

export default function Previewer({ markdown }: { markdown: string }) {
  return (
    <>
      <Wrapper
        label="Preview"
        icon={<MarkdownIcon />}
        toggleIcon={<ToggleIcon direction="left" />}
      >
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { breaks: true }),
          }}
        ></div>
      </Wrapper>
    </>
  );
}
