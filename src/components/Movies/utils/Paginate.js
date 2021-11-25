import _ from "lodash"

export function paginate(items, pageNumber, pageSize){
 const startIndex = (pageNumber - 1) * pageSize;
 // Convert items array to a lodash wrapper, slice them, take them and return them as a regular array again
 return _(items)
  .slice(startIndex)
  .take(pageSize)
  .value(); //this returns a lodash object (_(items)) and with that we can chain all the lodash methods. .slice method returns the portion of the array(the lodash wrapper object) starting from startIndex. .take takes the number of pageSize from the sliced array(the lodash wrapper object). Value converts the lodash wrapper object into a regullar array
}

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

//The _.take() method is used to create a slice of an array with n elements from the beginning.