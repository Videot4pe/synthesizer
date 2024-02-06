import "../styles/index.scss"
import {onCleanup, onMount} from "solid-js";
import Tone from "tone";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

type SoundDisplayProps = {}

const Waveform = (props: SoundDisplayProps) => {
  let canvasRef: HTMLCanvasElement;
  let animationFrameId: number;
  
  const draw = (analyser: Tone.Analyser, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const bufferLength = analyser.size;
    const dataArray = analyser.getValue() as Float32Array;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистить холст перед новой отрисовкой
    
    const sliceWidth = canvas.width / bufferLength;
    let x = 0;
    
    ctx.beginPath();
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i]; // Уменьшаем амплитуду для визуализации
      const y = canvas.height / 2 + v * canvas.height / 2;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      x += sliceWidth;
    }
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgb(255, 0, 0)');
    gradient.addColorStop(0.5, 'rgb(0, 255, 0)');
    gradient.addColorStop(1, 'rgb(0, 0, 255)');
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = gradient;
    ctx.stroke();
    
    animationFrameId = requestAnimationFrame(() => draw(analyser, ctx, canvas));
  };
  
  onMount(() => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      draw(synthesizerEngine.getAnalyser(), ctx, canvas);
    }
  });
  
  onCleanup(() => {
    cancelAnimationFrame(animationFrameId);
  });
  
  return (
    <canvas ref={canvasRef!} class="w-full h-64 bg-gray-800" />
  );
}

export default Waveform;