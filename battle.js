function evalfunction(){
    var ele1=document.getElementsByName('diadem');
    var i=0;var ctr=0;
    for(i=0;i<ele1.length;i++)
    {
        if(ele1[i].checked)
        {
            if(ele1[i].value=="The Room of Requirement")
            {
                ctr++;
            }
        }
    }
    var ele2=document.getElementsByName('dead');
    for(i=0;i<ele2.length;i++)
    {
        if(ele2[i].checked)
        {
            if(ele2[i].value=="Narcissa Malfoy")
            {
                ctr++;
            }
        }
    }
    var ele3=document.getElementsByName('nagini');
    for(i=0;i<ele3.length;i++)
    {
        if(ele3[i].checked)
        {
            if(ele3[i].value=="Neville Longbottom")
            {
                ctr++;
            }
        }
    }
    var ele4=document.getElementsByName('elderwand');
    for(i=0;i<ele4.length;i++)
    {
        if(ele4[i].checked)
        {
            if(ele4[i].value=="used it to repair his broken wand")
            {
                ctr++;
            }
        }
    }
    var ele5=document.getElementsByName('blla');
    for(i=0;i<ele5.length;i++)
    {
        if(ele5[i].checked)
        {
            if(ele5[i].value=="Molly Weasley")
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