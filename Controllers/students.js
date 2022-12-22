import { connectToDatabase, getDb } from '../db.js';
let db;
connectToDatabase((err)=>{
    db =getDb();

});


const getStudents =  (req, res) => {
  let ece = [];
  db.collection('ece')
  .find()
  .forEach(element =>  ece.push(element))
  .then(()=>{
  res.send(ece)
}).catch(()=>{
  res.status(500).send('error');
})
};

const getStudent = (req,res) =>{
  db.collection('ece').findOne({regno : req.params.regno})
  .then(result =>{
    if(result === null) res.status(200).send('Stuent Record does not exist');
    res.status(200).send(result);
  })
  .catch(err =>{
    res.status(500).send('error');
  });

};


const createStudent =  (req, res) => {
  const student = req.body

  db.collection('ece').insertOne(student)
  .then(result =>{
    res.send(result)
  })
  .catch(err =>{
    res.send('Error while adding student record');
  })
  
};

const deleteStudent = (req,res) =>{
  db.collection('ece').deleteOne({regno : req.params.regno})
  .then(result =>{
    res.status(200).send(result);
  })
  .catch(err =>{
    res.status(500).send('error');
  });

};

const updateStudent = (req, res) =>{
  const updates = req.body;
  db.collection('ece').updateOne({regno : req.params.regno}, {$set : updates})
  .then(result => {
    res.status(200).send(result);
  })
  .catch(err => {
    res.status(500).send('Unable to update the student record!');
  })

};
export {getStudents,getStudent,createStudent,deleteStudent,updateStudent};

