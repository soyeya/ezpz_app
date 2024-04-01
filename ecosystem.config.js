module.exports = {
  apps : [{
    name: 'projectName-dev',
    instances: 1,
    script: 'src/app.js',
    autorestart : false,
    watch: false,
    env: {
      // 환경변수 지정
      Server_PORT: 4000,
      NODE_ENV: 'development',
      Redis_HOST: 'localhost',
      Redis_PORT: 6379,
   },
  }, 
  {
    /* 배포 환경용 서버 */
    name: 'projectName-pd',
    script: 'src/app.js',
    instances: -1, // 클러스터 모드
    autorestart: false,
    watch: false,
    env: {
       Server_PORT: 4000,
       NODE_ENV: 'production',
       Redis_HOST: 'localhost',
       Redis_PORT: 6379,
    },
 },
  {
    script: './service-worker/',
    watch: ['./service-worker']
  },
 
],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
