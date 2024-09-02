#include <iostream>
#include <utility>
#include <iomanip>

using namespace std;
int main() {

  cout << "Hey! I am Sam." << endl;

  cout << "-----------" << endl;

  for (int i = 0; i < 6; i++) {
    for (int j = 0; j < 5 - i; j++) {
      cout << "& ";
    }
    cout << "&" << endl;
  }

  cout << "-----------" << endl;

  int var = 5000;
  cout << "var = " << var << endl;
  var = 1000;
  cout << "var = " << var << endl;

  cout << "-----------" << endl;

  int var1 = 1;
  int var2 = 2;

  // int temp = var2;
  // var2 = var1;
  // var1 = temp;
  swap(var1, var2);

  cout << "Var1 = " << var1 << endl;
  cout << "Var2 = " << var2 << endl;

  cout << std::setw(5); //setw => sets minimum # of character positions variable consumes
  cout << 12 << endl;

}

