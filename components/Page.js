import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => (
  <main {...sbEditable(blok)} content={blok}>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
