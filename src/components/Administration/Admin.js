/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {io} from 'socket.io-client';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from '@components/Loading';
import CustomDrawerItems from '@components/CustomDrawerItems';
import UsersContainer from './users/UsersContainer';
import CommandsContainer from './Commands/CommandsContainer';
import {API_HOSTA} from '@env';
import {NotificationContext} from '@components/contexts/NotificationProvider';
import {fetchNotificationCount} from '@apis/users';
import NotificationScreen from '@components/NotificationScreen';
import AddUserContainer from './users/addUser/AddUserContainer';
import UserContainer from './users/user/UserContainer';
import {UsersContext} from '@components/contexts/Users';
import {ProductsContext} from '@components/contexts/ProductsProvider';
import ProductsContainer from './products/ProductsContainer';
import ProductContainer from './products/product/ProductContainer';
import {CategoryProvider} from '@components/contexts/CategoryProduct';
import AddProductContainer from './products/product/addProduct/AddProductContainer';
import EditProductContainer from './products/product/editProduct/EditProductContainer';
import AddCodesContainer from './products/product/addCodes/AddCodesContainer';
import AddServiceContainer from './products/addService/AddServiceContainer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// ---------------------- Users ------------------------------------------

const Users = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    }}>
    <Stack.Screen
      options={{headerShown: false}}
      name="UsersScreen"
      component={UsersContainer}
    />
    <Stack.Screen
      options={{title: 'إضافة عميل'}}
      name="AddUserScreen"
      component={AddUserContainer}
    />
    <Stack.Screen
      options={({route}) => ({title: route.params.title})}
      name="UserScreen"
      component={UserContainer}
    />
  </Stack.Navigator>
);

// ---------------------- Products ------------------------------------------

const Products = () => (
  <CategoryProvider>
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen options={{headerShown: false}} name="ProductsScreen">
        {props => <ProductsContainer {...props} />}
      </Stack.Screen>
      <Stack.Screen name="AddServiceScreen">
        {props => <AddServiceContainer {...props} />}
      </Stack.Screen>
      <Stack.Screen
        options={({route}) => ({title: route.params.serviceName})}
        name="ProductScreen">
        {props => <ProductContainer {...props} />}
      </Stack.Screen>
      <Stack.Screen options={{title: 'إضافة صنف'}} name="AddProductScreen">
        {props => <AddProductContainer {...props} />}
      </Stack.Screen>
      <Stack.Screen options={{title: 'تعديل الصنف'}} name="EditProductScreen">
        {props => <EditProductContainer {...props} />}
      </Stack.Screen>
      <Stack.Screen options={{title: 'إضافة أكواد'}} name="AddCodesScreen">
        {props => <AddCodesContainer {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </CategoryProvider>
);

// ---------------------- DrawerScreens ------------------------------------------

const DrawerScreens = ({logout, currentUser, profilePic}) => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#222',
    }}
    drawerPosition="right"
    drawerType={'back'}
    drawerContent={props => {
      return (
        <CustomDrawerItems
          {...props}
          logout={logout}
          currentUser={currentUser}
          profilePic={profilePic}
        />
      );
    }}>
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Commands" component={CommandsContainer} />
    <Drawer.Screen name="Products">
      {props => <Products {...props} />}
    </Drawer.Screen>
  </Drawer.Navigator>
);

// ---------------------- Admin ------------------------------------------

const Admin = ({
  loading,
  logoutrequest,
  currentUser,
  profilePic,
  fetchUsersFinished,
  fetchProductsFinished,
}) => {
  const [usersState, usersDispatch] = useContext(UsersContext);
  const [productsState, productsDispatch] = useContext(ProductsContext);

  const [notificationStat, notificationDispatch] =
    useContext(NotificationContext);

  useEffect(() => {
    try {
      const socket = io(`${API_HOSTA}/orderCommands`);
      socket.on('connect', () => {
        console.log(notificationStat);
        socket.on('send_command_order', (notifications, notificationCount) => {
          notificationDispatch({
            type: 'ADD',
            payload: {notifications, notificationCount},
          });
        });
      });
      return () => socket.disconnect();
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    (async () => {
      try {
        await fetchNotificationCount(notificationDispatch);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    fetchUsersFinished();
    usersDispatch({type: 'END'});
    logoutrequest();
    fetchProductsFinished();
    productsDispatch({type: 'END', payload: {label: 'topupProducts'}});
    productsDispatch({type: 'END', payload: {label: 'codeProducts'}});
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerScreens">
        {props => (
          <DrawerScreens
            {...props}
            logout={logout}
            currentUser={currentUser}
            profilePic={profilePic}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: true, title: 'Notifications'}}
      />
    </Stack.Navigator>
  );
};

export default Admin;
