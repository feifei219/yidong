$(function(){
      var container=$(".container")[0];
      var innerbox=$(".innerbox")[0];
      var yidongt=setInterval(move,2000)
      function move(){
            animate(innerbox,{marginLeft:-300},function(){
                  var first=getFirst(innerbox)
                  innerbox.appendChild(first);
                  this.style.marginLeft=0;
                  flag1=true;
            })
      }
      container.onmouseover=function(){
            clearInterval(yidongt)
      }
      container.onmouseout=function(){
            yidongt=setInterval(move,2000)
      }

      var prev=$(".prev")[0]
      var next=$(".next")[0]
      var flag1=true;
      var flag2=true;
      next.onclick=function(){
            if(flag1){
                  flag1=false;
                move();
            }
      }

      prev.onclick=function(){
            if(flag2){
                  flag2=false;
                  var first=getFirst(innerbox)
                  var last=getLast(innerbox)
                  innerbox.insertBefore(last,first)
                  innerbox.style.marginLeft="-300px";
                  animate(innerbox,{marginLeft:0},function(){
                        flag2=true;
                  })
            }
      }
  // banner
    var allbtn=$(".btn")
    var allimg=$(".banneritem")
    var nowbtn=$(".btn:first")
    var nowimg=$(".banneritem:first")

    var t=setInterval(banner,2000)
    var num=0;
    var z=2;
    function banner(){
      num++;
      if(num==allbtn.length){
            num=0;
      }
  //     nowbtn                     //第一个按钮
  //   .removeClass("active")     //移除类名
    // .siblings()                 //其他按钮
    // .addBack()                 //所有按钮
    // .eq(num)                   //下一个按钮
    // .addClass("active");       //添加类名

      // nowbtn.removeClass("active").parent().children().eq(num).addClass("active");

      allbtn.filter(nowbtn).removeClass("active").end().eq(num).addClass("active")

      nowimg.animate({left:-740},500,"linear")
      .parent().children().eq(num).css({left:740,zIndex:z++})
      .animate({left:0},500,"linear",function(){
        flag=true;
      })

      nowbtn=allbtn.eq(num)
      nowimg=allimg.eq(num)


     }
     $(".bannerbox").hover(function(){
      clearInterval(t)
      // $(".arrow").show(300)
      $(".arrow").fadeIn(300)
     },function(){
      t=setInterval(banner,2000)
      // $(".arrow").hide(300)
      $(".arrow").fadeOut(300)
     })


     var flag=true;
     $(".you1").click(function(){
      if(flag){
        flag=false;
        banner()
      }
      
     }).mousedown(function(e){

      e.preventDefault()
      e.returnValue=false;   //阻止浏览器默认行为

      // e.stopPropagation()   //阻止事件流
      // e.cancelBubble=true;
     })

     var flag2=true;
     
     

     $(".zuo1").click(function(){
      if(flag2){
      flag2=false;
      num--;
      if(num==-1){
        num=allbtn.length-1;
      }
      allbtn.filter(nowbtn).removeClass("active").end().eq(num).addClass("active")
      nowimg.animate({left:740},500,"linear")
      .parent().children().eq(num).css({left:-740,zIndex:z--})
      .animate({left:0},500,"linear",function(){
        flag2=true;
      })

      nowbtn=allbtn.eq(num)
      nowimg=allimg.eq(num)
    }
     }).mousedown(function(e){

      e.preventDefault()
      e.returnValue=false;   //阻止浏览器默认行为

      // e.stopPropagation()   //阻止事件流  FF
      // e.cancelBubble=true;   //ie
     })

       allbtn.click(function(){
          nowbtn.removeClass("active");
          $(this).addClass("active")
          nowbtn=$(this);
        

         var now=nowimg.index();  //当前显示的图片
         var show=$(this).index();  //将要点击 要显示的图片

         if(show>now){
            nowimg.animate({left:-740},500,"linear");
            allimg.eq(show).css({left:740,zIndex:z++}).animate({left:0})

         }else if(show<now){
              nowimg.animate({left:740},500,"linear");
            allimg.eq(show).css({left:-740,zIndex:z++}).animate({left:0})
         }
         num=show;  //点击后继续从当前播
         nowimg=allimg.eq(show)


      })
      



//图片移动
   var  movetu=$(".tu-move")
   for (var i = 0; i < movetu.length; i++) {
     tumove(movetu[i])
   };
   function  tumove(obj){
       obj.onmouseover=function(){
         animate(obj,{marginRight:20},600)
       }
       obj.onmouseout=function(){
         animate(obj,{marginRight:0},600)
       }
   }
 
// 顶部 drop
   var dropup=$(".dropup");
   var drop=$(".drop");
  
   for (var i = 0; i < dropup.length; i++) {
     dropup[i].index=i;
     dropup[i].onmouseover=function(){
         drop[this.index].style.display="block";
     }
     dropup[i].onmouseout=function(){
           drop[this.index].style.display="none";
     }
   }; 
// 导航
var navlist=$(".nav-list");
      var secondnav=$(".second-nav");
      for (var i = 0; i < secondnav.length; i++) {
        navlist[i].index=i;
        hover(navlist[i],function(){
          secondnav[this.index].style.display="block";
          var a=$("a",this)[0];
          a.style.color="#0085D1";
        },function(){
          secondnav[this.index].style.display="none";
          var a=$("a",this)[0];
          a.style.color="#666";
        })
      }
// 右边浮动
      var moveleft=$(".move-left");
      
      for (var i = 0; i < moveleft.length; i++) {
        moveleft[i].index=i;
        moveleft[i].onmouseover=function(){
          animate(moveleft[this.index],{left:-84})
        }
        moveleft[i].onmouseout=function(){
          animate(moveleft[this.index],{left:-20})
        }

      }

// 按需加载图片

    var imgarr=$("img")
    var chuangkou=getWindow();
    for (var i = 0; i < imgarr.length; i++) {
      imgarr[i].datasrc=imgarr[i].src;
      imgarr[i].src=""
    };
    var bheight=document.documentElement.clientHeight;

    for (var j = 0; j < imgarr.length; j++) {

      if(getPosition(imgarr[j]).y<bheight){
          imgarr[j].src=imgarr[j].datasrc;
      }
    }

    window.onscroll=function(){
      var st=chuangkou.scrollTop;
      for (var i = 0; i < imgarr.length; i++) {
        if((st+bheight)>getPosition(imgarr[i]).y){
          imgarr[i].src=imgarr[i].datasrc;
        }
      }
    }
// 公告

        var act_gg=$(".gg-move");
        for (var i = 0; i < act_gg.length; i++) {
          act_move(act_gg[i]);
        };
        function act_move(act_gg){
        setInterval(function(){
        animate(act_gg,{marginTop:0},function(){
          var first=getFirst(act_gg);
          act_gg.appendChild(first);
          this.style.marginTop="0";
        })
      },2000)
      }


 })