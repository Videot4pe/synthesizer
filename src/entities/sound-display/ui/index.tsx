import "../styles/index.scss"
import {onCleanup, onMount} from "solid-js";
import {audioController} from "#/shared/lib/audio-controller/audio-controller";

type SoundDisplayProps = {}

const SoundDisplay = (props: SoundDisplayProps) => {
  let canvasRef: HTMLCanvasElement;
  
  onMount(() => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    const analyserNode = audioController.getAnalyserNode();
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const draw = () => {
      if (!ctx) return
      
      requestAnimationFrame(draw);
      analyserNode.getByteFrequencyData(dataArray);
      
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = `rgb(${barHeight + 100},50,50)`;
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
      }
    };
    
    draw();
  });
  
  onCleanup(() => {
    // Очистка, если необходимо
  });
  
  return (
    <div class="sound-display">
      <canvas ref={canvasRef!} class="w-full h-64 bg-gray-800" />
    </div>
  );
}

export default SoundDisplay;