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
                sh 'npm install zip'
            }
        }
        stage('test'){
            steps{
                sh 'ls'
                script {
                   def data = readFile(file: 'README.md')
                   println(data)
               }
            }
        }
        stage('zip'){
            steps{
                zip zipFile: 'test.zip', dir: 'src'
               
                sh 'ls'
            }
        }
      stage('deploy'){
          steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'DigitalOcean', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'apt-get update', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '*.war')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
          }
      }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
