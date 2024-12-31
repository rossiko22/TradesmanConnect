# TradesmanConnect

TradesmanConnect is a full-stack web application that connects tradesmen with potential clients. It consists of a NestJS backend API and an Angular frontend.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
5. [Project Structure](#project-structure)
6. [API Endpoints](#api-endpoints)
7. [Frontend Components](#frontend-components)
8. [Contributing](#contributing)
9. [License](#license)

## Overview

TradesmanConnect facilitates the connection between skilled tradesmen and clients seeking their services. The platform allows tradesmen to create profiles, list their services, and manage their availability. Clients can search for services, view tradesman profiles, and book appointments.

## Features

- User authentication (login/register) for both tradesmen and clients
- Service creation and management for tradesmen
- Service search and filtering for clients
- Multilingual support
- Responsive design for mobile and desktop

## Tech Stack

- **Backend:**
  - NestJS(10.4.9)
  - TypeORM(^0.3.20)
  - MySQL

- **Frontend:**
  - Angular(19.0.6)
  - Тypescript(~5.6.2)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MySQL(8.0.35)

### Backend Setup

1. Clone the repository:
git clone https://github.com/rossiko22/TradesmanConnect.git

2. Navigate to the backend directory:
   cd tradesman-connect/nestjs-backend

3. Install dependencies:
   npm install
   
5. Start the development server:
   nest start
   
The backend should now be running on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend directory:
   cd ../angular-frontend

2. Install dependencies:
   npm install

3. Start the development server:
   ng serve

The frontend should now be accessible at `http://localhost:4200`.

## Project Structure

### Frontend (Angular)

## Project File Structure

The project consists of the following main sections:

- **src/** - The source code of the application.
  - **app/** - The core application files.
    - **app.component.ts** - Main app component logic.
    - **app.component.html** - Main app component template.
    - **app.component.css** - Styles for the main app component.
    - **app.config.ts** - Configuration file for the app.
    - **app.routes.ts** - Route definitions for navigation.
    - **about-us/** - Folder for the About Us page.
    - **chooselanguage/** - Folder for the language selection page.
    - **choosesservice/** - Folder for the service selection page.
    - **contact-page/** - Folder for the Contact page.
    - **create-service/** - Folder for the Create Service page.
    - **dashboard/** - Folder for the Dashboard page.
    - **loginregister/** - Folder for the Login/Register page.
    - **services-page/** - Folder for the Services page.
    - **services/** - Folder for handling services-related content.
    - **shared/** - Folder for shared components or services.

- **assets/** - Folder for static resources like images and translations.
  - **i18n/** - Folder for internationalization (translations).

- **index.html** - The main HTML file for the app.

Based on the observed file structure, the following routes likely exist:

- `/` - Redirects to `/choose-language`
- `/dashboard` - Dashboard page
- `/about-us` - About Us page
- `/choose-language` - Language selection page
- `/choose-service` - Choose a service page
- `/contact` - Contact page
- `/create-service` - Create a new service page
- `/login-register` - Login/Register page
- `/services` - Services page



