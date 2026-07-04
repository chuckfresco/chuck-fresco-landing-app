import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

import AOS from 'aos';

export const useDarkMode = () => {
  const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('themeMode', 'dark');
    setMountedComponent(true);
    AOS.refresh();
  }, []);

  return ['dark', () => {}, mountedComponent];
};


export default function WithLayout({ component: Component, layout: Layout, ...rest }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.e
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent]);

  if (!mountedComponent) return null;

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout themeMode={themeMode} themeToggler={themeToggler}>
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
