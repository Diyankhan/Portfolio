import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useState } from "react";
import axios from "axios";
import Notification from "./Notification";
function Contact() {
  let [loading, setLoading] = useState(false);
  let [showNoti, setShowNoti] = useState(false);
  let [msg, setMsg] = useState("");
  let [notiColor, setNotiColor] = useState(false);

  const sendMessage = async (data) => {
    try {
      setLoading(true);
      await axios.post("https://portfolio-73tn.onrender.com/contact", {
        name: data.firstName,
        lastName: data.lastName,
        mail: data.mail,
        msg: data.message,
        sub: data.subject,
      });
      setMsg("Mail sent successfully");
      setShowNoti(true);
      setNotiColor(true);
    } catch (err) {
      setShowNoti(true);
      setNotiColor(false);
      setMsg(err.response.data.message);
    } finally {
      setTimeout(() => {
        setShowNoti(false);
      }, 5000);
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-10 col-md-8 mx-auto">
          <h3>
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </h3>
          <div className="row">
            <Notification
              showNoti={showNoti}
              msg={msg}
              setShowNoti={setShowNoti}
              notiColor={notiColor}
            />
            <ContactForm loading={loading} onSubmitData={sendMessage} />
            <ContactInfo loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
