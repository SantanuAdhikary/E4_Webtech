

let search=(arr, target)=>{


    let ans = [-1,-1];

    let i =0 , j = arr.length - 1 ; 

    // left occurance 

    while(i<=j)
    {
        let mid = Math.floor( i+(j-i) / 2) ;
       
        if(arr[mid]==target)
        {
            ans[0] = mid;
            j=mid-1;
        }
        else if(target > arr[mid])
            i =mid+1;
        else 
            j=mid-1;
    }



    // right occurance 

    i=0;
    j=arr.length - 1; 

    while(i<=j)
    {
        let mid = Math.floor(i+ (j-i) / 2)

        if(arr[mid] == target)
        {
            ans[1] = mid;
            i = mid + 1;
        }
        else if(target > arr[mid])
            i = mid + 1; 
        else 
            j =  mid -1;
    }

    return ans;

}

let arr = [5,7,7,8,8,10];
let target = 5 ;

console.log(search(arr,target))