import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';

import theme from '@theme/index';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
      />
      { fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
