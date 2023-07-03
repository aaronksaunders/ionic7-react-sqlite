import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.react.sqlite',
  appName: 'ionic-react-sqlite',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
