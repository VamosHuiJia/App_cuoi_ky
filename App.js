import AppNavigator from './navigation/AppNavigator';
import { AppProvider } from './components/AppContext';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
