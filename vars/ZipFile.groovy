def call() {
   echo '============Zip File============'
    sh 'zip Build.zip ./work version.txt'               
    sh 'ls'
                
}
