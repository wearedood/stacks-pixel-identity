import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

function connectWallet() {
  showConnect({
    appDetails: {
      name: 'Stacks Identity',
      icon: window.location.origin + '/logo.png',
    },
    userSession,
    onFinish: () => {
      // handle after connect
    },
    onCancel: () => {
      console.log('User cancelled');
    },
  });
}export default App;
