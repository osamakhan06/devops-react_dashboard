pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "osamaahmadkhan"
        IMAGE_NAME = "devops-react-dashboard"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
pipeline {
    agent {
        docker {
            image 'node:22-alpine'
            reuseNode true
        }
    }

    environment {
        DOCKERHUB_USER = "osamaahmadkhan"
        IMAGE_NAME = "devops-react-dashboard"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                    -t ${DOCKERHUB_USER}/${IMAGE_NAME}:${IMAGE_TAG} \
                    -t ${DOCKERHUB_USER}/${IMAGE_NAME}:latest \
                    .
                '''
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds-new',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                        -u "$DOCKER_USERNAME" \
                        --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}
                    docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:latest
                '''
            }
        }
    }
            steps {
                sh 'npm ci'
    post {
        success {
            echo 'React application successfully built and pushed to Docker Hub!'
        }
            }

        }

        failure {
            echo 'Pipeline failed. Check the Jenkins console output.'
        stage('Build React App') {
            steps {
                sh 'npm run build'
        }
            }
        }
    }
}
        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                    -t ${DOCKERHUB_USER}/${IMAGE_NAME}:${IMAGE_TAG} \
                    -t ${DOCKERHUB_USER}/${IMAGE_NAME}:latest \
                    .
                '''
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds-new',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                        -u "$DOCKER_USERNAME" \
                        --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}
                    docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'React application successfully built and pushed to Docker Hub!'
        }

        failure {
            echo 'Pipeline failed. Check the Jenkins console output.'
        }
    }
}
