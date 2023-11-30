// export const initOTPless = () => {

//     const otplessInit = Reflect.get(window, 'otplessInit');

//     const loadScript = () =>{
//         const script = document.createElement("script")
//         script.src = "https://otpless.com/auth.js";
//         script.id = "otplessIdScript";
//         document.body.appendChild(script)
//     }

//     if (otplessInit) {
//         otplessInit()
//     }
//     else {
//         loadScript()
//     }

//     window.otpless = (otplessUser) => {
//         const currentURL = window.location.href;
//         const urlWithoutParams = currentURL.split("?")[0];
//         window.history.pushState(null, "", urlWithoutParams);
//         alert("OTPLESS DATA :"+JSON.stringify(otplessUser))
//         window.location.href = '/dashboard';
//     };
// }


// initOTPless.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const initOTPless = () => {
  const otplessInit = Reflect.get(window, 'otplessInit');

  const loadScript = () => {
    const script = document.createElement('script');
    script.src = 'https://otpless.com/auth.js';
    script.id = 'otplessIdScript';
    document.body.appendChild(script);
  };

  if (otplessInit) {
    otplessInit();
  } else {
    loadScript();
  }

  window.otpless = (otplessUser) => {
    const currentURL = window.location.href;
    const urlWithoutParams = currentURL.split('?')[0];
    window.history.pushState(null, '', urlWithoutParams);

    // Show toast notification instead of alert
    toast.success('OTPLESS DATA :' + JSON.stringify(otplessUser), {
        position: "top-center",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    // Redirect to '/dashboard' with state
    history.push('/dashboard', { otplessUser });
  };
};
