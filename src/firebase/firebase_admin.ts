import admin from "firebase-admin"
import serviceAccount from "./serviceAccount.json"

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
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    })
  }

  firebaseInitialized = true
  return admin
}

