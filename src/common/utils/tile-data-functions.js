export const findTileLoopData = (arr, key) => {
  let current, next, nextnext;

  for(let i=0;i<arr.length;i++){
    if(arr[i].key === key){
      current = arr[i].value;
      
      if(arr[i+1]){
        next = arr[i+1].value;
        nextnext = (arr[i+2] && arr[i+2].value) || arr[0].value;
      } else {
        next = arr[0].value
        nextnext = arr[1].value;
      }
    }
  }

  return {current, next, nextnext};
};


export const findFeaturedData = arr => {
  return arr.reduce((storage, current)=> {
      if(current.isFeatured) {
        storage.push(current.value);
      }
      return storage
    }, [])
};