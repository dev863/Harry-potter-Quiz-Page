function evalfunction(){
    var ele1=document.getElementsByName('travel');
    var i=0;var ctr=0;
    for(i=0;i<ele1.length;i++)
    {
        if(ele1[i].checked)
        {
            if(ele1[i].value=="Ron")
            {
                ctr++;
            }
        }
    }
    var ele2=document.getElementsByName('sorting');
    for(i=0;i<ele2.length;i++)
    {
        if(ele2[i].checked)
        {
            if(ele2[i].value=="Gryffindor")
            {
                ctr++;
            }
        }
    }
    var ele3=document.getElementsByName('team');
    for(i=0;i<ele3.length;i++)
    {
        if(ele3[i].checked)
        {
            if(ele3[i].value=="Seeker")
            {
                ctr++;
            }
        }
    }
    var ele4=document.getElementsByName('gift');
    for(i=0;i<ele4.length;i++)
    {
        if(ele4[i].checked)
        {
            if(ele4[i].value=="Cloak")
            {
                ctr++;
            }
        }
    }
    var ele5=document.getElementsByName('fluff');
    for(i=0;i<ele5.length;i++)
    {
        if(ele5[i].checked)
        {
            if(ele5[i].value=="Stone")
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