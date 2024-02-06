export const mapValue = (
  value: number,
  min: number,
  max: number,
  rotationMin: number,
  rotationMax: number
): number => {
  // Проверяем, не выходит ли значение за пределы исходного диапазона
  if (value < min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  
  // Вычисляем, как далеко (в процентах) находится значение в исходном диапазоне
  const percentage = (value - min) / (max - min);
  
  // Преобразуем этот процент в значение в целевом диапазоне
  const newValue = rotationMin + percentage * (rotationMax - rotationMin);
  
  return newValue;
}