$(function(){
    
	if($(".zipcode.required").length > 0){
			getZipcodeList();
	}
	
	$(".zipcode").change(function(e) {
		
		/*e.preventDefault();*/
		
		var gugun = $(this).val();
		var obj = $(this).parent();
		var id = $(this).attr("title");
		
		getListSido(obj,gugun,id);
		
	});
})

function getListSido(obj,gugun,id){
	var param =  {"gugun":gugun};
	$.ajax({
		type : "post",
		data :  JSON.stringify(param),
		url : "/zipcode/getListSido",
		processData : false,
		contentType : false,
		dataType : "json",
		contentType: "application/json",
		success : function(zipcode) { 
			
			obj.find("select[name = '"+id+"']").next().remove();
			obj.find("select[name = '"+id+"']").remove();
			
			obj.append(
					'<select class="js-example-basic-single" id="'+id+'" name="'+id+'" >'
			);
			
			$("#"+id).append(
					'<option value ="" >지역구</option>'
			);
			
			for(var i = 0; i<zipcode.length; i++){
				$("#"+id).append(
						'<option value ="'+zipcode[i]+'" >'+zipcode[i]+'</option>'
				);
			}
			
			$("#"+id).select2();
		},
		error : function(args) {
			console.log('error');
		}
	});
}


function getZipcodeList(){
	
	$.ajax({
		type : "post",
		url : "/zipcode/getList",
		processData : false,
		contentType : false,
		dataType : "json",
		contentType: "application/json",
		success : function(zipcode) { 
			for(var i = 0; i<zipcode.length; i++){
				$(".zipcode").append('<option value="'+zipcode[i]+'">'+zipcode[i]+'</option>');	
			}
		},
		error : function(args) {
			console.log('error');
		}
	});
	
}