
def call(String ver = '1.0.0-10') {
        echo 'Version : '+"${ver}"
        writeFile file: "./version.txt", text: "Version is:${ver}"

         def data = readFile(file: 'version.txt')
            println(data)
    
        echo 'WriteFile Success'
}

