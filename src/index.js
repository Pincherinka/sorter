class Sorter {
  constructor() {
    this.array =[];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {      
    return this.array[index];       
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {   
        
    let subArray = [];
    indices.forEach(index=>{
      subArray.push(this.array[index])
    });
    // custom sort as set in setComporator
    if (this.sorting != null){
      subArray.sort(this.sorting);      
    }
    else {
    // check a type of array
      let sortAsNumber = true;
      for (let element of subArray){
        if (isNaN(element)===true){
          sortAsNumber = false;
          break;
        }
      };
      // sort values according to type
      if (sortAsNumber === true){
      subArray.sort(function(a, b) {
          return a - b;    
        });
      } else subArray.sort();  
     
    }   
    // sort indexes of initial array
    indices.sort(function(a, b) {
      return a - b;    
    });

    // insert sorted values back to initial array
    for (let i=0; i<indices.length; i++){
      this.array[indices[i]]=subArray[i];
    }

  return this.array;  
  }  

  setComparator(compareFunction) {    
    this.sorting = compareFunction;       
  }
}

module.exports = Sorter;
