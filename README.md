# User Admin Portal UI

A modern React-based User Administration Portal that provides secure authentication, role-based access control, user management, and profile management. The application integrates with an ASP.NET Core Web API and uses JWT authentication stored in secure cookies.

## Features

### Authentication & Authorization

* User Registration
* User Login
* User Logout
* JWT-based Authentication
* Cookie-based Token Storage
* Protected Routes
* Automatic Authentication State Management
Role-Based Authorization

### User Management

* View All Users
* View User Details
* Update User Information
* Delete Users
* Role-Based UI Rendering

### Profile Management

* View Profile Information
* Edit Profile Details
* Secure Access to Profile Data

### Dashboard

* User Dashboard
* Navigation Sidebar
* Responsive Layout
* Role-Aware User Interface

---

## Technology Stack

### Frontend

* React
* React Router DOM
* Axios
* CSS

### Authentication

* JWT Authentication
* HttpOnly Cookies
* Role-Based Access Control (RBAC)

---

## Project Structure

```text
src
├── components
│   ├── Header
│   ├── Sidebar
│   ├── ProtectedRoute
│   └── Layout
│
├── pages
│   ├── Login
│   ├── Register
│   ├── Dashboard
│   ├── Users
│   ├── UserDetails
│   ├── EditUser
│   └── Profile
│
├── services
│   ├── authService
│   └── userService
│
├── routes
│
├── utils
│
└── App.jsx
```

---

## Authentication Flow

### Login

```text
User Login
    ↓
Backend Validates Credentials
    ↓
JWT Token Generated
    ↓
Token Stored in Secure Cookie
    ↓
User Redirected to Dashboard
```

### Protected API Calls

```text
Browser
    ↓
Cookie Sent Automatically
    ↓
ASP.NET Core API
    ↓
JWT Validation
    ↓
Authorized Response
```

### Logout

```text
User Clicks Logout
    ↓
Cookie Removed
    ↓
Authentication State Cleared
    ↓
Redirect to Login Page
```

---

## Role-Based UI

The application dynamically renders UI elements based on the authenticated user's role.

### Admin

* View Users
* View User Details
* Update Users
* Delete Users
* Access Administrative Features

### User

* Access Dashboard
* View Profile
* Update Personal Information

Example:

```text
Admin User
    ↓
Dashboard
    ↓
Users Page
    ↓
View / Update / Delete Actions
```

---

## Cookie-Based Authentication

Authentication tokens are stored in secure cookies instead of browser storage.

### Benefits

* Improved Security
* Reduced XSS Risk
* Automatic Cookie Transmission
* Simplified Authentication Flow
* Better Session Management

```text
Browser Cookie
    ↓
Automatically Included
    ↓
API Request
    ↓
JWT Validation
```

---

## User Interface

### Main Layout

* Top Navigation Bar
* Sidebar Navigation
* Dashboard Content Area
* User Management Table
* Profile Management Section

### Navigation Menu

* Dashboard
* Users
* Profile
* Logout

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

or

```bash
npm start
```

### Build Production Version

```bash
npm run build
```

---

## Security Features

* JWT Authentication
* Cookie-Based Token Storage
* Protected Routes
* Role-Based Authorization
* Secure Logout Flow
* Authentication State Validation
* Unauthorized Access Prevention

---

## API Integration

The frontend communicates with an ASP.NET Core Web API for:

* Authentication
* User Registration
* User Management
* Profile Operations
* Authorization Validation

---

## Learning Outcomes

This project demonstrates:

* React Application Architecture
* JWT Authentication
* Cookie-Based Authentication
* Role-Based Access Control (RBAC)
* Protected Routing
* API Integration using Axios
* State Management
* User Management Workflows
* Secure Frontend Development Practices
