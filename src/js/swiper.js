function Swiper(element){
    if(typeof element==undefined){
        throw Error('params is undefined')
    }
    if(typeof element=='string'){
        this.element=document.querySelector(element);
    }
    if(typeof element=='object'&&elment.nodeType==1){
        this.element=element;
    }
    this.list=null;
    this.total_width=0;//轮播图总宽度
    this.per_width=0;//每一个图片的宽度
    this.offset=0;//位移
    this.timer=null;
}
Swiper.prototype={
    init:function(){
        this.initData();
        this.bindEvents();
        // this.play();
    },
    initData:function(){
        this.list=this.element.querySelector('ul');
        var li=this.element.querySelector('ul li');
        this.total_width=this.list.clientWidth;
        this.per_width=li.clientWidth;
    },
    bindEvents:function(){
        var _element=this.element,_self=this;
        // _element.addEventListener('mouseouver',function(){
        //     _self.stop();
        // })
        // _element.addEventListener('mouseout',function(){
        //     _self.play();
        // })
        var prevEle=document.querySelector('.left-arrow');
        prevEle.addEventListener('click',function(){
            _self.prev()
        })
        var nextEle=document.querySelector('.right-arrow');
        nextEle.addEventListener('click',function(){
            _self.next()
        })
    },
    prev:function(){
        this.animate(400)
    },
    next:function(){
        this.animate(-400)
    },
    play:function(){
        var _self=this;
        _self.timer=setInterval(function(){
            var _offset=-(_self.per_width);
            _self.animate(_offset)
        },2000)
    },
    stop:function(){
        var _self=this;
        clearInterval(_self.timer)
    },
    animate:function(step){
        
        var _self=this,
            time=400,
            interval=10,
            speed=parseInt(step)/(time/interval),
            list=_self.list,
            animated=true,
            newLeft=parseInt(list.style.left)+step;
            // function go(){
            //     if((speed>0&&parseInt(list.style.left)<newLeft)||(speed<0&&parseInt(list.style.left)>newLeft)){
            //         list.style.left=parseInt(list.style.left)+speed+'px';
            //         setTimeout(go,interval)
            //     }else{
            //         if(newLeft>-400){
            //             list.style.left=-1600+'px';
            //         }
            //         if(newLeft<-1600){
            //             list.style.left=-400+'px';
            //         }
            //     }
            // }
            // go()
            list.style.left=newLeft+'px';
            if(newLeft>-400){
                list.style.left=-1600+'px';
            }
            if(newLeft<-1600){
                list.style.left=-400+'px';
            }
    }

}
new Swiper('.s-box').init()