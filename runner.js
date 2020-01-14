const { exec } = require('child_process')

const type = process.argv.pop()

if (type === 'api') exec('php -S localhost:8080 -t api/public')
if (type === 'client') exec('npm run dev --prefix client')
