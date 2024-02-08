import Synthesizer from "#/widgets/synthesizer/ui";
import { JSX } from "solid-js";

export const SynthesizerPage: () => JSX.Element = () => {
  
  return (
    <section class="flex justify-center">
      <div class="max-w-screen-lg w-full h-screen p-8 flex justify-center items-center">
        <Synthesizer />
      </div>
    </section>
  )
};