
pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }
   
    stages {
        stage('Cloning') {
            steps {
                git branch: 'master', url: 'https://github.com/mosestyps/galleri.git'
            }
        }

        stage('Prepare Project') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Tests') {
            steps {
                // npx mocha is for running your tests
                sh 'npx mocha test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'curl -X POST https://api.render.com/deploy/srv-d1at5r8dl3ps73e2mcsg?key=7h0NW4Ddv6Q'
            }
        }
    }
}