(function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&module.exports?module.exports=b():a.parseCSV=b()})("undefined"==typeof self?this:self,function(){return(a,b)=>(b=b||{},b.separator=b.separator||",",b.withHeaders=b.withHeaders||!0,new Promise((c,d)=>{try{const d=a.replace(/\r/gm,"").replace(/^\s*\n?$/gm,"").split("\n");""===d[d.length-1]&&d.pop();const e=b.withHeaders?d[0].split(","):[],f=0<e.length?d.slice(1):d,g=0<e.length?f.map(a=>a.split(b.separator).reduce((a,b,c)=>(a[e[c]]=b,a),{})):f.map(a=>a.split(separator));c(g)}catch(a){d(a)}}))});
