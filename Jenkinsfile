pipeline {
     agent any
     tools {nodejs "node15"}
    stages {
        stage('build') {
            steps {
                sh 'Node --version'
            }
        }
        stage('git') {
            steps {
             git 'https://github.com/phumutta/Covid-19-tracking'      
                
            }
        }
        stage('install'){
            steps{
                sh 'npm install'
            }
        }
        stage('test'){
            steps{
                sh 'ls'
            }
        }
      
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
