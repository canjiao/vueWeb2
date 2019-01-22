const Mock = require('mockjs');//mockjs 导入依赖模块

//新闻资讯
Mock.mock("/newlist",function(){
    return Mock.mock({
        "newlist|10-15":[
            {
                "id|+1":1,
                "imgurl":"@dataImage(50x50)",
                "title":"@cword(10,15)",
                "time":"@datatime()",
                "tapNum|1-100":1,
            }
        ]
    })
})

//图片分享 
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
Mock.mock("/photodetail/imgPreview",function(){
    return Mock.mock({
        "imglist|4-8":[
            {
                "src":"@dataImage('900x600','缩略图')",
                "alt":"@cword(3)",
                "title":"@cword(4,8)",
            }
        ]
    })
})
Mock.mock("/photodetail",function(){
    return Mock.mock({
        "article":{
            "title":"@cword(8,12)",
            "time":"@datetime()",
            "tapNum|1-100":1,
            "content":"<p>@cparagraph(3)</p><p>@cparagraph(5)</p>"
        }
    })
})
//商品购买
Mock.mock("/goodslist",function(){
    return Mock.mock({
        "goodslist|5":[
            {
                "id|+1":1,
                "imgurl":"@dataImage(400x800,'商品图片')",
                "title":"@cword(10,24)",
                "newsprice|2000-5000":2000,   
                "oldsprice|2000-5000":2000, 
                "status":"@pick('马上开卖','热卖中','即将售空','已下架')",
                "num|0-100":0
            }
        ]
    })
})
//商品详情
Mock.mock("/goodsdetail",function(){
    return Mock.mock({
        "goodsInfo":{
            "imgurl":"@dataImage(400x220,'商品图片')",
            "title":"@cword(10)",
            "newsprice|2000-5000":2000,   
            "oldsprice|2000-5000":2000, 
            "number":"@id()",
            "inventory|1-200":0,
            "time":"@datetime()",
        }
    })
})
