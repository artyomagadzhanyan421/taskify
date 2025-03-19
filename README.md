# Taskify  

![Static Badge](https://img.shields.io/badge/20.16.0-%236cc24a?label=node)
![Static Badge](https://img.shields.io/badge/19.0.0-deepskyblue?label=react)
![Static Badge](https://img.shields.io/badge/~5.7.2-dodgerblue?label=typescript)
![Static Badge](https://img.shields.io/badge/%5E7.3.0-crimson?label=react-router)
![Static Badge](https://img.shields.io/badge/%5E2.6.1-mediumslateblue?label=%40reduxjs%2Ftoolkit)
![Static Badge](https://img.shields.io/badge/%5E9.2.0-mediumslateblue?label=react-redux)
![Static Badge](https://img.shields.io/badge/%5E3.5.0-blueviolet?label=react-loading-skeleton)

Taskify is a task management application that allows users to create, edit, read, and delete tasks. This is the client-side of the project, built using **React** with **TypeScript** for a seamless and type-safe experience.  

> [!IMPORTANT]  
> Ensure you have the latest versions of [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed before proceeding.

### Features  
- JWT-based authentication (Sign Up, Sign In, Sign Out)  
- CRUD operations for tasks  
- Personalized greeting with the user's name  
- Responsive UI 
- API Integration with [Taskify REST API](https://github.com/artyomagadzhanyan421/rest-api-taskify) (custom hook) 
- Custom error handling and loading states  

### Tech Stack  
- [React](https://github.com/facebook/react.git) + [TypeScript](https://github.com/microsoft/TypeScript.git)
- [Redux Toolkit](https://github.com/reduxjs/redux.git) for state management  
- [React Router](https://github.com/remix-run/react-router.git) for navigation  
- [Vite](https://github.com/vitejs/vite.git) for fast development  
- [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton.git) for loading states
- [Boxicons](https://github.com/atisawd/boxicons.git) for web icons integration

## ⚙️ Installation & Setup

> [!IMPORTANT]  
> Ensure you've cloned [Taskify REST API](https://github.com/artyomagadzhanyan421/rest-api-taskify) repo and successfully launched localhost server first.

Clone the repository:

```sh
git clone https://github.com/artyomagadzhanyan421/taskify.git
cd taskify
```

Install dependencies:

```sh
npm install
```

Create a ```.env``` file and add:

```bash
VITE_TASKIFY_API=http://localhost:5000/
```

Start the application:

```sh
npm run dev
```