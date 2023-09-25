import mongoose from 'mongoose'

mongoose.connection.on('error', err => {
	console.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
	console.log('DbConnection Successful')
})

mongoose.set('strictQuery', false)

class DbConnection {

	constructor() {
		this.connected = false
	}

	async connect(connectionstring = process.env.MONGODB_URL || '') {
		if (this.connected) {
			console.log("Already Connected");
			return
		}

		const status = 0
		try {
			if (!connectionstring) {
				return console.warn('Db not available, no CONNECTION_STRING')
			}
			const status = await mongoose.connect(connectionstring)
			console.log('[CONNECTION TO DB SUCCESSFUL]')
			this.connected = true;
			return status
		} catch (e) {
			console.error(
				'[MONGOOSE CONNECTION ERROR]:',
				'Invalid connection string'
			)
			return status
		}
	}
}

export const dbConnection = new DbConnection();