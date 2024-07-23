const template=`
    // test file:
    {
        "name":"Hello",
        "type":"file",
        "attribs":{
            "lastModified":"7/17",
            "fileExtension":"txt",
            "openWith":"Notepad",
            "readOnly":false,
            "hidden":false,
        },
        "children":"Hello, World!" // content instead of sub-file array
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
            contains more files like above
        ]
},`;
const FileSystem=[
    {   
        "name":"root",
        "type":"dir",
        "attribs":{
            "lastModified":"7/17",
            "readOnly":false,
            "hidden":false,
        },
        "children":[
            {
                "name":"BeanOs",
                "type":"dir",
                "attribs":{
                    "lastModified":"7/17",
                    "readOnly":false,
                    "hidden":false,
                },
                "children":[ 

                ]
            },{
                "name":"Program Files",
                "type":"dir",
                "attribs":{
                    "lastModified":"7/17",
                    "readOnly":false,
                    "hidden":false,
                },
                "children":[ 

                ]
            },{
                "name":"Program Files (x86)",
                "type":"dir",
                "attribs":{
                    "lastModified":"7/17",
                    "readOnly":false,
                    "hidden":false,
                },
                "children":[ 

                ]
            },{
                "name":"Program Data",
                "type":"dir",
                "attribs":{
                    "lastModified":"7/17",
                    "readOnly":false,
                    "hidden":false,
                },
                "children":[ 

                ]
            },{
                "name":"temp",
                "type":"dir",
                "attribs":{
                    "lastModified":"7/17",
                    "readOnly":false,
                    "hidden":false,
                },
                "children":[ 

                ]
            },
        ]
    },
];
export default FileSystem;