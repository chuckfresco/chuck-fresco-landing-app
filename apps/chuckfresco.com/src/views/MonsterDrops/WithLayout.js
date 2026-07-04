import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme'; // make sure this returns a dark theme when given 'dark'
import AOS from 'aos';

export default function WithLayout({ component: Component, layout: Layout, ...rest }) {
  useEffect(() => {
    // Remove server-side injected CSS
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

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={getTheme('dark')}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout themeMode="dark">
          <Component themeMode="dark" {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
