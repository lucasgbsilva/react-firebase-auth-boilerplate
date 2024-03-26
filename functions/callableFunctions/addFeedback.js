const functions = require("firebase-functions");
const admin = require("firebase-admin");

if (admin.apps.length === 0){
    admin.initializeApp();
}
const db = admin.firestore();

exports.submitUserFeedback = functions.https.onCall(async (data, context) => {
if (!data || !context.auth){
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing required fields: data object and/or user ID."
    );
}
try{
    const {subject, description} = data;
    const docRef = db.doc(`user/${context.auth.uid}`);
    const newData = {subject: subject.trim(50), description: description.trim(500)};
    await docRef.set(newData);

    return{
        sucess: true,
    };
} catch(error){
    console.error("Error calling myFunction:", error);
    throw new functions.https.HttpsError("internal", "Internal server error.");
}

});