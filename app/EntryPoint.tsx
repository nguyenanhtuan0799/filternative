/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React, {useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from './components';
import RootNavigation from './navigation/NavigationStack';
import i18next, {i18nInit} from './utils/i18n';

import vi from './fixtures/Languages/vi.json';
import en from './fixtures/Languages/en.json';

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
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default Entrypoint;
