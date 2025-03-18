# Taskify Frontend  

Taskify is a task management application that allows users to create, edit, read, and delete tasks. This is the client-side of the project, built using **React** with **TypeScript** for a seamless and type-safe experience.  

## Features  
- JWT-based authentication (Sign Up, Sign In, Sign Out)  
- CRUD operations for tasks  
- Personalized greeting with the user's name  
- Responsive UI 
- API Integration with Taskify REST API  
- Custom error handling and loading states  

## Tech Stack  
- React + TypeScript  
- Redux Toolkit for state management  
- React Router for navigation  
- Vite for fast development  

## Pages  
- Sign Up Page — Create a new account  
- Sign In Page — Log in to access tasks  
- Home Page — View tasks and navigate using the Navbar  
- Read Page — View detailed information about a task  
- Edit Page — Edit an existing task  
- Add Page — Create a new task  

## Components
- Navbar — Navigation bar with a sign-out button  
- Tasks — Displays the list of tasks using a responsive grid layout  
- NoTasks - Shows alert message if no tasks were created
- Error — Renders API error messages  
- LoadingTasks — Displays loader component for all tasks  
- LoadingTask - Shows loading state for a single task
- LoadingForm - Lands Skeleton loader to render Edit page information