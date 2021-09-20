import { Menu } from '@headlessui/react';


function MyDropdown() {
  return (
    <Menu>
      <Menu.Button> <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
               
            </span></Menu.Button>
      <Menu.Items>
        <Menu.Item>
        <button
              className={ 'bg-blue-500'}
              href="/account-settings"
            >
              SignIn
            </button>
        </Menu.Item>
        <Menu.Item>
        <button
              className={'bg-blue-500'}
              href="/account-settings"
            >
              SignUp
            </button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default MyDropdown;