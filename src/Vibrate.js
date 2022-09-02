export default function Vibrate({ label, pattern }) {
  function handleVibrate() {
    navigator.vibrate(pattern);
  }

  return navigator.vibrate ? (
    <button onClick={handleVibrate}>
      <span>{label}</span>
    </button>
  ) : null;
}
