import mongoose from 'mongoose'

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI

        if(!mongoUri){throw new Error('Mongo uri is required')}

        const conn = await mongoose.connect(mongoUri)

        console.log("MongoDb connected", conn.connection.host)

    } catch (error) {
        console.error('MongoDb conn error:', error.message)
        process.exit(1)
    } // 1 failed, 0 success
}