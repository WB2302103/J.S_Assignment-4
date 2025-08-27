function  isSame(arr1 , arr2 ) 
{
    const arrays=arr1;
    const second=arr2;
    if (!Array.isArray(arr1)||!Array.isArray(arr2))
    {
        return 'Invalid';
    }
    else if(arr1.length!==arr2.length)
     {
         return false;
     }
  for(let i=0;i<arrays.length;i++)
  {
    const first_element=arrays[i];
    const second_element=second[i];
    if(first_element!==second_element)
    {
        return false;
    }
  }

 return  true;
}
const my_first_array=[1, 2, 3];
const second=[1 , 2 , 3];
console.log(isSame(my_first_array,second));
