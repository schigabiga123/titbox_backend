import admin from "firebase-admin"

let firebaseInitialized = false

export function ensureFirebaseAdminInitialized() {
  if (firebaseInitialized) {
    return admin
  }

  if (admin.apps.length > 0) {
    firebaseInitialized = true
    return admin
  }

  const rawServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON

  if (rawServiceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(rawServiceAccount) as admin.ServiceAccount),
    })
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    })
  } else {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    })
  }

  firebaseInitialized = true
  return admin
}

