import { useState, useEffect, useCallback } from "react";
import Contacts from "./Contacts";
import Modal from "./Modal";
import NotificationApi from "./NotificationApi";
import Share from "./Share";
import "./styles.css";
import Vibrate from "./Vibrate";

export default function App() {
  const [show, setShow] = useState(false);

  const logClick = useCallback((e) => {
    console.log(`click from ${e.target}`);
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", logClick, true);
    return () => document.body.removeEventListener("click", logClick);
  }, [logClick]);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show modal</button>
      <Share label="Share" text="Some text to share" title="Share Title" />
      <Contacts label="Select contacts" />
      <NotificationApi />
      <Vibrate pattern={[200, 100, 200]} label="Vibrate" />
      <Modal show={show} onClose={() => setShow(false)} title="Title">
        <>
          <p>Some content</p>
          <p>Some Again</p>
        </>
      </Modal>
    </div>
  );
}
