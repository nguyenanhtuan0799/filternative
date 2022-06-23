/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from './components';
import RootStack from './navigation/NavigationStack';
import i18next, {i18nInit} from './utils/i18n';
import {store} from './redux/store';
import vi from './fixtures/Languages/vi.json';
import en from './fixtures/Languages/en.json';
import {SafeAreaView} from 'react-native';

const languages = {
  vi,
  en,
};

const Entrypoint = () => {
  useEffect(() => {
    const onBeforeLift = async () => {
      await i18nInit(languages);
    };
    onBeforeLift();
  }, []);
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider>
          <SafeAreaProvider>
            <RootStack />
          </SafeAreaProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default Entrypoint;
