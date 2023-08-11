import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.app.base',
  appName: 'ionic-app-base',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
