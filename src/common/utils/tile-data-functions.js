export const findTileLoopData = (arr, key) => {
  //find index of current
  const currentIndex = arr.findIndex( project => project.key === key);

  //find index of last shown project and if all are approved get last in array
  const lastIndex = arr.findIndex( project => !project.showInCycle ) || arr.length

  let next, nextnext;
  // if current page is not in cycle, show first two in array
  if(currentIndex > lastIndex){
    next = arr[0];
    nextnext = arr[1];
  } 
  
  //otherwise get based on shown loop
  if(currentIndex + 2 < lastIndex) {
    next = arr[currentIndex + 1]
    nextnext = arr[currentIndex + 2]
  } else {
    next = arr[(currentIndex + 1 ) % lastIndex]
    nextnext = arr[(currentIndex + 2) % lastIndex]
  }

  return {next, nextnext};
};


export const findFeaturedData = (arr, limit = 5) => {
  return arr.reduce((storage, current)=> {
      if(current.isFeatured && storage.length < limit) {
        storage.push(current.value);
      }
      return storage
    }, [])
};