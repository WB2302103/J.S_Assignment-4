function resultReport(marks) {

    let total = 0;
    let pass = 0;
    let fail = 0;
    let avg=0;
    const arv=[40,45,20];
    if (Array.isArray(marks)) {
        for (let i = 0; i < marks.length; i++) 
        {
            if (typeof marks[i] === 'number') 
            {
                total = total + marks[i];
                if (marks[i] >= 40) 
                {
                    pass++;
                }
                else
                {
                    fail++;
                }
            }
            else
            {
                return 'Invalid';
            }
        }
        if(marks.length>0)
        {
       const arrlen=marks.length;
        avg=Math.round(total/arrlen);
        }
        else{
            avg=0;
        }
        return {
            finalScore: avg,
            pass:pass,
            fail:fail
        }
    }
    else 
    {
        return "Invalid";
    }
    

}

const marks=[4,5,6]
console.log(resultReport(marks));