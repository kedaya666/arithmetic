/* 
*  用二分算法找到数组中的15，所在的位置的下标
*/
var arr=[3,5,6,7,9,12,15];
function binary(find,arr,low,high){
    if(low<=high){
        if(arr[low]==find){
            return low;
        }
        if(arr[high]==find){
            return high;
        }
        //折半
        var mid=Math.ceil((high+low)/2);
        if(arr[mid]==find){
            return mid;
        }else if(arr[mid]>find){
            return binary(find,arr,low,mid-1);
        }
        else{
            return binary(find,arr,mid+1,high);
        }
    }
    return -1;//如果没有找到，返回-1；
}
console.log(binary(15,arr,0,arr.length-1))