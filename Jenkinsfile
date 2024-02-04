pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system (e.g., GitHub)
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    docker.build("node-todo-app")
                }
            }
        }

       stage('Push to Docker Hub') {
            steps {
                script {
                    // Tag the Docker image for Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("node-todo-app").push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Deploy or perform additional actions here.'
        }
        failure {
            echo 'Pipeline failed! Take necessary actions to handle failures.'
        }
    }
}
