module.exports = {
  apps: [{
    name: 'hf-race-web',
    script: 'build/main.js',
    env: {
      NODE_ENV: 'development',
      _ENV: 'development'
    },
    env_uat: {
      NODE_ENV: 'uat',
      _ENV: 'uat'
    },
    env_production: {
      NODE_ENV: 'production',
      _ENV: 'production'
    }
  }]
}
