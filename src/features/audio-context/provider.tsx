import { AudioContext } from "./context"

type AudioContextProviderProps = {
  context: any;
  children: any;
}

const AudioContextProvider = (props: AudioContextProviderProps) => {
  return (
    <AudioContext.Provider value={props.context}>
      { props.children }
    </AudioContext.Provider>
  )
}