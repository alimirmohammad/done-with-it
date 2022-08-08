import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import routes from "./routes";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen name={routes.LOGIN} component={LoginScreen} />
    <AuthStack.Screen name={routes.REGISTER} component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
