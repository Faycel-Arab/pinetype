import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const getNoteById = 
functions.https.onRequest(async (request, response) => {
    const noteId = request.query?.noteId || "none";
    try {
        const snapshot = await admin.firestore().doc(`notes/${noteId}`).get()
        const data: = snapshot.data();
        response.send(data);
    }
    catch(error){
        console.log(error);
        response.status(500).send(error)
    }
});

export const getAllNotes = 
functions.https.onRequest(async (request, response) => {
    try {
        const snapshot = await admin.firestore().collection("/notes").get();
        const data = snapshot.docs;
        response.send(data);
    }
    catch(error){
        console.log(error);
        response.status(500).send(error)
    }
});
