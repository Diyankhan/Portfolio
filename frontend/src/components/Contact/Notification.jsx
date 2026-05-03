import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
function Notification({ showNoti, msg, setShowNoti, notiColor }) {
  let [count, setCount] = useState(5);
  useEffect(() => {
    if (!showNoti) return;

    setCount(5);
    let timer = setInterval(() => {
      setCount((prev) => {
        console.log(prev);
        if (prev < 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showNoti]);

  return (
    <AnimatePresence>
      {showNoti && (
        <motion.div
          className="modal d-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key="modal"
          exit={{ opacity: 0 }}
          style={{ backgroundColor: "rgba(21, 20, 20, 0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-light">
              <div className="modal-header">
                <h5 className="modal-title text-dark">Closing in {count} </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowNoti(false)}></button>
              </div>
              <div className="modal-body">
                <p className={`${notiColor ? "text-primary" : "text-danger"}`}>
                  {msg}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowNoti(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;
