
#include <stdio.h>



// using pointers to be more efficient

int sum_array(int *arr,int *size) {
    int result = 0 ;
   for(int i =0 ; i < *size; i++){
        // we are adding the pointer value plus 1 to get the next location
        result += *(arr+i);
    }
    return result;
}




int main(){

// test inputs
    int arr[] = {5,4,342,554};
    int size = 4;
    for(int i = 0 ; i < size ; i++){
        printf("Our values for the array are : %d \n",arr[i]);
    }
// test function
    int result = sum_array(arr,&size);

// get output

    printf("Our result is %d,", result);
    return 0;
}



// calculate simple interest 
// * means that we are accesing the pointer value since we are not modifying them we only need to know the value
float simple_interest (float *p , float *r,  float *t){

    float si;
// we are multipliyng all of the value that are in the pointers
    si = (*p) * (*r) * (*t);
// returning the value so that it can be stored.
    return si; 

}

// int main(){


// // initialize variables
//     float p;

//     float  rate;
//     float t;
// // get inputs

//     printf("Input principal, interest, and years, \n");

//     scanf("%f",&p);
//     scanf("%f",&rate);
//     scanf("%f",&t);

//     //  calculating results
// // we are using pointers to be more efficient
//     float result = simple_interest(&p,&rate,&t);

//     printf("Your result is %f \n", result);

//     return 0;
// }



struct Employee{
  
//   we are creating a template so that we can create multiple employeees
    char name[100];
    int id;
    float salary;
};


// example
int main(){

    struct Employee Luis;
    Luis.id = 50304;    
}
