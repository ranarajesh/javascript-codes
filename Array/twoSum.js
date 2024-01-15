function twoSum(nums, target){
    const numsToIndex  = new Map();

    for(let i =0; i<nums.length; i++){
        const targetElement = target -nums[i];
        if(numsToIndex.has(targetElement)){
            return [numsToIndex.get(targetElement), i]
        }
        numsToIndex.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([1,2,32,3,4,56], 59));