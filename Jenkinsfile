pipeline {
    agent any

    environment {
        APP_DIR = "/srv/apps/portfolio"
    }

   options {
        timestamps()
        ansiColor('xterm')
   }

   stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    set -e
                    cd ${APP_DIR}

                    ./deploy.sh
                '''
            }
        }
   }

   post {
        success {
            echo 'Portfolio deployed successfully.'
        }

        failure {
            echo 'Deployment failed'
        }

        always {
            cleanWs()
        }
   }
}
