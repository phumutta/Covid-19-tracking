@Library('pipeline-library-demo')_

pipeline {
     agent any
     tools {nodejs "node15"}
    stages {
        
                
    
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
               ZipFile()
            }
        }
      stage('deploy'){
          steps{
                
             Deploy()
                
             
          }
      }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
