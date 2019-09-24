const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(
    () => console.log('DB Connction is done...'),
    (err) => console.log('DB Connection is failed due to -', err)
  );

const courseSchema = mongoose.Schema({
  tags:[String],
  date: {type: Date},
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses(){
  return await Course.find({isPublished: true, tags: 'backend'})
    .sort({name: 1})
    .select({name: 1, author: 1});
}

async function displayCourse(){
  const course = await getCourses();
  console.log(course);
}

displayCourse();