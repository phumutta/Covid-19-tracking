@Library('pipeline-library-demo')_

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
                pull()                
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
        stage('zip'){
            steps{
                zip zipFile: 'test.zip', dir: './work'
               
                sh 'ls'
            }
        }
      stage('deploy'){
          steps{
                
                sh 'scp test.zip root@139.59.225.121:/root/test/'
                
             
          }
      }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
