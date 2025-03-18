# Taskify  

![Static Badge](https://img.shields.io/badge/20.16.0-%236cc24a?label=node)
![Static Badge](https://img.shields.io/badge/19.0.0-deepskyblue?label=react)
![Static Badge](https://img.shields.io/badge/~5.7.2-dodgerblue?label=typescript)

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

## 📂 Pages & Components

Some components and routes, for example ```/``` (home), ```/edit/:id```, or ```/read/:id```, are only accessible to authenticated users. When a user signs in, the server generates a JWT and sends it back to the client. The token is then stored in ```localStorage```.

### Pages  
- SignUp - Create a new account  
- SignIn - Log in to access tasks  
- Home - View tasks and navigate using the Navbar  
- Read - View detailed information about a task  
- Edit - Edit an existing task  
- Add - Create a new task  

### Components
- Navbar - Navigation bar with a sign-out button  
- Tasks - The list of tasks using a responsive grid layout  
- NoTasks - Shows alert message if no tasks were created
- Error - Renders API error messages  
- LoadingTasks - Displays loader component for all tasks  
- LoadingTask - Loading state for a single task
- LoadingForm - Skeleton loader to render Edit page information 

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