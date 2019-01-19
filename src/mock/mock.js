const Mock = require('mockjs');//mockjs 导入依赖模块

 
Mock.mock("/photoList/cates",function(req,res) {
    return Mock.mock({
        "cates|5-10": [
                {
                    "id|+1":1,
                    "title": '@cword(2,4)',//中文
                }
            ]
        })
})
Mock.mock("/photoList/pic",function(req,res){
    return Mock.mock({
        "listPic|1-10":[
            {
                "id|+1":1,
                "url":"@dataImage('500x250')",
                "introduction":"@cparagraph(1, 3)"
            }
        ]
    })
})

