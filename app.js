const fs=require('fs');
const express=require('express'); 
const morgan=require('morgan');

const tourRouter=require('./routes/tourRouter');
const userRouter=require('./routes/userRouter');
const app=express();
//middleware
app.use(express.json())

app.use(morgan('dev'))


const getAllUsers=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
}
/*
app.get('/api/v1/tours',getAllTours)
app.get('/api/v1/tours/:id',getTour);

app.post('/api/v1/tours',createTour);
app.patch('/api/v1/tours/:id',updateTour)

app.delete('/api/v1/tours/:id',deleteTour);
*/
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

const port=3000;
app.listen(port,()=>{
    console.log('Server is running at port 300');
})