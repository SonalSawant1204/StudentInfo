const createTable = (data) => {
    let str='<table class="table">';
        str+='<thead>';
            str+='<tr>';
                str+='<th>#</th>';
                str+='<th>Roll No</th>';
                str+='<th scope="col">Name</th>';
                str+='<th scope="col">Marks</th>';
                str+='<th rowspan="2" >Actions</th>';
            str+='</tr>';
        str+='</thead>';
        str+='<tbody>';
    let i=0;
data.forEach((s) => {
    str += '<tr>';
    str+='<td>' + ++i +'</td>';
    str+='<td>'+s['rollNo']+'</td>';
    str+='<td>'+s['userName']+'</td>';
    str+='<td>'+s['userMarks']+ '</td>';
    str+='<td><input type="button" class="btn btn-warning" value="Update" name="userUpdate"  onClick="userUpdate(' + s['rollNo'] + ',\'' + s['userName'].trim() + '\',' + s['userMarks'] +')" ></td>';
    str+='<td><input tupe="button" class="btn btn-danger" name="deleteStudent" value="Delete" onClick="deleteStudent('+s["rollNo"]+')"></td>';
    str+='</tr>';
})
return str += '</tbody></table>';

}

const createUpdateUI=(rollno,name,marks)=>{
    return '<form name="formUpdate"><table><tr><td><label for="userRollNo">Roll No:</label></td><td><input type="number" class="form-control" placeholder="Enter roll no" name="userRollNo" value="' + rollno + '" required></td></tr><tr><td><label for="userName">Name:</label></td> <td><input type="text" class="form-control" placeholder="Enter name" name="userName" value="' + name + '" required></td> </tr><tr><td><label for="userMarks">Marks:</label></td><td><input type="number" class="form-control" placeholder="Enter marks" name="userMarks" value="' + marks + '" required></td></tr> </table><table><tr><td><input type="submit" class="btn btn-success" name="update" value="Update Data"></td><td><input type="button" class="btn btn-default" name="cancel" onclick="retriveData();" value="Cancel"></td></tr></table></form>';
}


const retriveData = ()=>{
    let data = "showAll=showAll";
    $.ajax({
        type: "POST",
        url:"../controller/displayData.php",
        data:data,
        success:(data) =>{
           data = JSON.parse(data);
           data = data['data'];
            console.log(data); 
            $('#retriveData').html(createTable(data));  
        }
    });
}

/*
const str=<form name="formUpdate">
<table>
<tr><td><label for="userRollNo">Roll No:</label></td>
<td><input type="number" class="form-control" placeholder="Enter roll no" name="userRollNo" value="' + rollno + '" required></td></tr>
<tr>
<td><label for="userName">Name:</label></td>
<td><input type="text" class="form-control" placeholder="Enter name" name="userName" value="' + name + '" required></td>
</tr>
<tr>
<td><label for="userMarks">Marks:</label></td>
<td><input type="number" class="form-control" placeholder="Enter marks" name="userMarks" value="' + marks + '" required></td></tr>
</table>
<table><tr><td><input type="submit" class="btn btn-success" name="update" value="Update Data"></td> 
<td><input type="button" onclick="redirect(\'userList.html\')" class="btn btn-default" name="cancel" value="Cancel"></td></tr>
</table> 
</form>

*/