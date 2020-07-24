import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY ,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID ,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.FIREBASE_APP_ID
  };
firebase.initializeApp(firebaseConfig);

const database=firebase.database();

const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default };

// firebase.database().ref('expenses').push({
//     desciption:'rent',
//     note:'',
//     amount:1456,
//     createdAt:2424242424
// })
// firebase.database().ref('expenses').push({
//     desciption:'phone bill',
//     note:'',
//     amount:146,
//     createdAt:2424242524
// })
// firebase.database().ref('expenses').push({
//     desciption:'food',
//     note:'',
//     amount:14,
//     createdAt:2664242424
// })

// firebase.database().ref('expenses ').once('value').then((snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// firebase.database().ref('notes').push({
//     title:"course topics",
//     body:'c,c++,java,python'
// })



// firebase.database().ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// },(e)=>{
//     console.log(e)
// })

// firebase.database().ref().off('value',onValueChange);
// firebase.database().ref().set({
//     name:'VINAYAK'
// })

// firebase.database().ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// })

// firebase.database().ref('location').once('value').then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//     console.log('error in fetching')
// });

// firebase.database().ref().set({
//     name:'vinayak',
//     age:20,
//     isSingle:true,
//     location:{
//         city:"dapagalmakki",
//         country:"india"
//     }
// }).then(()=>{
//     console.log("data saved");
// }).catch((error)=>{
//     console.log("error occured",error);
// });
// firebase.database().ref('attributes').set({
//     height:170,
//     weight:61
// }).then(()=>{
//     console.log("saved");
// }).catch(()=>{
//     console.log("error");
// })

// firebase.database().ref('isSingle').remove().then(()=>{
//     console.log("removed the is Single");
// }).catch(()=>{
//     console.log("error");
// })