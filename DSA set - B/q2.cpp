#include <iostream>
#define MAX 5
using namespace std;
 
int stack[MAX];
int top = -1;
 
void push(int val) {
    if(top == MAX - 1)
        cout << "Stack Overflow!\n";
    else
        stack[++top] = val;
}
 
void pop() {
    if(top == -1)
        cout << "Stack Underflow!\n";
    else
        cout << "Popped element: %d\n" << stack[top--];
}
 
void display() {
    if(top == -1)
        cout << "Stack is empty\n";
    else {
        cout << "Stack elements: ";
        for(int i = top; i >= 0; i--)
            cout << "%d ", stack[i];
        cout << "\n";
    }
}
 
int main() {
    push(10);
    push(20);
    push(30);
    display();
    pop();
    display();
    return 0;
}