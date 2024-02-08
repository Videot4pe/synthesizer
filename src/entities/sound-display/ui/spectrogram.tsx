import "../styles/index.scss"
import {onCleanup, onMount} from "solid-js";
import Tone from "tone";
import {synthesizerEngine} from "#/shared/lib/synthesizer-engine";

type SoundDisplayProps = {}

const Spectrogram = (props: SoundDisplayProps) => {
  let canvasRef: HTMLCanvasElement;
  let animationFrameId: number;
  
  const draw = (fft: FFT, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const bufferLength = fft.size;
    const dataArray = fft.getValue() as Float32Array;
    const imageData = ctx.getImageData(1, 0, 800 - 1, 400);
    ctx.putImageData(imageData, 0, 0);
    
    // Рисуем новую вертикальную полосу на основе последних данных FFT
    for (let i = 0; i < dataArray.length / 2; i++) {
      const value = dataArray[i];
      const normalized = (value + 140) / 140;
      const color = normalized * 255;
      ctx.fillStyle = `rgb(0, ${color}, 0)`;
      ctx.fillRect(800 - 1, 400 - i, 1, 1);
    }
    
    animationFrameId = requestAnimationFrame(() => draw(fft, ctx, canvas));
  };
  onMount(() => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 800, 400);
      draw(synthesizerEngine.getFft(), ctx, canvas);
    }
  });
  
  onCleanup(() => {
    cancelAnimationFrame(animationFrameId);
  });
  
  return (
    <canvas ref={canvasRef!} class="w-full h-64 bg-gray-800" width={800} height={400} />
  );
}

export default Spectrogram;