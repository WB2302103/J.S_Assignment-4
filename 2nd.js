function  onlyCharacter(str)
{
  const s=str.toUpperCase();
  if (typeof s !== "string")
  {
    return 'Invalid';
  }
    let newstr='';
  for(let i=0;i<s.length;i++)
    {
        const name=s[i];
     if(name!==" ")
        {
            newstr+=name;
        }
    }
    return newstr;
    
}
console.log(onlyCharacter("h e l l o").toUpperCase());

