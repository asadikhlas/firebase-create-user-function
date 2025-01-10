# Firebase Cloud Function: `createUser`

This project contains a Firebase Cloud Function named `createUser`. This function creates a user in Firebase Authentication and stores additional details in Firestore.

## Functionality

The `createUser` function accepts the following inputs:

- `email` (string)
- `password` (string)
- `name` (string)
- `gender` (string)
- `uid` (string, optional)

The function performs the following tasks:

1. Creates a user in Firebase Authentication.
2. Stores the user's `name` and `gender` in the `users` Firestore collection.
3. Uses the UID of the newly created user as the Firestore document ID.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Make sure you have Node.js installed (version 18 or higher).
- **Firebase CLI**: If not already installed, install the Firebase CLI globally:

  ```bash
  npm install -g firebase-tools
  ```

## Functionality

Follow these steps to deploy the createUser function to Firebase:

1. Clone the Repository
   Clone the project repository to your local machine:

```bash
 git clone https://github.com/asadikhlas/firebase-create-user-function
 cd firebase-create-user-function
```

2. Install Dependencies
   Navigate to the functions directory and install the necessary dependencies:

```bash
  cd functions
  npm install
```

3. Deploy the Function
   Deploy the createUser function to Firebase using the following command:

```bash
  firebase deploy
```

This will upload and deploy the createUser function to Firebase.

## Testing the Function

### Using cURL

Once the function is deployed, you can test it using cURL. Replace <YOUR_REGION> with your firebase region <YOUR_PROJECT_ID> with your actual Firebase project ID:

```bash
  curl --location 'https://<YOUR_REGION>-<YOUR_PROJECT_ID>.cloudfunctions.net/createUser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.com",
    "password": "password123",
    "name": "Test User",
    "gender": "Male"
    }'
```

This will send a POST request to the createUser function with the provided input parameters.
