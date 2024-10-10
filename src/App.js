import { useEffect, useState } from "react";
import './App.css';
import { onMessageListener, requestFCMToken } from "./utils/firebaseUtils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const fetchFCMToken = async () => {
      try {
        const token = await requestFCMToken();
        setFcmToken(token);
      } catch (err) {
        console.error("Error getting FCM Token: ", err);
      }
    };
    fetchFCMToken();
  }, []);

  onMessageListener()
  .then(payload =>{
    toast(
      <div>
        <strong>{payload.notification.title}</strong>
        <br />
        <br />
        <strong>{payload.notification.body}</strong>
      </div>,
      {position:"top-right"}
    )
    console.log("Received foreground message",payload);
  }).catch(err => console.error("error: ", err))

  return (
   <>
   <ToastContainer/>
   <div className="container firebase-form p-4">
    <div className="row">
      { fcmToken && (
        <div className="col-md-12 mb-4">
          <div className="alert alert-info">
            <strong>FCM Token:</strong> {fcmToken}
          </div>
        </div>
      )}
    </div>
   </div>
   </>
  );
}

export default App;