import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

admin.initializeApp()
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const getInformation = functions.https.onRequest((request, response) => {
  admin.firestore().collection('developmentResourses').doc('courses').get()
  .then(snapshot =>{
      const datar = snapshot.data()
      response.send(datar)
  })
  .catch(error => {
      console.log(error)
      response.status(500).send('There is an Error ....')
  })
 });

 export const getMasterCats = functions.https.onRequest((request, response)=>{
     admin.firestore().collection('developmentResourses').doc('MasterCats').get()
     .then(snapshot =>{
         const res = snapshot.data()
         response.send(res)
     })
     .catch(error =>{
         console.log(error)
         response.status(500).send('There is an Error ....')
     })
 });

 export const getSubCats = functions.https.onRequest((request, response)=>{
    admin.firestore().collection('developmentResourses').doc('SubCats').get()
    .then(snapshot =>{
        const res = snapshot.data()
        response.send(res)
    })
    .catch(error =>{
        console.log(error)
        response.status(500).send('There is an Error ....')
    })
});