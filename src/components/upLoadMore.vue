<script>
export default {
    upLoadMore(className,callback){
        //获取滚动条距离顶部位置 scrollTop
        function getScrollTop() {
            var scrollTop = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            return scrollTop;
        }
        //获取当前可视范围的高度 clientHeight   
        function getClientHeight() {
            var clientHeight = 0;
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
            } else {
                clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
            }
            return clientHeight;
        }
        //获取文档完整的高度 scrollHeight
        function getScrollHeight() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
         
        //定义开始点的x和y ； 结束点的x和y
        var startx, starty,endx,endy;
        var result = false;   //方向向上为true
        
        var cur = document.querySelector(className)
        //手指接触屏幕
        cur.addEventListener("touchstart", function(e){
            startx = e.touches[0].pageX;  //开始点的x
            starty = e.touches[0].pageY;  //开始点的y
            console.log(starty)
        }, false);
        //手指滑动屏幕
        cur.addEventListener("touchmove", function(e){
            document.querySelector(className).style.transform="translateY(0px)";
            //判断滚动条是否达到底部 
            if(getScrollTop() + getClientHeight() == getScrollHeight()){
                console.log("到底部了")
                endx = e.targetTouches[0].pageX;  //结束点的x
                endy = e.targetTouches[0].pageY;  //结束点的y
                
                //判断移动的距离
                var angx = endx - startx;  //X放向滑动的距离
                var angy = endy - starty;  //y方向滑动的距离
                
                //判断移动的角度
                var angle = Math.atan2(angy, angx) * 180 / Math.PI;
                if (Math.abs(angle) > 45 && Math.abs(angle) < 135 && starty - endy > 120) { //说明方向向上
                    result = true;
                    document.querySelector(className).style.transform="translateY(-32px)";
                    document.querySelector(className).style.transition="all 0.5s linear"
                }
            }
            
        }, false);
        //手指离开屏幕
        cur.addEventListener("touchend", function(e) {
            console.log("手指离开了")
            if(result){
                result=false;
                callback();
            }
        }, false);   
    }
}
</script>
<style lang="less">

</style>
