module.exports = {
	userExist : function(user) {
	  return { "query": {
			"bool": {
			  "must": [
			    { "match": { "user": user} }
			   ]
			}
		  }
      }
    },
    auth:function(user,password){
	   return {
		"query": {
		"bool": {
		  "must": [
		    {
		      "match": {
		        "user": user
		      }
		    },
		    {
		      "match": {
		        "password": password
		      }
		    }
		  ]
		 }
	   }
     }
    }
}