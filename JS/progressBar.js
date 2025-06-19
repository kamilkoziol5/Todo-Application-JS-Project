export function startProgressBar(
  progressBarElement,
  duration = 10000,
  onComplete = () => {}
) {
  const interval = 10;
  let elapsed = 0;

  const progressInterval = setInterval(() => {
    elapsed += interval;
    const percent = Math.min((elapsed / duration) * 100, 100);
    progressBarElement.style.width = `${percent}%`;

    if (elapsed >= duration) {
      clearInterval(progressInterval);
      onComplete();
    }
  }, interval);

  return () => clearInterval(progressInterval); 
}
