const FileSystem=[
    // test file:
    {
        "name":"Hello.txt",
        "type":"file",
        "attribs":{
            "lastModified":"7/17",
            "openWith":"Notepad",
            "readOnly":false,
            "hidden":false,
        },
        "children":`Hello, World!` // content instead of sub-file array
    },
    // test folder:
    {
        "name":"test_dir",
        "type":"dir",
        "attribs":{
            "lastModified":"7/17",
            "readOnly":false,
            "hidden":false,
        },
        "children":[ 
            // contains more files like above
        ]
    },
];
export default FileSystem;