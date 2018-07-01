
module.exports = {
   account:function(methodType,action=null) {
   	 return {
	    uri:'http://localhost:9200/account/_doc/'+action,
	    method: methodType,
	    headers:{
	      'Content-Type':'application/json'
	    },
	    body:""
      }
   }
}
