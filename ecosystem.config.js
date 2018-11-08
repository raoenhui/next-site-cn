module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      // key: "/path/to/some.pem",
      // SSH user
      user: "root",
      // SSH host
      host: ["47.98.138.195"],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/master",
      // GIT remote
      repo: "git@github.com:raoenhui/next-site-cn.git",
      // path in the server
      path: "/ice/test",
      // Pre-setup command or path to a script on your local machine
      "pre-setup": "echo 'This is a pre-setup command'",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      "post-setup": "ls -la",
      // pre-deploy action
      "pre-deploy-local": "echo 'This is a pre-deploy-local command'",
      // post-deploy action
      "post-deploy": "git pull"
    },
  }
}
