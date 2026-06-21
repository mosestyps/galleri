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
        stage('Environment Check') {
            steps {
                echo 'Checking current Node version...'
                sh 'node -v'
            }
        }
        stage('Ship Application') {
            steps {
                echo 'Notifying Render to start deployment...'
                sh "curl -X POST 'YOUR_RENDER_DEPLOY_HOOK_URL'"
            }
        }
    }
}