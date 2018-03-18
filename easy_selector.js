// $("*").click(function(e){
//     e.stopPropagation();
//     e.preventDefault();
//     if ($(this).prop("class")) {
//         console.log($(this).prop("tagName")+'.'+$(this).prop("class").split(' ').join("."));
//     }
//     else if($(this).prop("id")){
//         console.log($(this).prop("tagName")+'#'+$(this).prop("id").split(' ').join("."));
//     }
//     else if($(this).prop("tagName")){
//         state=1;
//         tagpath=$(this).prop("tagName");
//         tag=$(this);
//         while (state==1) {
//             tag=tag.parent();
//             if(tag.prop("id")){
//                 tagpath=tag.prop("tagName")+'#'+tag.prop("id")+' '+tagpath;
//                 state=0;
//             }
//             else if (tag.prop("class")) {
//                 tagpath=tag.prop("tagName")+'.'+tag.prop("class").split(' ').join(".")+' '+tagpath;
//                 state=0;
//             }
//             else {
//                 tagpath=tag.prop("tagName")+' '+tagpath;
//             } 
//         }
//         console.log(tagpath);
//     }
// })
//hotkey control
document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
            function removeEmptyArrayEle(arr){    
              for(var i = 0; i < arr.length; i++) {
               if(arr[i] == '') {
                  arr.splice(i,1);
                  i = i - 1; // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
                                   // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
                }
               }
               return arr;
            };
            if(e && e.keyCode==27){ // 按 Esc 
                console.log('esc')
                window.location.reload();
              }
            if(e && e.keyCode==113){ // 按 F2 
                 console.log('F2')
                 $("*").click(function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        if($(this).prop("id")){
                            fclass=removeEmptyArrayEle($(this).prop("id").split(' ')).join(".");
                            console.log($(this).prop("tagName")+'#'+$(this).prop("id").split(' ').join("."));
                        }
                        else if ($(this).prop("class")) {  
                            fclass=removeEmptyArrayEle($(this).prop("class").split(' ')).join(".");
                            console.log($(this).prop("tagName")+'.'+fclass);
                        }
                        else if($(this).prop("tagName")){
                            state=1;
                            tagpath=$(this).prop("tagName");
                            tag=$(this);
                            while (state==1) {
                                tag=tag.parent();
                                if(tag.prop("id")){
                                    tagpath=tag.prop("tagName")+'#'+tag.prop("id")+' '+tagpath;
                                    state=0;
                                }
                                else if (tag.prop("class")) {
                                    fclass=removeEmptyArrayEle(tag.prop("class").split(' ')).join(".");
                                    tagpath=tag.prop("tagName")+'.'+fclass+' '+tagpath;
                                    state=0;
                                }
                                else {
                                    tagpath=tag.prop("tagName")+' '+tagpath;
                                } 
                            }
                            console.log(tagpath);
                        }
                    })
               }            
             if(e && e.keyCode==13){ // enter 键

                 console.log('enter')
            }
        }; 