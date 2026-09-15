import { CronJob } from 'cron'
import http from 'node:http'
import https from "node:https"

//every 14 mins send GET request to the health endpoint
const job = new CronJob("*/14 * * * *", function () {
    const base = process.env.FRONTEND_URL
    if (!base) return
    const url = new URL('/health', base).href
    const client = url.startsWith('https') ? https : http

    client
        .get(url, (res) => {
            if (res.statusCode === 200) console.log('get request sent')
            else console.log('get req failed', res.statusCode)
        })
        .on('error', (e) => console.error('error while sending request', e))
})

export default job