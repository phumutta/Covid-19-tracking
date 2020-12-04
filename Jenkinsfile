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
        stage('Init') {
            steps {
                GitPull()                
            }
        }
        stage('test'){
            steps{
                WriteVersion("${params.Version}"+"-"+"${currentBuild.number}")

               
            }
        }
        stage('zip'){
            steps{
                sh 'zip Build.zip ./work version.txt'               
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
