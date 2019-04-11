var res,pro;
		var resource;
		var noofframes;
		var flagFound=0,flag=0,flag2=0;
				var count=0,hit=0,miss=0;
				var pagefault;
				var res_form = document.resource;
				var resource = [];
				var pages=[];
				var frames=[];
				var frameAge=[];
                var i,j,ii,jj;
			

			function BuildFormFields($amount) // For Resorce allocation
			{
            res = $amount;
                if(res<0)
                	alert("Invalid Inputs");
				var
					$container = document.getElementById('FormFields'),
					$item, $field, $i;
				$container.innerHTML = '';
				for ($i = 0; $i < $amount; $i++) {
					$item = document.createElement('div');
					$item.style.margin = '10px';
				
                    $field = document.createElement('label');
                    $field.innerHTML = 'Page '+($i+1);
					$item.appendChild($field);
					$field = document.createElement('input');
					$field.name = 'Design[' + $i + ']';
					$field.type = 'text';
                    $field.setAttribute("class","form-control");
					$item.appendChild($field);
				$container.appendChild($item);
				}
						for(var i = 1;i <= res; i++)
						{
							resource[i-1] = Number(res_form[i].value);
							pages[i-1] = Number(res_form[i].value);         //added
						}

						for(var i=0;i<noofframes;i++)
						{  
						  frames[i]=-1;
						  frameAge[i]=-1;
						}

						console.log(resource);
						var form = document.Need;
						var ned = [];
            }

			var y;

		
			function OPR()
			{
				LRU();
				RESULTS();
			}
			
 function LRU(){
	noofframes = document.getElementById('noofFrames').value;
						//TABLE for NEED
						var tab_need = document.getElementById("tab_need");
						var row = tab_need.insertRow(0);
						var cell = row.insertCell(0);
						cell.innerHTML = "<b>LEAST FREQUENTLY USED</b>";
                        var pro_head = tab_need.insertRow(1);
                        var cell = pro_head.insertCell(0);
                        cell.innerHTML = "<b>Pages</b>";
                        for(i=1;i<=noofframes;i++)
                        {
                            cell = pro_head.insertCell(i);
                            cell.innerHTML = "<b>FRAME "+(i)+"</b>";
						}
						
						ii=i;
						jj=j;
						}
	function RESULTS()					
		{			
						cell = pro_head.insertCell(ii);
						cell.innerHTML = "<b>Page Fault</b>";
    
						var tab_alloc = document.getElementById("tab_need");
						var row = tab_alloc.insertRow(jj+2);
						var cell = row.insertCell(0);
						cell.innerHTML ="Number of Page_Falts:"+miss;
						var cell = row.insertCell(0);
						cell.innerHTML ="Number of Page_Hits:"+hit;
						var cell = row.insertCell(0);
						cell.innerHTML ="Hit ratio:"+hit+"/"+res;
					
					
	}    
					
				

