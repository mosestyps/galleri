pipeline {
    agent any 

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Fetch Dependencies') {
            steps {
                echo 'Running npm install to setup modules...'
                sh 'npm install'
            } 
        }
        stage('test') {
            steps {
                echo 'Running automated tests...'
                sh 'npm test'
            }
        }
        stage('Environment Check') {
            steps {
                echo 'Checking current Node version...'
                sh 'node -v'
            }
        }
        stage('Ship Application') {
            steps {
                echo 'Notifying Render to start deployment...'
                sh "curl -X POST 'https://api.render.com/deploy/srv-d8si6gu7r5hc73fhsog0?key=B4BrVgpIN1Q'"
            }
        }
    }
}