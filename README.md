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
- MySQL

### Backend Setup

1. Clone the repository:
git clone https://github.com/your-username/tradesman-connect.git

2. Navigate to the backend directory:
   cd tradesman-connect/nestjs-backend

3. Install dependencies:
   npm install

4. Set up your environment variables by creating a `.env` file based on `.env.example`.

5. Run database migrations:
   npm run migration:run

6. Start the development server:
   npm run start:dev

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

### Backend (NestJS)


