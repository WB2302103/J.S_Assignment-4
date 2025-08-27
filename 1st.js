function Fine( fare )
{
   
    if(fare<=0 ||typeof fare!=='number')
    {
        return 'Invalid';
    }
    else{
let ttl_fine=fare+fare*0.2+30;
        return ttl_fine;
    }
}
 console.log(Fine( "30.5"));