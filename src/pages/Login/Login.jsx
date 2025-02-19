import  { useState } from 'react';
const Login = () => {
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      window.location.href = "/"
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
if (isLoggedIn) {
  window.location.href = "/admin";
  
   
  } else{
    return (
        <div className="container relative h-[83vh]  mx-auto mt-14 dark:text-white ">
           <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8 dark:bg-gray-900">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="w-auto h-10 mx-auto"
              src="https://anjumanlar.uz/logo.svg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={username}
          onChange={(e) => setUsername(e.target.value)}

                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                    Password
                  </label>
                  <div className="text-sm">
                   
                  </div>
                </div>
                <div className="mt-2">
                  <input
                  
                   id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                 value={password}
          onChange={(e) => setPassword(e.target.value)}

                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-sm text-center text-gray-500">
              Not a member?{"  8"}
              
            </p>
          </div>
        </div>
        </div>
    )

  }  


}

export default Login
