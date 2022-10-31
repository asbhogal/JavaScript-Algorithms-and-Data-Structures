// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {

  const arrCopy = [...arr2];
 
  arrCopy.splice(n, 0, ...arr1);
  
  return arrCopy;
}

frankenSplice([1, 2, 3], [4, 5], 1);

/* SPLICE TAKES 1 MANDATORY PARAMETER (THE INDEX POSITION TO START SPLICING) WITH 2 OPTIONAL PARAMETERS (THE NUMBER OF ITEMS TO REMOVE, AND THE VALUES TO INSERT). HERE, SPLICING STARTS AT THE INDEX DICTATED BY THE n ARGUMENT PASSED, 0 ITEMS TO REMOVE, AND THE ENTIRE CONTENTS OF arr1 (USING ... SPREAD OPERATOR) TO THEN BE INSERTED. THE REST OF arr2 WILL THEN FOLLOW AFTER

BY CREATING arrCopy, THE VALUES CAN BE COPIED AND MANIPULATED WITHOUT CHANGING arr1 OR arr2 THEMSELVES (A REQ. OF THE CHALLENGE). THE RESULTING ARRAY IS THEREFORE THEN OUTPUTTED 

N.B. USING THE SPREAD OPERATOR IN LINE 11 ENSURES THE ENTIRE CONTENTS OF arr2 WILL BE COPIED WITHOUT THE ORIGINAL ARRAY BEING CHANGED. OMITTING THIS OPERATOR WILL THEREFORE MUTATE IT.*/