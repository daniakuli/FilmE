import AppNavigator from './Navigator';
import { BASE_URL } from './config';

export default function App() {
    console.log('Server URL:', BASE_URL);
    return (<AppNavigator/>);
}
