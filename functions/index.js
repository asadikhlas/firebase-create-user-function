const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUser = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  console.log('inside request body', req.body);
  const { email, password, name, gender, uid } = req.body;

  if (!email || !password || !name || !gender) {
    return res.status(400).send('Missing required fields');
  }

  try {
    let userRecord;
    if (uid) {
      userRecord = await admin.auth().createUser({
        uid,
        email,
        password,
      });
    } else {
      userRecord = await admin.auth().createUser({
        email,
        password,
      });
    }

    await admin.firestore().collection('users').doc(userRecord.uid).set({
      name,
      gender,
    });

    return res
      .status(201)
      .send({ message: 'User created successfully', uid: userRecord.uid });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).send({ error: error.message });
  }
});
