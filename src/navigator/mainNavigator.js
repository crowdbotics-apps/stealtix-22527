import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList171500Navigator from '../features/ArticleList171500/navigator';
import ArticleList171499Navigator from '../features/ArticleList171499/navigator';
import ArticleList171498Navigator from '../features/ArticleList171498/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList171500: { screen: ArticleList171500Navigator },
ArticleList171499: { screen: ArticleList171499Navigator },
ArticleList171498: { screen: ArticleList171498Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
