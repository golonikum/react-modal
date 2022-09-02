function Share({ label, text, title }) {
  const shareDetails = { title, text };

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareDetails).then(() => console.log("Sent"));
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };
  return navigator.share ? (
    <button onClick={handleSharing}>
      <span>{label}</span>
    </button>
  ) : null;
}
export default Share;
