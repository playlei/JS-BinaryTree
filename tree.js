//json例子//没注意格式，主要是给点思路。
var obj={
	a:{
		a:{a:'111'},
		b:{a:656},
		c:{
			a:{
				c:{a:'asd'},
				t:{a:'qwe'},
				b:{c:'sad'},
				f:{a:'66'},
			}
		}
	},
	b:{
		a:'c',
		d:'d',
		a:{f:{a:'666'}},
		z:{
			a:'asd',
			y:{a:'asd'},
		}
	}
}
var turn=0;//这个 类似一个开关。找一个和找多个
function f1(obj,str,arr){
	for (var key in obj){
		if(obj[key] instanceof Object&&turn==0){//这里的turn==0不写 则找到所有的，写了，只找第一条。查找规律为二叉树的左查找						
			if(key==str){				
				console.log('找到了',obj[key]);
				console.log(arr);
				turn=1;//同上找多个就不用写了。			
   			}else{
				var newarr=[];
				newarr=newarr.concat(arr);
				newarr.push(key); 
				f1(obj[key],str,newarr);
			}
		}
	}
}
f1(obj,'f',[]);
