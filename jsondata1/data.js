let employees=[
    {id:101,name:'Raha',sal:45000,gender:"Male"},
    {id:102,name:'Sonali',sal:55000,gender:"Female"},
    {id:103,name:'Priya',sal:65000, gender:"Female"},
    {id:104,name:'Manohar',sal:75000,gender:"Male"}
    
    ]
    function display_Data(){
    
        let rows=""
        for(emp of employees){
            if(emp.gender !="Female"){
                rows = rows + ` <tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr> `
            }
            
        }
        document.getElementById('name').innerHTML = rows;
    }