import {JSX, JSXElement} from 'solid-js';

interface Props {
  children: JSXElement
}

const MainLayout: (props: Props) => JSX.Element = (props) => {
  
  return (
    <section class="flex justify-center">
      <div class="max-w-screen-lg w-full h-screen p-8 flex justify-center items-center">
        {props.children}
      </div>
    </section>
  )
};

export default MainLayout;
