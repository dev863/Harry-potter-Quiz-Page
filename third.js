function evalfunction(){
    var ele1=document.getElementsByName('care');
    var i=0;var ctr=0;
    for(i=0;i<ele1.length;i++)
    {
        if(ele1[i].checked)
        {
            if(ele1[i].value=="Hagrid")
            {
                ctr++;
            }
        }
    }
    var ele2=document.getElementsByName('patcharm');
    for(i=0;i<ele2.length;i++)
    {
        if(ele2[i].checked)
        {
            if(ele2[i].value=="Stag")
            {
                ctr++;
            }
        }
    }
    var ele3=document.getElementsByName('boggart');
    for(i=0;i<ele3.length;i++)
    {
        if(ele3[i].checked)
        {
            if(ele3[i].value=="Full Moon")
            {
                ctr++;
            }
        }
    }
    var ele4=document.getElementsByName('betrayel');
    for(i=0;i<ele4.length;i++)
    {
        if(ele4[i].checked)
        {
            if(ele4[i].value=="Peter Pettigrew")
            {
                ctr++;
            }
        }
    }
    var ele5=document.getElementsByName('firebolt');
    for(i=0;i<ele5.length;i++)
    {
        if(ele5[i].checked)
        {
            if(ele5[i].value=="Sirius Black")
            {
                ctr++;
            }
        }
    }
    if(ctr==5)
    {
        document.getElementById("demo").innerHTML="Gallopin Gorgon's You've got all your question's correct!!! YAY!!!!"
    }
    else
    {
        document.getElementById("demo").innerHTML="You've scored "+ctr+" out of 5!!!"
    }
}