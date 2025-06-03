# Setup Guide

This document explains how to install dependencies, configure environment variables, and run the services that make up **FilmE**.

## Prerequisites

- **Node.js** (version 18 or newer recommended)
- **npm** or **yarn**
- Access to Firebase for service credentials
- A MongoDB instance (Mongo Atlas or local)
- Optional: Google Cloud Platform project for emotion recognition

---

## 1. Server

The `Server` directory contains the Node.js backend. It exposes REST APIs for uploads, authentication and reactions.

### Install dependencies

```bash
cd Server
npm install
```

### Environment variables

Create a `.env` file in the `Server` directory containing:

```
PORT=4000
DATABASE_URL=<mongodb connection string>
```

- `DATABASE_URL` should point to your MongoDB database.
- `PORT` is the port where the server will listen (default `4000`).

### Firebase credentials

The server uses Firebase for authentication and storage. Place your Firebase service account JSON as `Server/firebase/serviceAccountKey.json`.
You can generate this file from the Firebase console under *Project Settings → Service Accounts*.

### Run the server

```bash
npm start
```

The server will start on `http://localhost:4000`.

---

## 2. FilmeApp (React Native)

`FilmeApp` is an Expo application. It can run on Android, iOS or web.

### Install dependencies

```bash
cd FilmeApp
npm install
```

### Start the app

Use the Expo CLI to run the application:

```bash
npm start
```

Follow the on-screen instructions to launch it on a simulator, device or in the browser.

No additional environment variables are required for development.

---

## 3. emotionRecognition

This service exposes an API that detects emotions in images using Google Cloud Vision.

### Install dependencies

```bash
cd emotionRecognition
npm install
```

### Google credentials

Obtain a Google Cloud service account JSON with access to the Vision API. Save the file as `emotionRecognition/credentials.json`.

Set the following environment variable before starting the service:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=./credentials.json
```

### Run the service

```bash
npm start
```

The service listens on port `3001` by default.

---

## Running all services

Start each component in a separate terminal or process using the instructions above. Ensure MongoDB and Firebase credentials are correctly configured. Once all services are running you can interact with the FilmE application via the mobile app or by sending requests directly to the server APIs.

