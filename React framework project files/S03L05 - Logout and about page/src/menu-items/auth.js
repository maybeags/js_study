// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};
const isLoginEnabled = true

const auth = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    // Conditionally include the Login page
    isLoginEnabled
      ? {
          id: 'login1',
          title: 'Login',
          type: 'item',
          url: '/login',
          icon: icons.LoginOutlined,
          target: true
        }
      : // Else condition
        {
          id: 'disabledLogin',
          title: 'Login (Disabled)',
          type: 'item',
          url: '/disabled-login',
          icon: icons.LoginOutlined,
          target: true,
          disabled: true // Add any specific properties for the disabled state
        },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
      disabled: true // Add any specific properties for the disabled state
    }
  ].filter(Boolean) // Remove falsy values (pages with condition false)
};

export default auth;
